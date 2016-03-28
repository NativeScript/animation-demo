"use strict";
var view;
function pageLoaded(args) {
    var page = args.object;
    view = page.getViewById("view");
}
exports.pageLoaded = pageLoaded;
function onTap(args) {
    if (view.className === "button") {
        view.className = "button_selected";
    }
    else {
        view.className = "button";
    }
}
exports.onTap = onTap;
//# sourceMappingURL=page.js.map