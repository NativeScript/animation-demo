import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { View } from "tns-core-modules/ui/core/view";
import { KeyframeAnimation, KeyframeAnimationInfo } from "tns-core-modules/ui/animation/keyframe-animation";
import { ValueSource } from "tns-core-modules/ui/core/dependency-observable";

let view: View;
let animationInfo: KeyframeAnimationInfo;

export function pageLoaded(args: EventData) {
    let page = <Page>args.object;
    view = page.getViewById<View>("view");
    animationInfo = page.getKeyframeAnimationWithName("bounce");
    animationInfo.duration = 2000;
}

export function onAnimate(args: EventData) {
    let animation = KeyframeAnimation.keyframeAnimationFromInfo(animationInfo);
    animation.play(view).then(() => {
        console.log("Played with code!");
    });
}
