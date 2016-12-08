document.body.innerHTML = "";

function addButton(name, cb) {
    var a = document.createElement("button");
    a.innerText = name;
    a.onclick = cb;
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(a);
}

addButton("Create alarm", function () {
    chrome.runtime.sendMessage({action: "chrome.alarms.create"});
});

addButton("Create alarm alarm_1", function () {
    chrome.runtime.sendMessage({action: "chrome.alarms.create.alarm_1"});
});

addButton("Get alarm alarm_1", function () {
    chrome.runtime.sendMessage({action: "chrome.alarms.get.alarm_1"});
});

addButton("Clear alarm alarm_1", function () {
    chrome.runtime.sendMessage({action: "chrome.alarms.clear.alarm_1"});
});

addButton("Clear all alarms", function () {
    chrome.runtime.sendMessage({action: "chrome.alarms.clear.alarms"});
});

addButton("Get all alarms", function () {
    chrome.runtime.sendMessage({action: "chrome.alarms.get.alarms"});
});

addButton("Activate Google tab", function () {
    chrome.runtime.sendMessage({action: "chrome.tabs.update.google"});
});

addButton("Detect language", function () {
    chrome.runtime.sendMessage({action: "chrome.tabs.detectLanguage"});
});

addButton("Get idle state2", function () {
    chrome.runtime.sendMessage({action: "chrome.idle.queryState"});
});

addButton("Get background page", function () {
    chrome.runtime.sendMessage({action: "chrome.extension.getBackgroundPage"});
});

addButton("Set storage", function () {
    chrome.runtime.sendMessage({action: "chrome.storage.sync.set"});
});

addButton("Get storage", function () {
    chrome.runtime.sendMessage({action: "chrome.storage.sync.get"});
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log("chrome.runtime.onMessage.addListener");
    console.log(message);
    console.log(sender);
    console.log(sendResponse);
});
