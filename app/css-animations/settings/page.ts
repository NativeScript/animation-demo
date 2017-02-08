import observable = require("data/observable");
import pages = require("ui/page");
import viewModule = require("ui/core/view");
import animationModule = require("ui/animation");
import segmentedBarModule = require("ui/segmented-bar");
import sliderModule = require("ui/slider");

let page: pages.Page;
let view: viewModule.View;
let fillBar: segmentedBarModule.SegmentedBar;
let directionBar: segmentedBarModule.SegmentedBar;
let model = new observable.Observable();

function roundSliderValue(sliderId: string) {
    let slider = page.getViewById<sliderModule.Slider>(sliderId);
    slider.on("propertyChange", function (data: observable.EventData) { model.set(sliderId, Math.round(slider.value)); });
}

 export function pageLoaded(args: observable.EventData) {
    model.set("duration", 1);
    model.set("delay", 0);
    model.set("iterations", 1);

    page = <pages.Page>args.object;
    page.bindingContext = model;

    fillBar = page.getViewById<segmentedBarModule.SegmentedBar>("direction");
    directionBar = page.getViewById<segmentedBarModule.SegmentedBar>("fill");
    view = page.getViewById<viewModule.View>("view");

    directionBar.selectedIndex = 1;
    fillBar.selectedIndex = 0;

    roundSliderValue("duration");
    roundSliderValue("delay");
    roundSliderValue("iterations");
 }

export function onAnimate(args: observable.EventData) {
    let css = `.button {
        animation-name: transformed;
        animation-duration: ${model.get("duration")};
        animation-delay: ${model.get("delay")};
        animation-iteration-count: ${model.get("iterations")};
        animation-direction: ${fillBar.selectedIndex === 1 ? "reverse" : "normal"};
        animation-fill-mode: ${directionBar.selectedIndex === 1 ? "forwards" : "none"};
    }`

    page.css = css;

    view.className = "";
    view.className = "button";
}
