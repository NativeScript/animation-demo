import observable = require("data/observable");
import frame = require("ui/frame");
import button = require("ui/button");

export function onButtonTap(args: observable.EventData) {
    var clickedButton = <button.Button>args.object;
    var destination = "./" + clickedButton.text + "/page";
    frame.topmost().navigate(destination);
}
