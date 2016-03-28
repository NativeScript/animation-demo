"use strict";
var view;
function pageLoaded(args) {
    var page = args.object;
    view = page.getViewById("view");
}
exports.pageLoaded = pageLoaded;
function onAnimate(args) {
    view.animate({
        opacity: 0,
        duration: 3000
    });
}
exports.onAnimate = onAnimate;
function onReset(args) {
    view.opacity = 1.0;
}
exports.onReset = onReset;
//# sourceMappingURL=page.js.map