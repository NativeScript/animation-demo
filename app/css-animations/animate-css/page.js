"use strict";
var view;
function pageLoaded(args) {
    var page = args.object;
    //  page.addCssFile("~/css-animations/animate-css/animate.css");
    view = page.getViewById("view");
}
exports.pageLoaded = pageLoaded;
function onTap(args) {
    view.className = "";
    view.className = "rubberBand";
}
exports.onTap = onTap;
//# sourceMappingURL=page.js.map