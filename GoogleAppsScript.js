var discordWebHookUrl = "YOUR DISCORD WEBHOOK URL"
var timezone = "YOUR TIMEZONE"  // e.g. Asia/Tokyo
// Please set the Gmail label for the DM notification email from Twitter
var searchQuery = "label:twitterDMnotify is:unread"

function fetchMails() {  
  var threads = GmailApp.search(searchQuery, 0, 10);
  var messages = GmailApp.getMessagesForThreads(threads);

  for(var i in messages){
    for(var j in messages[i]){
      var msgDate = Utilities.formatDate(messages[i][j].getDate(), timezone, "yyyy-MM-dd HH:mm");
      var msgSubject = messages[i][j].getSubject();
      var msgBody = messages[i][j].getBody();
      var msgMessage = msgBody.match(/1px;font-size:1px;color:#ffffff;"> [\s\S]*?<d>/g)[0].replace('1px;font-size:1px;color:#ffffff;">','').replace('<d>','');

      postDiscord(msgDate, msgSubject, msgMessage);
      messages[i][j].markRead();
    }
  }
}

function postDiscord(date, subject, message) {
  var payload = {
    "username": "Twitter DM",
    "embeds": [
      {
        "title": subject,
        "color": 4169e1,
        "description": date,
        "fields": [
          {
            "name": "Message",
            "value": message,
            "inline": false
          }
        ]
      }
    ]
  }
  UrlFetchApp.fetch(discordWebHookUrl, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
  });
}
