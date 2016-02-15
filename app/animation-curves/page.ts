import observable = require("data/observable");
import pages = require("ui/page");
import viewModule = require("ui/core/view");
import enums = require("ui/enums");

var view: viewModule.View;

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    view = page.getViewById<viewModule.View>("view");
}

export function onAnimateLinear(args: observable.EventData) {
    view.animate({
        translate: { x: 0, y: 100},
        duration: 1000,
        curve: enums.AnimationCurve.linear
    });
}

export function onAnimateEaseIn(args: observable.EventData) {
    view.animate({
        translate: { x: 0, y: 100},
        duration: 1000,
        curve: enums.AnimationCurve.easeIn
    });}

export function onAnimateEaseOut(args: observable.EventData) {
    view.animate({
        translate: { x: 0, y: 100},
        duration: 1000,
        curve: enums.AnimationCurve.easeOut
    });}

export function onAnimateEaseInEaseOut(args: observable.EventData) {
    view.animate({
        translate: { x: 0, y: 100},
        duration: 1000,
        curve: enums.AnimationCurve.easeInOut
    });}

export function onAnimateSpring(args: observable.EventData) {
    view.animate({
        translate: { x: 0, y: 100},
        duration: 1000,
        curve: enums.AnimationCurve.spring
    });}

export function onAnimateCustom(args: observable.EventData) {
    view.animate({
        translate: { x: 0, y: 100},
        duration: 1000,
        curve: enums.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
    });
}

export function onReset(args: observable.EventData) {
    view.translateX = 0;
    view.translateY = 0;
}
