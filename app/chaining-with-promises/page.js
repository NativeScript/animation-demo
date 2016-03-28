"use strict";
var view;
function pageLoaded(args) {
    var page = args.object;
    view = page.getViewById("view");
}
exports.pageLoaded = pageLoaded;
function onAnimate(args) {
    view.animate({ opacity: 0 })
        .then(function () { return view.animate({ opacity: 1 }); })
        .then(function () { return view.animate({ translate: { x: 100, y: 100 } }); })
        .then(function () { return view.animate({ translate: { x: 0, y: 0 } }); })
        .then(function () { return view.animate({ scale: { x: 3, y: 3 } }); })
        .then(function () { return view.animate({ scale: { x: 1, y: 1 } }); })
        .then(function () { return view.animate({ rotate: 180 }); })
        .then(function () { return view.animate({ rotate: 0 }); })
        .then(function () {
        console.log("Animation finished");
    })
        .catch(function (e) {
        console.log(e.message);
    });
}
exports.onAnimate = onAnimate;
function onReset(args) {
    view.translateX = 0;
    view.translateY = 0;
    view.scaleX = 1;
    view.scaleY = 1;
    view.rotate = 0;
}
exports.onReset = onReset;
//# sourceMappingURL=page.js.map