import { EventData } from "data/observable";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import { Color } from "color";

let view: View;

export function pageLoaded(args: EventData) {
    const page = <Page>args.object;
    view = page.getViewById<View>("view");
}

export function onAnimate() {
    view.animate({
        backgroundColor: new Color("#3D5AFE"),
        opacity: 0.5,
        translate: {x: 100, y: 100},
        rotate: 180,
        duration: 3000
    });
}

export function onReset() {
    view.backgroundColor = new Color("White");
    view.opacity = 1;
    view.translateX = 0;
    view.translateY = 0;
    view.rotate = 0;
}
