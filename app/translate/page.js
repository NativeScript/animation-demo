"use strict";
var view;
function pageLoaded(args) {
    var page = args.object;
    view = page.getViewById("view");
}
exports.pageLoaded = pageLoaded;
function onAnimate(args) {
    view.animate({
        translate: { x: 100, y: 100 },
        duration: 3000
    });
}
exports.onAnimate = onAnimate;
function onReset(args) {
    view.translateX = 0;
    view.translateY = 0;
}
exports.onReset = onReset;
//# sourceMappingURL=page.js.map