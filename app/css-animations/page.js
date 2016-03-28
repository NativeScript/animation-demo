"use strict";
var frame = require("ui/frame");
function pageLoaded(args) {
    var page = args.object;
    page.actionBarHidden = false;
}
exports.pageLoaded = pageLoaded;
function onButtonTap(args) {
    var clickedButton = args.object;
    var destination = "./css-animations/" + clickedButton.text + "/page";
    frame.topmost().navigate(destination);
}
exports.onButtonTap = onButtonTap;
//# sourceMappingURL=page.js.map