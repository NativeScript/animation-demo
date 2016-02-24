"use strict";
var view;
function pageLoaded(args) {
    var page = args.object;
    view = page.getViewById("view");
}
exports.pageLoaded = pageLoaded;
function onAnimate(args) {
    view.className = "transformed";
}
exports.onAnimate = onAnimate;
function onReset(args) {
    view.className = "original";
}
exports.onReset = onReset;
//# sourceMappingURL=page.js.map