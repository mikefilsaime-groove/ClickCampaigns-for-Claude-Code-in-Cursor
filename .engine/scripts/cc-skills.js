/**
 * ClickCampaigns Skills CLI
 *
 * Authenticates with ClickCampaigns.ai and fetches protected skill files
 * (marketing methodologies) on-demand for God Mode / Claude Code usage.
 *
 * Usage:
 *   node scripts/cc-skills.js login          — Authenticate via browser
 *   node scripts/cc-skills.js fetch <path>   — Fetch a skill file (prints to stdout)
 *   node scripts/cc-skills.js verify         — Check if stored token is valid
 *   node scripts/cc-skills.js logout         — Remove stored token
 *   node scripts/cc-skills.js list           — List all available skill paths
 *
 * Token is stored in .clickcampaigns.json under the cliAuthToken field.
 */

import { config } from "dotenv";
import { readFileSync, writeFileSync, existsSync, readdirSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";
import { createInterface } from "readline";

config();

const API_URL = (
  process.env.CLICKCAMPAIGNS_API_URL || "https://app.scaleplus.gg"
).replace(/\/$/, "");

const CONFIG_PATH = join(process.cwd(), ".clickcampaigns.json");
const SKILLS_BASE = join(process.cwd(), ".engine/skills-and-instructions/skills");

const [, , command, ...rest] = process.argv;

if (!command) {
  console.error("Usage:");
  console.error("  node scripts/cc-skills.js login          — Authenticate via browser");
  console.error("  node scripts/cc-skills.js fetch <path>   — Fetch a skill file");
  console.error("  node scripts/cc-skills.js verify         — Check token validity");
  console.error("  node scripts/cc-skills.js logout         — Remove stored token");
  console.error("  node scripts/cc-skills.js list           — List available skills");
  process.exit(1);
}

function readConfig() {
  if (!existsSync(CONFIG_PATH)) return {};
  try {
    return JSON.parse(readFileSync(CONFIG_PATH, "utf-8"));
  } catch {
    return {};
  }
}

function writeConfig(updates) {
  const existing = readConfig();
  const merged = { ...existing, ...updates };
  writeFileSync(CONFIG_PATH, JSON.stringify(merged, null, 2) + "\n");
}

function getToken() {
  const cfg = readConfig();
  return cfg.cliAuthToken || null;
}

function openBrowser(url) {
  try {
    const platform = process.platform;
    if (platform === "darwin") {
      execSync(`open "${url}"`);
    } else if (platform === "win32") {
      execSync(`start "" "${url}"`);
    } else {
      execSync(`xdg-open "${url}"`);
    }
  } catch {
    console.log(`Please open this URL in your browser: ${url}`);
  }
}

function prompt(question) {
  return new Promise((resolve) => {
    const rl = createInterface({ input: process.stdin, output: process.stderr });
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function skillsFetch(path, token) {
  const url = `${API_URL}/api/skills/${path}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 401) {
    console.error(
      "Authentication failed. Your token may be expired or revoked."
    );
    console.error("Run: node scripts/cc-skills.js login");
    process.exit(1);
  }

  if (res.status === 403) {
    const data = await res.json().catch(() => ({}));
    console.error(data.message || "Access denied. Your account may be suspended.");
    process.exit(1);
  }

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error(`API error ${res.status}: ${text || res.statusText}`);
    process.exit(1);
  }

  return res;
}

async function main() {
  switch (command) {
    case "login": {
      console.error("Opening ClickCampaigns CLI auth page in your browser...");
      console.error("");
      openBrowser(`${API_URL}/cli-auth`);
      console.error("1. Log in to your ClickCampaigns account (if not already)");
      console.error('2. Click "Generate CLI Token"');
      console.error("3. Copy the token and paste it below");
      console.error("");

      const token = await prompt("Paste your CLI token here: ");

      if (!token || !token.startsWith("cliauth-")) {
        console.error('Invalid token. Token must start with "cliauth-".');
        process.exit(1);
      }

      // Validate the token
      console.error("Validating token...");
      const res = await skillsFetch("list", token);
      const data = await res.json();

      writeConfig({ cliAuthToken: token });
      console.error(
        `Authenticated successfully. ${data.skills?.length || 0} skills available.`
      );
      break;
    }

    case "fetch": {
      const skillPath = rest.join("/");
      if (!skillPath) {
        console.error(
          "Usage: node scripts/cc-skills.js fetch <path>"
        );
        console.error(
          "Example: node scripts/cc-skills.js fetch funnels/product-launch-plf/SKILL.md"
        );
        process.exit(1);
      }

      // Admin mode: read from local filesystem
      const fetchCfg = readConfig();
      if (fetchCfg.adminMode) {
        const localPath = join(SKILLS_BASE, skillPath);
        if (existsSync(localPath)) {
          process.stdout.write(readFileSync(localPath, "utf-8"));
          break;
        }
        console.error(`[admin] Local file not found: ${localPath}, falling back to API...`);
      }

      const token = getToken();
      if (!token) {
        console.error(
          "Not authenticated. Run: node scripts/cc-skills.js login"
        );
        process.exit(1);
      }

      const res = await skillsFetch(`fetch/${skillPath}`, token);
      const content = await res.text();
      // Print to stdout (not stderr) so the agent can read it
      process.stdout.write(content);
      break;
    }

    case "verify": {
      // Admin mode: skills are local, no token needed
      const verifyCfg = readConfig();
      if (verifyCfg.adminMode) {
        console.log("Admin mode active. Skills are read from local files. No authentication required.");
        break;
      }

      const token = getToken();
      if (!token) {
        console.error(
          "No token stored. Run: node scripts/cc-skills.js login"
        );
        process.exit(1);
      }

      const res = await skillsFetch("list", token);
      const data = await res.json();
      console.log(`Token is valid. ${data.skills?.length || 0} skills available.`);
      break;
    }

    case "logout": {
      const cfg = readConfig();
      delete cfg.cliAuthToken;
      writeFileSync(CONFIG_PATH, JSON.stringify(cfg, null, 2) + "\n");
      console.log("CLI token removed.");
      break;
    }

    case "list": {
      // Admin mode: scan local skill directories
      const listCfg = readConfig();
      if (listCfg.adminMode) {
        let count = 0;
        for (const category of ["funnels", "tasks"]) {
          const categoryPath = join(SKILLS_BASE, category);
          if (!existsSync(categoryPath)) continue;
          const entries = readdirSync(categoryPath, { withFileTypes: true });
          for (const entry of entries) {
            if (!entry.isDirectory()) continue;
            const skillFile = join(categoryPath, entry.name, "SKILL.md");
            if (existsSync(skillFile)) {
              console.log(`${category}/${entry.name}/SKILL.md`);
              count++;
            }
            // Check for sub-skills (e.g., tasks/website/booking-calendar/)
            const subDir = join(categoryPath, entry.name);
            const subEntries = readdirSync(subDir, { withFileTypes: true });
            for (const sub of subEntries) {
              if (!sub.isDirectory()) continue;
              const subSkillFile = join(subDir, sub.name, "SKILL.md");
              if (existsSync(subSkillFile)) {
                console.log(`${category}/${entry.name}/${sub.name}/SKILL.md`);
                count++;
              }
            }
          }
        }
        if (count === 0) console.log("No local skills found.");
        break;
      }

      const token = getToken();
      if (!token) {
        console.error(
          "Not authenticated. Run: node scripts/cc-skills.js login"
        );
        process.exit(1);
      }

      const res = await skillsFetch("list", token);
      const data = await res.json();
      if (data.skills?.length) {
        for (const s of data.skills) {
          console.log(s);
        }
      } else {
        console.log("No skills available.");
      }
      break;
    }

    default:
      console.error(`Unknown command: ${command}`);
      console.error("Commands: login, fetch, verify, logout, list");
      process.exit(1);
  }
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
