"use strict";
var view;
function pageLoaded(args) {
    var page = args.object;
    view = page.getViewById("view");
}
exports.pageLoaded = pageLoaded;
function onAnimate(args) {
    var animation1 = view.createAnimation({ opacity: 0 });
    var animation2 = view.createAnimation({ opacity: 1 });
    animation1.play()
        .then(function () { return animation2.play(); })
        .then(function () { return animation1.play(); })
        .then(function () { return animation2.play(); })
        .then(function () { return animation1.play(); })
        .then(function () { return animation2.play(); })
        .then(function () {
        console.log("Animation finished");
    })
        .catch(function (e) {
        console.log(e.message);
    });
}
exports.onAnimate = onAnimate;
function onReset(args) {
    view.opacity = 1;
}
exports.onReset = onReset;
//# sourceMappingURL=page.js.map