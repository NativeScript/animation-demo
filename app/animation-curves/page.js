"use strict";
var enums = require("ui/enums");
var view;
function pageLoaded(args) {
    var page = args.object;
    view = page.getViewById("view");
}
exports.pageLoaded = pageLoaded;
function onAnimateLinear(args) {
    view.animate({
        translate: { x: 0, y: 100 },
        duration: 1000,
        curve: enums.AnimationCurve.linear
    });
}
exports.onAnimateLinear = onAnimateLinear;
function onAnimateEaseIn(args) {
    view.animate({
        translate: { x: 0, y: 100 },
        duration: 1000,
        curve: enums.AnimationCurve.easeIn
    });
}
exports.onAnimateEaseIn = onAnimateEaseIn;
function onAnimateEaseOut(args) {
    view.animate({
        translate: { x: 0, y: 100 },
        duration: 1000,
        curve: enums.AnimationCurve.easeOut
    });
}
exports.onAnimateEaseOut = onAnimateEaseOut;
function onAnimateEaseInEaseOut(args) {
    view.animate({
        translate: { x: 0, y: 100 },
        duration: 1000,
        curve: enums.AnimationCurve.easeInOut
    });
}
exports.onAnimateEaseInEaseOut = onAnimateEaseInEaseOut;
function onAnimateSpring(args) {
    view.animate({
        translate: { x: 0, y: 100 },
        duration: 1000,
        curve: enums.AnimationCurve.spring
    });
}
exports.onAnimateSpring = onAnimateSpring;
function onAnimateCustom(args) {
    view.animate({
        translate: { x: 0, y: 100 },
        duration: 1000,
        curve: enums.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
    });
}
exports.onAnimateCustom = onAnimateCustom;
function onReset(args) {
    view.translateX = 0;
    view.translateY = 0;
}
exports.onReset = onReset;
//# sourceMappingURL=page.js.map