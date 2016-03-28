"use strict";
var view;
function pageLoaded(args) {
    var page = args.object;
    view = page.getViewById("view");
}
exports.pageLoaded = pageLoaded;
function onAnimate(args) {
    view.animate({
        scale: { x: 2, y: 2 },
        duration: 3000
    });
}
exports.onAnimate = onAnimate;
function onReset(args) {
    view.scaleX = 1;
    view.scaleY = 1;
}
exports.onReset = onReset;
//# sourceMappingURL=page.js.map