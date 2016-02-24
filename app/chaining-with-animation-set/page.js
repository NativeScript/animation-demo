"use strict";
var animationModule = require("ui/animation");
var view1;
var view2;
var view3;
var view4;
function pageLoaded(args) {
    var page = args.object;
    view1 = page.getViewById("view1");
    view2 = page.getViewById("view2");
    view3 = page.getViewById("view3");
    view4 = page.getViewById("view4");
}
exports.pageLoaded = pageLoaded;
function onAnimate(args) {
    var definitions = new Array();
    definitions.push({ target: view1, translate: { x: 200, y: 0 }, duration: 3000 });
    definitions.push({ target: view2, translate: { x: 0, y: 200 }, duration: 3000 });
    definitions.push({ target: view3, translate: { x: -200, y: 0 }, duration: 3000 });
    definitions.push({ target: view4, translate: { x: 0, y: -200 }, duration: 3000 });
    var playSequentially = true;
    var animationSet = new animationModule.Animation(definitions, playSequentially);
    animationSet.play().then(function () {
        console.log("Animation finished");
    })
        .catch(function (e) {
        console.log(e.message);
    });
}
exports.onAnimate = onAnimate;
function onReset(args) {
    view1.translateX = 0;
    view1.translateY = 0;
    view2.translateX = 0;
    view2.translateY = 0;
    view3.translateX = 0;
    view3.translateY = 0;
    view4.translateX = 0;
    view4.translateY = 0;
}
exports.onReset = onReset;
//# sourceMappingURL=page.js.map