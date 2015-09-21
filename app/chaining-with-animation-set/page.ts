import observable = require("data/observable");
import pages = require("ui/page");
import viewModule = require("ui/core/view");
import animationModule = require("ui/animation");

var view1: viewModule.View;
var view2: viewModule.View;
var view3: viewModule.View;
var view4: viewModule.View;

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    view1 = page.getViewById<viewModule.View>("view1");
    view2 = page.getViewById<viewModule.View>("view2");
    view3 = page.getViewById<viewModule.View>("view3");
    view4 = page.getViewById<viewModule.View>("view4");
}

export function onAnimate(args: observable.EventData) {
  var definitions = new Array<animationModule.AnimationDefinition>();
  definitions.push({target: view1, translate: {x: 200, y: 0}, duration: 3000 });
  definitions.push({target: view2, translate: {x: 0, y: 200}, duration: 3000 });
  definitions.push({target: view3, translate: {x: -200, y: 0}, duration: 3000 });
  definitions.push({target: view4, translate: {x: 0, y: -200}, duration: 3000 });
  var playSequentially = true;
  var animationSet = new animationModule.Animation(definitions, playSequentially);

  animationSet.play().then(() => {
      console.log("Animation finished");
  })
  .catch((e) => {
      console.log(e.message);
  });
}

export function onReset(args: observable.EventData) {
    view1.translateX = 0;
    view1.translateY = 0;
    view2.translateX = 0;
    view2.translateY = 0;
    view3.translateX = 0;
    view3.translateY = 0;
    view4.translateX = 0;
    view4.translateY = 0;
}
