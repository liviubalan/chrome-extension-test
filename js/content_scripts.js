/**
 * Isolated worlds allow each content script to make changes to its JavaScript environment without worrying about
 * conflicting with the page or with other content scripts. For example, a content script could include JQuery v1
 * and the page could include JQuery v2, and they wouldn't conflict with each other.
 * This runs on the client side and has access to DOM.
 */
//alert("content_scripts loaded");
console.log($(".widget-breadcrumbs-holder").text());
console.log(chrome.extension.getURL("images/icons/icon-1.png"));

$(document).ready(function () {
    $(".add-to-cart-new").click(function () {
        alert("Handler for .click() called.");
    });
});
