import observable = require("data/observable");
import pages = require("ui/page");
import viewModule = require("ui/core/view");
import animationModule = require("ui/animation");

var view: viewModule.View;

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
  //  page.addCssFile("~/css-animations/animate-css/animate.css");
    view = page.getViewById<viewModule.View>("view");
}

export function onTap(args: observable.EventData) {
    view.className = "";
    view.className = "rubberBand";
}