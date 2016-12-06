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
            console.warn("chrome.alarms.create");
            chrome.alarms.create("", {
                delayInMinutes: 0.1
            });
            break;
        case "chrome.alarms.create.alarm_1":
            console.warn("chrome.alarms.create.alarm_1");
            chrome.alarms.create("alarm_1", {
                delayInMinutes: 0.5
            });
            break;
        case "chrome.alarms.get.alarm_1":
            console.warn("chrome.alarms.get.alarm_1");
            chrome.alarms.get('alarm_1', function (alarm) {
                console.log(alarm);
            });
            break;
        case "chrome.alarms.clear.alarm_1":
            console.warn("chrome.alarms.clear.alarm_1");
            chrome.alarms.clear('alarm_1', function (wasCleared) {
                console.log(wasCleared);
            });
            break;
        case "chrome.alarms.clear.alarms":
            console.warn("chrome.alarms.clear.alarms");
            chrome.alarms.clearAll(function (wasCleared) {
                console.log(wasCleared);
            });
            break;
        case "chrome.alarms.get.alarms":
            console.warn("chrome.alarms.get.alarms");
            chrome.alarms.getAll(function (alarms) {
                console.log(alarms);
            });
            break;
        case "chrome.tabs.update.google":
            console.warn("chrome.tabs.update.google");
            chrome.tabs.query({
                currentWindow: true
            }, function (tabs) {
                for (i = 0; i < tabs.length; i++) {
                    if (tabs[i].url.indexOf("google") !== false) {
                        console.log(tabs[i]);
                        chrome.tabs.update(tabs[i].id, {selected: true});
                        return;
                    }
                }
            });
            break;
    }
});

// I cannot trigger this event
chrome.runtime.onStartup.addListener(function () {
    alert("chrome.runtime.onStartup.addListener");
});

chrome.runtime.onSuspend.addListener(function () {
    console.warn("chrome.runtime.onSuspend.addListener");
});

// Triggered when tab content changes (new tab, url)
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.warn("chrome.tabs.onUpdated.addListener");
    console.log(tabId);
    console.log(changeInfo);
    console.log(tab);
});

var filters = {
    url: [{urlContains: "emag.ro"}]
};

/**
 * This event is trigger on http://www.emag.ro/
 * On https://developer.chrome.com/extensions/webNavigation#event-onDOMContentLoaded the 2nd param (filters)
 * is not specified
 */
chrome.webNavigation.onDOMContentLoaded.addListener(function (details) {
    console.warn("chrome.webNavigation.onDOMContentLoaded.addListener");
    console.log(details);
    // Triggered when #anchor value change
    chrome.webNavigation.onReferenceFragmentUpdated.addListener(function (details) {
        console.warn("chrome.webNavigation.onReferenceFragmentUpdated.addListener");
        console.log(details);
    }, filters);
}, filters);
