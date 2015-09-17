var frame = require("ui/frame");
function onButtonTap(args) {
    var clickedButton = args.object;
    var destination = "./" + clickedButton.text + "/page";
    frame.topmost().navigate(destination);
}
exports.onButtonTap = onButtonTap;
