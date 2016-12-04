/**
 * Long-running script to manage some task or state.
 * This file is loaded when the extension is loaded (not on the web page load)
 */
chrome.browserAction.setTitle({title: "Google Chrome extension test by setTitle"});
chrome.browserAction.setIcon({path: "../images/icons/icon-1-16.png"});
// chrome.browserAction.setPopup({popup: "../html/popup-page_action.html"});
chrome.browserAction.setBadgeText({text: "ON"});
chrome.browserAction.setBadgeBackgroundColor({color: "#FF0000"});

/**
 * Fired when a browser action icon is clicked.
 * This event will not fire if the browser action has a popup
 */
chrome.browserAction.onClicked.addListener(function () {
    chrome.browserAction.getTitle({}, function (result) {
        console.warn("chrome.browserAction.getTitle");
        console.log(result);
    });

    chrome.browserAction.getBadgeText({}, function (result) {
        console.warn("chrome.browserAction.getBadgeText");
        console.log(result);
    });

    chrome.browserAction.getBadgeBackgroundColor({}, function (result) {
        console.warn("chrome.browserAction.getBadgeBackgroundColor");
        console.log(result);
    });
});

chrome.browserAction.getPopup({}, function (result) {
    console.warn("chrome.browserAction.getPopup");
    console.log(result);
});
