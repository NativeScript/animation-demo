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
        scale: { x: 2, y: 2},
        duration: 3000
    });
}

export function onReset() {
    view.scaleX = 1;
    view.scaleY = 1;
}
