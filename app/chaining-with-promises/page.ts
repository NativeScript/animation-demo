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
  view.animate({ opacity: 0 })
      .then(() => view.animate({ opacity: 1 }))
      .then(() => view.animate({ translate: { x: 100, y: 100 } }))
      .then(() => view.animate({ translate: { x: 0, y: 0 } }))
      .then(() => view.animate({ scale: { x: 3, y: 3 } }))
      .then(() => view.animate({ scale: { x: 1, y: 1 } }))
      .then(() => view.animate({ rotate: 180 } ))
      .then(() => view.animate({ rotate: 0 } ))
      .then(() => {
      console.log("Animation finished");
    })
      .catch((e) => {
      console.log(e.message);
    });
}

export function onReset(args: observable.EventData) {
    view.translateX = 0;
    view.translateY = 0;
    view.scaleX = 1;
    view.scaleY = 1;
    view.rotate = 0;
}
