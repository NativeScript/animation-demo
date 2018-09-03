import { EventData } from "data/observable";
import { Page } from "ui/page";
import { Button } from "ui/button";
import { topmost } from "ui/frame";

export function pageLoaded(args: EventData) {
    const page = <Page>args.object;
    page.actionBarHidden = false;
}

export function onButtonTap(args: EventData) {
    const clickedButton = <Button>args.object;
    const destination = "./css-animations/" + clickedButton.text + "/page";
    topmost().navigate(destination);
}
