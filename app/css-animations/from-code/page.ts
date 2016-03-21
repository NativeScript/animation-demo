import observable = require("data/observable");
import pages = require("ui/page");
import viewModule = require("ui/core/view");
import keyframeAnimation = require("ui/animation/keyframe-animation");

let view: viewModule.View;
let animationInfo: keyframeAnimation.KeyframeAnimationInfo;

export function pageLoaded(args: observable.EventData) {
    let page = <pages.Page>args.object;
    view = page.getViewById<viewModule.View>("view");
    animationInfo = page.getKeyframeAnimationWithName("bounce");
    animationInfo.duration = 2000;
}

export function onAnimate(args: observable.EventData) {
    let animation = keyframeAnimation.KeyframeAnimation.keyframeAnimationFromInfo(animationInfo);
    animation.play(view).then(() => {
        console.log("Played with code!");
    });
}
