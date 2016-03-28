"use strict";
var view;
function pageLoaded(args) {
    var page = args.object;
    view = page.getViewById("view");
}
exports.pageLoaded = pageLoaded;
function onAnimate(args) {
    view.animate({
        rotate: 360,
        duration: 3000
    });
}
exports.onAnimate = onAnimate;
function onReset(args) {
    view.rotate = 0;
}
exports.onReset = onReset;
//# sourceMappingURL=page.js.map