import * as observable from "data/observable";
import * as pages from "ui/page";
import * as viewModule from "ui/core/view";
import * as animationModule from "ui/animation";

var view: viewModule.View;


declare const CAMediaTimingFunction:any

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    view = page.getViewById<viewModule.View>("view");
}

var animationSet: animationModule.Animation;
export function onAnimate(args: observable.EventData) {
    animationSet = new animationModule.Animation([{
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

export function onReset(args: observable.EventData) {
    animationSet.cancel();
    view.rotate = 0;
}
