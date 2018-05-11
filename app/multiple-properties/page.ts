import * as observable from "data/observable";
import * as pages from "ui/page";
import * as viewModule from "ui/core/view";
import * as color from "color";

var view: viewModule.View;

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    view = page.getViewById<viewModule.View>("view");
}

export function onAnimate(args: observable.EventData) {
    view.animate({
        backgroundColor: new color.Color("#3D5AFE"),
        opacity: 0.5,
        translate: {x: 100, y: 100},
        rotate: 180,
        duration: 3000
    });
}

export function onReset(args: observable.EventData) {
    view.backgroundColor = new color.Color("White");
    view.opacity = 1;
    view.translateX = 0;
    view.translateY = 0;
    view.rotate = 0;
}
