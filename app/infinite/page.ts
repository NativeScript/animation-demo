import { EventData } from "data/observable";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import { Animation } from "ui/animation";

let view: View;

declare const CAMediaTimingFunction:any

export function pageLoaded(args: EventData) {
    const page = <Page>args.object;
    view = page.getViewById<View>("view");
}

let animationSet: Animation;
export function onAnimate() {
    animationSet = new Animation([{
        target: view,
        rotate: 360,
        duration: 3000,
        iterations: Number.POSITIVE_INFINITY,
        //curve: view.ios ? CAMediaTimingFunction.functionWithName("kCAMediaTimingFunctionLinear") : new android.view.animation.LinearInterpolator
    }]);
    animationSet.play().catch((e) => {
        console.log("Animation stoppped!");
    });
    // Call animationSet.cancel() to stop it;
}

export function onReset() {
    animationSet.cancel();
    view.rotate = 0;
}
