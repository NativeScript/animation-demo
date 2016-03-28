import observable = require("data/observable");
import pages = require("ui/page");
import viewModule = require("ui/core/view");
import animationModule = require("ui/animation");

let view: viewModule.View;

export function pageLoaded(args: observable.EventData) {
    let page = <pages.Page>args.object;
    view = page.getViewById<viewModule.View>("view");
}

export function onAnimate(args: observable.EventData) {
    view.className = "transparent";
}

export function onReset(args: observable.EventData) {
    view.className = "opaque";
}
