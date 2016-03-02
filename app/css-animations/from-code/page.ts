import observable = require("data/observable");
import pages = require("ui/page");
import viewModule = require("ui/core/view");
import animationGroupModule = require("ui/animation/animationgroup");

let view: viewModule.View;
let animation: animationGroupModule.AnimationGroup;

export function pageLoaded(args: observable.EventData) {
    let page = <pages.Page>args.object;
    view = page.getViewById<viewModule.View>("view");
    animation = page.getKeyframesAnimation("bounce");
    animation.duration = 2000;
}

export function onAnimate(args: observable.EventData) {
    animation.play(view).then(() => {
        console.log("Played with code!");
    });
}
