# twitterdm2discord

Twitter DM Notification for discord Webhook

## Usage

### 1. Twitter DM Notification via Gmail

### 2. Set Gmail label for Twitter DM notification email

Script's default label: `twitterDMnotify`

But as you like

### 3. Edit GoogleAppsScript.js

```
var discordWebHookUrl = "YOUR DISCORD WEBHOOK URL"
var timezone = "YOUR TIMEZONE"  // e.g. Asia/Tokyo
```

Change searchQuery if necessary

```
var searchQuery = "label:twitterDMnotify is:unread"
```

### 4. Deploy Google Apps Script
