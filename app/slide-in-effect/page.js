"use strict";
var imageModule = require("ui/image");
var wrapLayout;
function pageLoaded(args) {
    var page = args.object;
    wrapLayout = page.getViewById("wrapLayout");
}
exports.pageLoaded = pageLoaded;
function onAddItem(args) {
    var item = new imageModule.Image();
    item.src = "~/res/icon_100x100.png";
    item.width = 90;
    item.height = 90;
    item.style.margin = "5,5,5,5";
    item.translateX = -300;
    item.opacity = 0;
    item.on("loaded", function (args) {
        args.object.animate({ translate: { x: 0, y: 0 }, opacity: 1 });
    });
    wrapLayout.addChild(item);
}
exports.onAddItem = onAddItem;
function onClear(args) {
    var i = wrapLayout.getChildrenCount() - 1;
    while (i >= 0) {
        wrapLayout.removeChild(wrapLayout.getChildAt(i--));
    }
}
exports.onClear = onClear;
//# sourceMappingURL=page.js.map