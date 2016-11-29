/*alert("call devtools.js - 1");*/
chrome.devtools.panels.elements.createSidebarPane("Filters",
    function (sidebar) {
        /*alert("call devtools.js - 2");*/

        sidebar.setPage('../html/devtools-sidebar.html');
    });
