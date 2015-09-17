import observable = require("data/observable");
import pages = require("ui/page");
import viewModule = require("ui/core/view");
import animationModule = require("ui/animation");

var view: viewModule.View;

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    view = page.getViewById<viewModule.View>("view");
}

export function onAnimate(args: observable.EventData) {
    view.animate({
        translate: { x: 100, y: 100},
        duration: 3000
    });
}

export function onReset(args: observable.EventData) {
    view.translateX = 0;
    view.translateY = 0;
}
