chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  var targetUrl = "https://timetracker.aetherti.com/*";

  async function sendMessageToActiveTab(message, tabId) {
    console.log('sendMessageToActiveTab', message)
    const response = await chrome.tabs.sendMessage(tabId, message);
    // TODO: Do something with the response.
  }
  console.log("button clicked");

  // Function to find the tab ID based on URL
  function findTabIdByURL(url) {
    chrome.tabs.query({ url: url }, function (tabs) {
      if (tabs.length > 0) {
        var tabId = tabs[0].id;

        console.log("Tab ID found for URL", url + ":", tabId);
        // Now you can use this tabId to send data to this specific tab
        
        sendMessageToActiveTab(message, tabId);
      } else {
        console.log("No tab found for URL:", url);
      }
    });
  }

  // Call the function to find the tab ID
  findTabIdByURL(targetUrl);

  sendResponse("message sent to background.js");
});

console.log("I am from background js");
