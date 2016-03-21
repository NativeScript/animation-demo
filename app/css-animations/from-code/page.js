"use strict";
var keyframeAnimation = require("ui/animation/keyframe-animation");
var view;
var animationInfo;
function pageLoaded(args) {
    var page = args.object;
    view = page.getViewById("view");
    animationInfo = page.getKeyframeAnimationWithName("bounce");
    animationInfo.duration = 2000;
}
exports.pageLoaded = pageLoaded;
function onAnimate(args) {
    var animation = keyframeAnimation.KeyframeAnimation.keyframeAnimationFromInfo(animationInfo);
    animation.play(view).then(function () {
        console.log("Played with code!");
    });
}
exports.onAnimate = onAnimate;
//# sourceMappingURL=page.js.map