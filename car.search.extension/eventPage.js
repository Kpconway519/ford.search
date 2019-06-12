let contextMenuItem = {
    "id": "proSearch",
    "title": "Vehicle proSearch",
    "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem)

chrome.contextMenus.onClicked.addListener(function(clickData) {
    if (clickData.menuItemId == "proSearch" && clickData.selectionText){
        window.open(`https://www.billrussellford.com/all-inventory/index.htm?search=${clickData.selectionText}`, "_blank")   
    }
})