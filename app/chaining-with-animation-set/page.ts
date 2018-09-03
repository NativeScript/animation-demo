import { EventData } from "data/observable";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import { Animation, AnimationDefinition } from "ui/animation";

let view1: View;
let view2: View;
let view3: View;
let view4: View;

export function pageLoaded(args: EventData) {
    const page = <Page>args.object;
    view1 = page.getViewById<View>("view1");
    view2 = page.getViewById<View>("view2");
    view3 = page.getViewById<View>("view3");
    view4 = page.getViewById<View>("view4");
}

export function onAnimate() {
  const definitions = new Array<AnimationDefinition>();
  definitions.push({target: view1, translate: {x: 200, y: 0}, duration: 3000 });
  definitions.push({target: view2, translate: {x: 0, y: 200}, duration: 3000 });
  definitions.push({target: view3, translate: {x: -200, y: 0}, duration: 3000 });
  definitions.push({target: view4, translate: {x: 0, y: -200}, duration: 3000 });
  const playSequentially = true;
  const animationSet = new Animation(definitions, playSequentially);

  animationSet.play().then(() => {
      console.log("Animation finished");
  })
  .catch((e) => {
      console.log(e.message);
  });
}

export function onReset() {
    view1.translateX = 0;
    view1.translateY = 0;
    view2.translateX = 0;
    view2.translateY = 0;
    view3.translateX = 0;
    view3.translateY = 0;
    view4.translateX = 0;
    view4.translateY = 0;
}
