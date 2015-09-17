/**
 * Contains the ActivityIndicator class, which represents a widget for showing that something is currently busy.
 */
declare module "ui/activity-indicator" {
    import view = require("ui/core/view");
    import dependencyObservable = require("ui/core/dependency-observable");

    /**
     * Represents a UI widget which displays a progress indicator hinting the user for some background operation running.
     */
    export class ActivityIndicator extends view.View {
        /**
         * Represents the busy property of the ActivityIndicator class.
         */
        public static busyProperty: dependencyObservable.Property;

        /**
         * Gets the native [android widget](http://developer.android.com/reference/android/widget/ProgressBar.html) that represents the user interface for this component. Valid only when running on Android OS.
         */
        android: android.widget.ProgressBar;

        /**
         * Gets the native iOS [UIActivityIndicatorView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIActivityIndicatorView_Class/index.html) that represents the user interface for this component. Valid only when running on iOS.
         */
        ios: UIActivityIndicatorView;

        /**
         * Gets or sets a value indicating whether the widget is currently displaying progress.
         */
        busy: boolean;
    }
}