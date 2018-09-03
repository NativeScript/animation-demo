import { EventData } from "data/observable";
import { Page } from "ui/page";
import { View } from "ui/core/view";

let view: View;

export function pageLoaded(args: EventData) {
    const page = <Page>args.object;
    view = page.getViewById<View>("view");
}

export function onTap() {
    if (view.className === "button") {
        view.className = "button_selected";
    }
    else {
        view.className = "button";
    }
}