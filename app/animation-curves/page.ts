import { EventData } from "data/observable";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import { AnimationCurve } from "ui/enums";

let view: View;

export function pageLoaded(args: EventData) {
    const page = <Page>args.object;
    view = page.getViewById<View>("view");
}

export function onAnimateLinear() {
    view.animate({
        translate: { x: 0, y: 100},
        duration: 1000,
        curve: AnimationCurve.linear
    });
}

export function onAnimateEaseIn() {
    view.animate({
        translate: { x: 0, y: 100},
        duration: 1000,
        curve: AnimationCurve.easeIn
    });}

export function onAnimateEaseOut() {
    view.animate({
        translate: { x: 0, y: 100},
        duration: 1000,
        curve: AnimationCurve.easeOut
    });}

export function onAnimateEaseInEaseOut() {
    view.animate({
        translate: { x: 0, y: 100},
        duration: 1000,
        curve: AnimationCurve.easeInOut
    });}

export function onAnimateSpring() {
    view.animate({
        translate: { x: 0, y: 100},
        duration: 1000,
        curve: AnimationCurve.spring
    });}

export function onAnimateCustom() {
    view.animate({
        translate: { x: 0, y: 100},
        duration: 1000,
        curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
    });
}

export function onReset() {
    view.translateX = 0;
    view.translateY = 0;
}
