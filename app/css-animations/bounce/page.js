"use strict";
var view;
function pageLoaded(args) {
    var page = args.object;
    view = page.getViewById("view");
}
exports.pageLoaded = pageLoaded;
function onAnimate(args) {
    view.className = "";
    view.className = "bounce";
}
exports.onAnimate = onAnimate;
//# sourceMappingURL=page.js.map