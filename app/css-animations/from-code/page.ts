import { EventData } from "data/observable";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import { KeyframeAnimation, KeyframeAnimationInfo } from "ui/animation/keyframe-animation";

let view: View;
let animationInfo: KeyframeAnimationInfo;

export function pageLoaded(args: EventData) {
    const page = <Page>args.object;
    view = page.getViewById<View>("view");
    animationInfo = page.getKeyframeAnimationWithName("bounce");
    animationInfo.duration = 2000;
}

export function onAnimate() {
    const animation = KeyframeAnimation.keyframeAnimationFromInfo(animationInfo);
    animation.play(view).then(() => {
        console.log("Played with code!");
    });
}
