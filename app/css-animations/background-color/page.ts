import * as observable from "data/observable";
import * as pages from "ui/page";
import * as viewModule from "ui/core/view";
import * as animationModule from "ui/animation";
import * as colorModule from "color";

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