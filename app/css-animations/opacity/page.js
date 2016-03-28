"use strict";
var view;
function pageLoaded(args) {
    var page = args.object;
    view = page.getViewById("view");
}
exports.pageLoaded = pageLoaded;
function onAnimate(args) {
    view.className = "transparent";
}
exports.onAnimate = onAnimate;
function onReset(args) {
    view.className = "opaque";
}
exports.onReset = onReset;
//# sourceMappingURL=page.js.map