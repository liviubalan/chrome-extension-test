console.warn("i18n (translation)");
console.log(chrome.i18n.getMessage("manifest_name"));
console.log(chrome.i18n.getMessage("popup_bye", ["John", "wikipedia.org"]));
console.log(chrome.i18n.getUILanguage());
