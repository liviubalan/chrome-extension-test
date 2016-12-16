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

// In order to trigger this event wait for a while
chrome.idle.onStateChanged.addListener(function (newState) {
    console.warn("chrome.idle.onStateChanged.addListener");
    console.log(newState);
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
        case "chrome.idle.queryState":
            console.warn("chrome.idle.queryState");
            chrome.idle.queryState(30, function (state) {
                console.log(state);
            });
            break;
        case "chrome.extension.getBackgroundPage":
            console.warn("chrome.extension.getBackgroundPage");
            var w = chrome.extension.getBackgroundPage();
            console.log(w);
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
        case "chrome.tabs.detectLanguage":
            console.warn("chrome.tabs.detectLanguage");
            chrome.tabs.detectLanguage(function (language) {
                console.log(language);
            });
            break;
        case "chrome.storage.sync.set":
            var date = new Date().toLocaleString();
            var data = {
                "date": date
            };
            chrome.storage.sync.set(data, function () {
                console.warn("chrome.storage.sync.set");
            });
            break;
        case "chrome.storage.sync.get":
            console.warn("chrome.storage.sync.get");
            chrome.storage.sync.get("date", function (items) {
                console.log(items);
            });
            break;
        case "chrome.tabs.captureVisibleTab":
            console.warn("chrome.tabs.captureVisibleTab");
            chrome.tabs.captureVisibleTab(function (screenshotUrl) {
                var viewTabUrl = chrome.extension.getURL("html/image.html?id=2")
                chrome.tabs.create({
                    url: viewTabUrl
                });

                chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
                    if (changeInfo.status == 'complete' && tab.url == viewTabUrl) {
                        var views = chrome.extension.getViews();
                        for (var i = 0; i < views.length; i++) {
                            var view = views[i];
                            if (view.location.href == viewTabUrl) {
                                view.setScreenshotUrl(screenshotUrl);
                                break;
                            }
                        }
                    }
                });
            });
            break;
        case "chrome.windows.getCurrent":
            console.warn("chrome.windows.getCurrent");
            chrome.windows.getCurrent({}, function (windowCurrent) {
                chrome.windows.getAll({}, function (windows) {
                    var windowsLength = windows.length;
                    for (var i = 0; i < windowsLength; i++) {
                        if (windows[i].id != windowCurrent.id) {
                            chrome.tabs.query({
                                "windowId": windows[i].id
                            }, function (tabs) {
                                var tabsLength = tabs.length;
                                for (var j = 0; j < tabsLength; j++) {
                                    chrome.tabs.move(tabs[j].id, {
                                        "windowId": windowCurrent.id,
                                        "index": -1
                                    });
                                }
                            });
                        }
                    }
                });
            });
            break;
        case "chrome.tts.getVoices":
            console.warn("chrome.tts.getVoices");
            chrome.tts.getVoices(function (voices) {
                console.log(voices);
                var voice_i = getRandomInteger(0, voices.length);
                var voice = voices[voice_i];
                chrome.tts.speak('Hello world!', {
                    voiceName: voice.voiceName,
                    lang: voice.lang,
                    gender: voice.gender
                });
            });
            break;
    }
});

chrome.runtime.onStartup.addListener(function () {
    onsole.warn("chrome.runtime.onStartup.addListener");
});

chrome.runtime.onSuspend.addListener(function () {
    console.warn("chrome.runtime.onSuspend.addListener");
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
    console.warn("chrome.tabs.onActivated.addListener");
    console.log(activeInfo);
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

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (1 + max - min)) + min;
}
