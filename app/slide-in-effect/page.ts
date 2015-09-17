import observable = require("data/observable");
import pages = require("ui/page");
import viewModule = require("ui/core/view");
import animationModule = require("ui/animation");
import color = require("color");
import layoutModule = require("ui/layouts/layout");
import imageModule = require("ui/image");

var wrapLayout: layoutModule.Layout;

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    wrapLayout = page.getViewById<layoutModule.Layout>("wrapLayout");
}

export function onAddItem(args: observable.EventData) {
    var item = new imageModule.Image();
    item.src = "~/res/icon_100x100.png";
    item.width = 90;
    item.height = 90;
    item.style.margin = "5,5,5,5";
    item.translateX = -300;
    item.opacity = 0;
    item.on("loaded", (args: observable.EventData) => {
        (<viewModule.View>args.object).animate({translate: { x: 0, y: 0 }, opacity: 1});
    });
    wrapLayout.addChild(item);
}

export function onClear(args: observable.EventData) {
    var i = wrapLayout.getChildrenCount() - 1;
    while(i >= 0){
        wrapLayout.removeChild(wrapLayout.getChildAt(i--));
    }
}
