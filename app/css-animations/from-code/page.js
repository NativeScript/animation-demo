"use strict";
var view;
var animation;
function pageLoaded(args) {
    var page = args.object;
    view = page.getViewById("view");
    animation = page.getKeyframesAnimation("bounce");
    animation.duration = 2000;
}
exports.pageLoaded = pageLoaded;
function onAnimate(args) {
    animation.play(view).then(function () {
        console.log("Played with code!");
    });
}
exports.onAnimate = onAnimate;
//# sourceMappingURL=page.js.map