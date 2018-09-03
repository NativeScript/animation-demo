import { EventData } from "data/observable";
import { Page } from "ui/page";
import { View } from "ui/core/view";

let view: View;

export function pageLoaded(args: EventData) {
    const page = <Page>args.object;
    view = page.getViewById<View>("view");
}

export function onAnimate() {
    view.animate({
        translate: { x: 100, y: 100},
        duration: 3000
    });
}

export function onReset() {
    view.translateX = 0;
    view.translateY = 0;
}
