/**
 * ClickCampaigns API Client
 *
 * Communicates with the ClickCampaigns.ai SaaS via scoped auth tokens.
 * External AI agents use this to fetch campaign data and report progress.
 *
 * Usage:
 *   node scripts/cc-api.js fetch <token>          — Fetch full campaign data
 *   node scripts/cc-api.js verify <token>         — Check if token is valid
 *   node scripts/cc-api.js status <token> <taskId> <status> — Report task status
 *
 * Requires CLICKCAMPAIGNS_API_URL in .env (defaults to https://clickcampaigns.ai)
 */

import { config } from "dotenv";
config();

const API_URL = (process.env.CLICKCAMPAIGNS_API_URL || "https://clickcampaigns.ai").replace(
  /\/$/,
  ""
);

const [, , command, token, ...rest] = process.argv;

if (!command || !token) {
  console.error("Usage:");
  console.error("  node scripts/cc-api.js fetch <token>");
  console.error("  node scripts/cc-api.js verify <token>");
  console.error("  node scripts/cc-api.js status <token> <taskId> <status>");
  process.exit(1);
}

async function apiFetch(path, options = {}) {
  const url = `${API_URL}/api/external${path}?token=${encodeURIComponent(token)}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error(`API error ${res.status}: ${text || res.statusText}`);
    process.exit(1);
  }

  return res.json();
}

async function main() {
  switch (command) {
    case "fetch": {
      const data = await apiFetch("/campaign");
      console.log(JSON.stringify(data, null, 2));
      break;
    }

    case "verify": {
      const info = await apiFetch("/campaign/token-info");
      console.log(`Token valid for campaign: ${info.campaignName}`);
      console.log(`Created: ${info.createdAt}`);
      console.log(`Expires: ${info.expiresAt}`);
      break;
    }

    case "status": {
      const [taskId, status] = rest;
      if (!taskId || !status) {
        console.error("Usage: node scripts/cc-api.js status <token> <taskId> <status>");
        console.error("Status values: pending, in_progress, completed");
        process.exit(1);
      }
      const result = await apiFetch("/campaign/status", {
        method: "POST",
        body: JSON.stringify({ taskId, status }),
      });
      console.log("Status updated:", JSON.stringify(result, null, 2));
      break;
    }

    default:
      console.error(`Unknown command: ${command}`);
      console.error("Commands: fetch, verify, status");
      process.exit(1);
  }
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
