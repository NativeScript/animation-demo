import observable = require("data/observable");
import pages = require("ui/page");
import viewModule = require("ui/core/view");
import animationModule = require("ui/animation");

var view: viewModule.View;

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    view = page.getViewById<viewModule.View>("view");
}

export function onTap(args: observable.EventData) {
    view.className = "button";
    view.className = "button_pressed";
}