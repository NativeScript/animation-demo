import * as observable from "data/observable";
import * as frame from "ui/frame";
import * as button from "ui/button";

export function pageLoaded(args) {
    var page = args.object;
    page.actionBarHidden = false;
}

export function onButtonTap(args: observable.EventData) {
    var clickedButton = <button.Button>args.object;
    var destination = "./" + clickedButton.text + "/page";
    frame.topmost().navigate(destination);
}
