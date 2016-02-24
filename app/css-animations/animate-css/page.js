"use strict";
var view;
function pageLoaded(args) {
    var page = args.object;
    view = page.getViewById("view");
}
exports.pageLoaded = pageLoaded;
function onTap(args) {
    view.className = "rubberBand";
}
exports.onTap = onTap;
//# sourceMappingURL=page.js.map