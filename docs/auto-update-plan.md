# God Mode — Auto-Update Feature Plan

## Overview

Add automatic update detection and installation to the God Mode Electron app using `electron-updater` (from electron-builder) with GitHub Releases as the update source.

---

## How It Works

1. **GitHub Releases as the update source** — each new version is published as a GitHub Release with built artifacts (.dmg, .exe, .AppImage). `electron-updater` checks GitHub Releases for newer versions automatically.

2. **Update flow in the app:**
   - On launch (or periodically), the app calls `autoUpdater.checkForUpdates()`
   - If a new version is found, it downloads in the background
   - Show an "Update Available" banner/button in the UI
   - User clicks "Update" → app quits, installs, and restarts

---

## What's Needed

| # | Task | Details |
|---|------|---------|
| 1 | Add `electron-updater` dependency | `npm install electron-updater` |
| 2 | Main process update logic | Add `autoUpdater.checkForUpdatesAndNotify()` in `src/main/index.ts` |
| 3 | IPC bridge | Expose update events (checking, available, downloaded, error) to renderer via preload |
| 4 | Renderer UI component | Banner or notification showing "Update Available — Click to Install" |
| 5 | Publish releases to GitHub | Use `electron-builder --publish always` or publish manually |
| 6 | Version bumping workflow | Bump `package.json` version before each release build |

---

## Code Signing Consideration

- **macOS auto-update works best with a signed app.** Without code signing, users need to re-do the right-click → Open dance on each update.
- **Alternative (no signing):** A simpler "new version available, click here to download" approach that opens the latest GitHub Release page in the browser. Users download and install manually.
- **Recommendation:** Start with the manual download approach, then upgrade to full auto-update once the app is code-signed via the Apple Developer Program (see `apple-developer-setup.md`).

---

## Simplified Approach (No Code Signing)

If we skip code signing initially:

```typescript
// Main process — check GitHub API for latest release
const { net } = require('electron');

async function checkForUpdates() {
  const response = await net.fetch(
    'https://api.github.com/repos/OWNER/REPO/releases/latest'
  );
  const release = await response.json();
  const latestVersion = release.tag_name.replace('v', '');
  const currentVersion = app.getVersion();

  if (latestVersion !== currentVersion) {
    // Send to renderer via IPC
    mainWindow.webContents.send('update-available', {
      version: latestVersion,
      url: release.html_url
    });
  }
}
```

The renderer shows a banner: "Version X.X.X available — Download Now" which opens the GitHub release page.

---

## Full Auto-Update Approach (With Code Signing)

```typescript
// Main process
import { autoUpdater } from 'electron-updater';

autoUpdater.autoDownload = true;
autoUpdater.autoInstallOnAppQuit = true;

app.on('ready', () => {
  autoUpdater.checkForUpdatesAndNotify();
});

autoUpdater.on('update-available', (info) => {
  mainWindow.webContents.send('update-available', info);
});

autoUpdater.on('update-downloaded', (info) => {
  mainWindow.webContents.send('update-downloaded', info);
});

// When user clicks "Install Update"
ipcMain.on('install-update', () => {
  autoUpdater.quitAndInstall();
});
```

---

## Publishing a Release

```bash
# 1. Bump version in package.json
# 2. Build
npm run build

# 3. Build distributables
npx electron-builder --mac --win --linux

# 4. Create GitHub release (manually or via CI)
gh release create v1.1.0 \
  "release/God Mode-1.1.0-universal.dmg" \
  "release/God Mode Setup 1.1.0.exe" \
  "release/God Mode-1.1.0.AppImage" \
  --title "God Mode v1.1.0" \
  --notes "Release notes here"
```

---

## Priority

**Phase 1 (Now):** Skip — manual DMG distribution via thank-you page download
**Phase 2 (Soon):** Simple GitHub API check + "Download Update" link
**Phase 3 (Later):** Full `electron-updater` auto-update after Apple Developer enrollment + code signing
