// var extURL = chrome.extension.getURL("tabs.html");
function onGot(tabInfo) {
  console.log(tabInfo);
  console.log(tabInfo.url);
  openPrivateWindow(tabInfo.url);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function getInfoForTab(tabs) {
  if (tabs.length > 0) {
    var gettingInfo = browser.tabs.get(tabs[0].id);
    gettingInfo.then(onGot, onError);
  }
}

function openPrivateWindow(tab) {
    if (tab.url) {
      chrome.windows.create({
        "url": tab.url,
        "incognito": true
      });
      return;
    }
}

chrome.browserAction.onClicked.addListener(openPrivateWindow);
