console.warn("i18n (translation)");
console.log(chrome.i18n.getMessage("manifest_name"));
console.log(chrome.i18n.getMessage("popup_bye", ["John", "wikipedia.org"]));
console.log(chrome.i18n.getUILanguage());

$(document).ready(function () {
    // Request optional permissions on mouse click
    $("#emg-tabs").click(function () {
        chrome.permissions.request({
            permissions: ["tabs"],
            origins: ["http://www.google.com/"]
        }, function (granted) {
            // The callback argument will be true if the user granted the permissions.
            if (granted) {
                alert("granted");
            } else {
                alert("not granted");
            }
        });
    });
});
