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

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log("chrome.runtime.onMessage.addListener");
    console.log(message);
    console.log(sender);
    console.log(sendResponse);
});
