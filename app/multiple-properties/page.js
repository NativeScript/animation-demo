"use strict";
var color = require("color");
var view;
function pageLoaded(args) {
    var page = args.object;
    view = page.getViewById("view");
}
exports.pageLoaded = pageLoaded;
function onAnimate(args) {
    view.animate({
        backgroundColor: new color.Color("#3D5AFE"),
        opacity: 0.5,
        translate: { x: 100, y: 100 },
        rotate: 180,
        duration: 3000
    });
}
exports.onAnimate = onAnimate;
function onReset(args) {
    view.backgroundColor = new color.Color("White");
    view.opacity = 1;
    view.translateX = 0;
    view.translateY = 0;
    view.rotate = 0;
}
exports.onReset = onReset;
//# sourceMappingURL=page.js.map