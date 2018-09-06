import { EventData } from "data/observable";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import { WrapLayout } from "ui/layouts/wrap-layout";
import { Image } from "ui/image";

let wrapLayout: WrapLayout;

export function pageLoaded(args: EventData) {
    const page = <Page>args.object;
    wrapLayout = page.getViewById<WrapLayout>("wrapLayout");
}

export function onAddItem() {
    const item = new Image();
    item.src = "~/res/icon_100x100.png";
    item.width = 90;
    item.height = 90;
    item.style.margin = "5,5,5,5";
    item.translateX = -300;
    item.opacity = 0;
    item.on("loaded", (args: EventData) => {
        (<View>args.object).animate({ translate: { x: 0, y: 0 }, opacity: 1 });
    });
    wrapLayout.addChild(item);
}

export function onClear() {
    let i = wrapLayout.getChildrenCount() - 1;
    while (i >= 0) {
        wrapLayout.removeChild(wrapLayout.getChildAt(i--));
    }
}
