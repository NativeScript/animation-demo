/**
 * Contains the TextView class, which represents an editable multi-line line box.
 */
declare module "ui/text-view" {
    import editableTextBase = require("ui/editable-text-base");

    /**
     * Represents an editable multiline text view.
     */
    export class TextView extends editableTextBase.EditableTextBase {
        constructor(options?: editableTextBase.Options);

        /**
         * Gets the native [android widget](http://developer.android.com/reference/android/widget/EditText.html) that represents the user interface for this component. Valid only when running on Android OS.
         */
        android: android.widget.EditText;

        /**
         * Gets the native iOS [UITextView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextView_Class/) that represents the user interface for this component. Valid only when running on iOS.
         */
        ios: UITextView;
    }
} 