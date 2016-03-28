"use strict";
var animationModule = require("ui/animation");
var view;
function pageLoaded(args) {
    var page = args.object;
    view = page.getViewById("view");
}
exports.pageLoaded = pageLoaded;
var animationSet;
function onAnimate(args) {
    animationSet = new animationModule.Animation([{
            target: view,
            rotate: 360,
            duration: 3000,
            iterations: Number.POSITIVE_INFINITY,
            curve: view.ios ? CAMediaTimingFunction.functionWithName(kCAMediaTimingFunctionLinear) : new android.view.animation.LinearInterpolator
        }]);
    animationSet.play().catch(function (e) {
        console.log("Animation stoppped!");
    });
    // Call animationSet.cancel() to stop it;
}
exports.onAnimate = onAnimate;
function onReset(args) {
    animationSet.cancel();
    view.rotate = 0;
}
exports.onReset = onReset;
//# sourceMappingURL=page.js.map