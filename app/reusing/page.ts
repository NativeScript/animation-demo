import observable = require("data/observable");
import pages = require("ui/page");
import viewModule = require("ui/core/view");
import animationModule = require("ui/animation");

var view: viewModule.View;

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    view = page.getViewById<viewModule.View>("view");
}

export function onAnimate(args: observable.EventData) {
    var animation1 = view.createAnimation({opacity: 0});
    var animation2 = view.createAnimation({opacity: 1});

    animation1.play()
    .then(()=>animation2.play())
    .then(()=>animation1.play())
    .then(()=>animation2.play())
    .then(()=>animation1.play())
    .then(()=>animation2.play())
    .then(() => {
        console.log("Animation finished");
    })
    .catch((e) => {
        console.log(e.message);
    });
}

export function onReset(args: observable.EventData) {
    view.opacity = 1;
}
