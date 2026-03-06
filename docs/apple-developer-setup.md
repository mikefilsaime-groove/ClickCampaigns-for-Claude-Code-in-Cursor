# Apple Developer Program — Code Signing Setup

## Why You Need This

Without code signing:
- macOS shows a scary "unidentified developer" warning on first launch
- Users must right-click → Open → Open to bypass Gatekeeper
- Auto-update via `electron-updater` won't work smoothly (users re-do the bypass each time)
- The app cannot be distributed via the Mac App Store

With code signing:
- App opens normally with no warnings
- Auto-update works seamlessly (quit → install → restart)
- Professional, trusted experience for users

---

## Step 1: Enroll in the Apple Developer Program

**Cost:** $99/year

1. Go to [developer.apple.com/programs](https://developer.apple.com/programs/)
2. Click **Enroll**
3. Sign in with your Apple ID (or create one)
4. Choose enrollment type:
   - **Individual** — if enrolling as yourself
   - **Organization** — if enrolling as a company (requires a D-U-N-S number)
5. Pay the $99 annual fee
6. Wait for approval (usually 24-48 hours, sometimes instant for individuals)

### Organization Enrollment (if applicable)

If enrolling as a company (e.g., Monarch Labs LLC):
- You need a **D-U-N-S Number** (free from Dun & Bradstreet)
- Check if you already have one: [developer.apple.com/enroll/duns-lookup](https://developer.apple.com/enroll/duns-lookup/)
- If not, request one (takes ~5 business days): [dnb.com/duns-number/get-a-duns.html](https://www.dnb.com/duns-number/get-a-duns.html)
- The organization name on the certificate will match your legal entity name

---

## Step 2: Create Certificates

After enrollment is approved:

1. Go to [developer.apple.com/account](https://developer.apple.com/account)
2. Navigate to **Certificates, Identifiers & Profiles**
3. Click **+** to create a new certificate
4. Select **Developer ID Application** (this is for distributing outside the Mac App Store)
5. Follow the steps to create a Certificate Signing Request (CSR) from Keychain Access:
   - Open **Keychain Access** on your Mac
   - Menu: Keychain Access → Certificate Assistant → **Request a Certificate From a Certificate Authority**
   - Enter your email, name, select "Saved to disk"
   - Upload the .certSigningRequest file to Apple
6. Download the certificate and double-click to install it in your Keychain

---

## Step 3: Set Up Notarization

Apple requires notarization for all Developer ID-signed apps (since macOS 10.15 Catalina).

1. In your Apple Developer account, go to **App Store Connect** → **Users and Access**
2. Create an **App-Specific Password** at [appleid.apple.com](https://appleid.apple.com):
   - Sign in → Security → App-Specific Passwords → Generate
   - Save this password securely

3. Store credentials for electron-builder:

```bash
# Option A: Environment variables
export APPLE_ID="your@email.com"
export APPLE_APP_SPECIFIC_PASSWORD="xxxx-xxxx-xxxx-xxxx"
export APPLE_TEAM_ID="XXXXXXXXXX"  # Your 10-character Team ID

# Option B: Store in macOS Keychain (more secure)
xcrun notarytool store-credentials "GodMode" \
  --apple-id "your@email.com" \
  --team-id "XXXXXXXXXX" \
  --password "xxxx-xxxx-xxxx-xxxx"
```

---

## Step 4: Configure electron-builder for Signing

Update `god-mode/package.json` build config:

```json
{
  "build": {
    "mac": {
      "icon": "resources/icon.icns",
      "target": [
        {
          "target": "dmg",
          "arch": ["universal"]
        }
      ],
      "category": "public.app-category.productivity",
      "identity": "Developer ID Application: Your Name (TEAM_ID)",
      "hardenedRuntime": true,
      "gatekeeperAssess": false,
      "entitlements": "resources/entitlements.mac.plist",
      "entitlementsInherit": "resources/entitlements.mac.plist"
    },
    "afterSign": "scripts/notarize.js"
  }
}
```

### Create Entitlements File

Create `god-mode/resources/entitlements.mac.plist`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>com.apple.security.cs.allow-jit</key>
    <true/>
    <key>com.apple.security.cs.allow-unsigned-executable-memory</key>
    <true/>
    <key>com.apple.security.cs.allow-dyld-environment-variables</key>
    <true/>
</dict>
</plist>
```

### Create Notarization Script

Create `god-mode/scripts/notarize.js`:

```javascript
const { notarize } = require('@electron/notarize');

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;
  if (electronPlatformName !== 'darwin') return;

  const appName = context.packager.appInfo.productFilename;

  return await notarize({
    appBundleId: 'com.clickcampaigns.godmode',
    appPath: `${appOutDir}/${appName}.app`,
    appleId: process.env.APPLE_ID,
    appleIdPassword: process.env.APPLE_APP_SPECIFIC_PASSWORD,
    teamId: process.env.APPLE_TEAM_ID,
  });
};
```

Install the notarize package:

```bash
npm install --save-dev @electron/notarize
```

---

## Step 5: Build & Sign

```bash
# Set environment variables
export APPLE_ID="your@email.com"
export APPLE_APP_SPECIFIC_PASSWORD="xxxx-xxxx-xxxx-xxxx"
export APPLE_TEAM_ID="XXXXXXXXXX"

# Build (will sign and notarize automatically)
cd god-mode
npm run dist:mac
```

The build process will:
1. Compile the app
2. Sign it with your Developer ID certificate
3. Submit to Apple for notarization (takes 1-5 minutes)
4. Staple the notarization ticket to the DMG

---

## Cost Summary

| Item | Cost | Frequency |
|------|------|-----------|
| Apple Developer Program | $99 | Annual |
| D-U-N-S Number (if org) | Free | One-time |
| Code signing certificate | Included | With membership |
| Notarization | Included | With membership |

---

## Timeline

1. **Enroll** — 5 minutes to submit, 24-48 hours for approval
2. **Create certificate** — 15 minutes
3. **Configure notarization** — 30 minutes
4. **First signed build** — 10 minutes (+ 1-5 min notarization)

Total active time: ~1 hour after enrollment is approved.
