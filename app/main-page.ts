import { EventData } from "data/observable";
import { topmost } from "ui/frame";
import { Page } from "ui/page";
import { Button } from "ui/button";

export function pageLoaded(args: EventData) {
    const page = <Page>args.object;
    page.actionBarHidden = false;
}

export function onButtonTap(args: EventData) {
    const clickedButton = <Button>args.object;
    const destination = "./" + clickedButton.text + "/page";
    topmost().navigate(destination);
}
