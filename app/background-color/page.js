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
        duration: 3000
    });
}
exports.onAnimate = onAnimate;
function onReset(args) {
    view.backgroundColor = new color.Color("White");
}
exports.onReset = onReset;
//# sourceMappingURL=page.js.map