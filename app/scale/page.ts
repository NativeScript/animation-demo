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
        scale: { x: 2, y: 2},
        duration: 3000
    });
}

export function onReset(args: observable.EventData) {
    view.scaleX = 1;
    view.scaleY = 1;
}
