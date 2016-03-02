import observable = require("data/observable");
import pages = require("ui/page");
import viewModule = require("ui/core/view");
import animationModule = require("ui/animation");
import cssjsonModule = require("~/css-animations/settings/cssjson");

let page: pages.Page;
let view: viewModule.View;
let fillBar: viewModule.SegmentedBar;
let directionBar: viewModule.SegmentedBar;
let model = new observable.Observable();

function roundSliderValue(sliderId: string) {
    let slider = page.getViewById<viewModule.Slider>(sliderId);
    slider.on("propertyChange", function (data: observable.EventData) { model.set(sliderId, Math.round(slider.value)); });
}

export function pageLoaded(args: observable.EventData) {
    model.set("duration", 1);
    model.set("delay", 0);
    model.set("iterations", 1);

    page = <pages.Page>args.object;
    page.bindingContext = model;

    fillBar = page.getViewById<viewModule.SegmentedBar>("direction");
    directionBar = page.getViewById<viewModule.SegmentedBar>("fill");
    view = page.getViewById<viewModule.View>("view");

    directionBar.selectedIndex = 1;
    fillBar.selectedIndex = 0;

    roundSliderValue("duration");
    roundSliderValue("delay");
    roundSliderValue("iterations");
}

export function onAnimate(args: observable.EventData) {

    page.removeCssSelectors("button");

    let json = { children: { ".button": { attributes: {
        "animation-name": "transformed",
        "animation-duration": model.get("duration"),
        "animation-delay": model.get("delay"),
        "animation-iteration-count": model.get("iterations"),
        "animation-direction": fillBar.selectedIndex === 1 ? "reverse" : "normal",
        "animation-fill-mode": directionBar.selectedIndex === 1 ? "forwards" : "none"
    } } } };
    let css = cssjsonModule.CSSJSON.toCSS(json);

    page.addCss(css);

    view.className = "";
    view.className = "button";
}
