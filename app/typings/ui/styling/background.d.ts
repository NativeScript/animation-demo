declare module "ui/styling/background" {
    import imageSource = require("image-source");
    import colorModule = require("color");
    import viewModule = require("ui/core/view");

    export interface BackgroundDrawParams {
        repeatX: boolean;
        repeatY: boolean;
        posX: number;
        posY: number;
        sizeX?: number;
        sizeY?: number;
    }

    export class Background {
        static default: Background;
        color: colorModule.Color;
        image: imageSource.ImageSource;
        repeat: string;
        position: string;
        size: string;

        constructor(
            color: colorModule.Color,
            image: imageSource.ImageSource,
            repeat: string,
            position: string,
            size: string);

        public withColor(value: colorModule.Color): Background;
        public withImage(value: imageSource.ImageSource): Background;

        public withRepeat(value: string): Background;

        public withPosition(value: string): Background;

        public withSize(value: string): Background;

        public getDrawParams(width: number, height: number): BackgroundDrawParams;

        public isEmpty(): boolean;

        public static equals(value1: Background, value2: Background): boolean;
    }

    export module ios {
        export function createBackgroundUIColor(view: viewModule.View): UIColor;
    }

    // We are using "ad" here to avoid namespace collision with the global android object
    export module ad {
        export class BorderDrawable extends android.graphics.drawable.ColorDrawable {
            borderWidth: number;
            cornerRadius: number;
            borderColor: number;
            background: Background;
        }
    }
}
