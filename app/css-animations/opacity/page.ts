import * as observable from "data/observable";
import * as pages from "ui/page";
import * as viewModule from "ui/core/view";
import * as animationModule from "ui/animation";

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
