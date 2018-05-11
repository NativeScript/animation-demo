import * as observable from "data/observable";
import * as pages from "ui/page";
import * as viewModule from "ui/core/view";
import * as animationModule from "ui/animation";

var view: viewModule.View;

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    view = page.getViewById<viewModule.View>("view");
}

export function onAnimate(args: observable.EventData) {
    view.animate({
        rotate: 360,
        duration: 3000
    });
}

export function onReset(args: observable.EventData) {
    view.rotate = 0;
}
