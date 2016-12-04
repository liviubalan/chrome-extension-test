/**
 * Long-running script to manage some task or state.
 * This file is loaded when the extension is loaded (not on the web page load)
 */

chrome.alarms.onAlarm.addListener(function (alarm) {
    console.warn("chrome.alarms.onAlarm.addListener");
    console.log(alarm);
});

chrome.bookmarks.onCreated.addListener(function (id, bookmark) {
    console.warn("chrome.bookmarks.onRemoved.onCreated");
    console.log(id);
    console.log(bookmark);
});

chrome.bookmarks.onRemoved.addListener(function (id, removeInfo) {
    console.warn("chrome.bookmarks.onRemoved.addListener");
    console.log(id);
    console.log(removeInfo);
});

/**
 * Fired when a browser action icon is clicked.
 * This event will not fire if the browser action has a popup
 */
chrome.browserAction.onClicked.addListener(function () {
    /*chrome.tabs.create({
     url: "http://www.liviubalan.com/",
     active: true,
     pinned: false
     }, function (tab) {
     console.warn("chrome.tabs.create");
     console.log(tab);
     });*/

    /*chrome.tabs.query({
     active: false,
     title: "Google"
     }, function (result) {
     console.log(result);
     });*/

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        // console.log(tabs);
        chrome.tabs.executeScript(tabs[0].id,
            {file: "js/content_script-tabs.js"},
            function (result) {
                chrome.tabs.sendMessage(tabs[0].id, "Background page loaded");
            }
        );
    });
});

chrome.commands.getAll(function (commands) {
    console.warn("chrome.commands.getAll");
    console.log(commands);
});

chrome.commands.onCommand.addListener(function (command) {
    console.warn("chrome.commands.onCommand.addListener");
    console.log(command);
});

chrome.runtime.onInstalled.addListener(function (details) {
    console.warn("chrome.runtime.onInstalled.addListener");
    console.log(details);
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    /*console.log("chrome.runtime.onMessage.addListener");
    console.log(message);
    console.log(sender);
    console.log(sendResponse);*/
    switch (message.action) {
        case "chrome.alarms.create":
            chrome.alarms.create("", {
                delayInMinutes: 0.1
            });
            break;
    }
});

chrome.runtime.onSuspend.addListener(function () {
    alert("chrome.runtime.onSuspend.addListener");
});
