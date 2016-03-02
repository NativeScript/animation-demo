import observable = require("data/observable");
import pages = require("ui/page");
import viewModule = require("ui/core/view");
import animationModule = require("ui/animation");
import colorModule = require("color");

let view: viewModule.View;

export function pageLoaded(args: observable.EventData) {
    let page = <pages.Page>args.object;
    view = page.getViewById<viewModule.View>("view");
}

export function onTap(args: observable.EventData) {
    if (view.className === "button") {
        view.className = "button_selected";
    }
    else {
        view.className = "button";
    }
}