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
        duration: 3000
    });
}

export function onReset() {
    view.backgroundColor = new Color("White");
}
