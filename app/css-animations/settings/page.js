"use strict";
var observable = require("data/observable");
var cssjsonModule = require("~/css-animations/settings/cssjson");
var page;
var view;
var fillBar;
var directionBar;
var model = new observable.Observable();
function roundSliderValue(sliderId) {
    var slider = page.getViewById(sliderId);
    slider.on("propertyChange", function (data) { model.set(sliderId, Math.round(slider.value)); });
}
function pageLoaded(args) {
    model.set("duration", 1);
    model.set("delay", 0);
    model.set("iterations", 1);
    page = args.object;
    page.bindingContext = model;
    fillBar = page.getViewById("direction");
    directionBar = page.getViewById("fill");
    view = page.getViewById("view");
    directionBar.selectedIndex = 1;
    fillBar.selectedIndex = 0;
    roundSliderValue("duration");
    roundSliderValue("delay");
    roundSliderValue("iterations");
}
exports.pageLoaded = pageLoaded;
function onAnimate(args) {
    var json = { children: { ".button": { attributes: {
                    "animation-name": "transformed",
                    "animation-duration": model.get("duration"),
                    "animation-delay": model.get("delay"),
                    "animation-iteration-count": model.get("iterations"),
                    "animation-direction": fillBar.selectedIndex === 1 ? "reverse" : "normal",
                    "animation-fill-mode": directionBar.selectedIndex === 1 ? "forwards" : "none"
                } } } };
    var css = cssjsonModule.CSSJSON.toCSS(json);
    page.css = css;
    view.className = "";
    view.className = "button";
}
exports.onAnimate = onAnimate;
//# sourceMappingURL=page.js.map