import observable = require("data/observable");
import frame = require("ui/frame");
import button = require("ui/button");

export function pageLoaded(args) {
    var page = args.object;
    page.actionBarHidden = false;
}

export function onButtonTap(args: observable.EventData) {
    var clickedButton = <button.Button>args.object;
    var destination = "./css-animations/" + clickedButton.text + "/page";
    frame.topmost().navigate(destination);
}
