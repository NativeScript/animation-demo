/**
 * Contains the Page class, which represents a logical unit for navigation inside a Frame. 
 */
declare module "ui/page" {
    import observable = require("data/observable");
    import view = require("ui/core/view");
    import contentView = require("ui/content-view");
    import frame = require("ui/frame");
    import actionBar = require("ui/action-bar");
    import dependencyObservable = require("ui/core/dependency-observable");

    

    /**
     * Defines the data for the page navigation events.
     */
    export interface NavigatedData extends observable.EventData {
        /**
         * The navigation context (optional, may be undefined) passed to the page navigation events method.
         */
        context: any;
    }

    /**
     * Defines the data for the Page.shownModally event.
     */
    export interface ShownModallyData extends observable.EventData {
        /**
         * The context (optional, may be undefined) passed to the page when shown modally.
         */
        context: any;
        
        /**
         * A callback to call when you want to close the modally shown page. Pass in any kind of arguments and you will receive when the callback parameter of Page.showModal is executed.
         */
        closeCallback: Function;
    }

    export module knownCollections {
        export var actionItems: string;
    }

    /**
     * Represents a logical unit for navigation (inside Frame).
     */
    export class Page extends contentView.ContentView {
        /**
         * Dependency property used to hide the Navigation Bar in iOS and the Action Bar in Android.
         */
        public static actionBarHiddenProperty: dependencyObservable.Property;

        /**
         * String value used when hooking to shownModally event.
         */
        public static shownModallyEvent: string;

        /**
         * String value used when hooking to navigatingTo event.
         */
        public static navigatingToEvent: string;

        /**
         * String value used when hooking to navigatedTo event.
         */
        public static navigatedToEvent: string;

        /**
         * String value used when hooking to navigatingFrom event.
         */
        public static navigatingFromEvent: string;

        /**
         * String value used when hooking to navigatedFrom event.
         */
        public static navigatedFromEvent: string;

        constructor(options?: Options)

        /**
         * Used to hide the Navigation Bar in iOS and the Action Bar in Android.
         */
        actionBarHidden: boolean;

        /**
         * A valid css string which will be applied for all nested UI components (based on css rules).
         */
        css: string;

        /**
         * Adds a new values to current css.
         * @param cssString - A valid css which will be added to current css. 
         */
        addCss(cssString: string): void;

        /**
         * Adds the content of the file to the current css.
         * @param cssFileName - A valid file name (from the application root) which contains a valid css.
         */
        addCssFile(cssFileName: string): void;

        /**
         * A property that is used to pass a data from another page (while navigate to).
         */
        navigationContext: any;

        /**
         * Gets the Frame object controlling this instance.
         */
        frame: frame.Frame;

        /**
         * Gets the ActionBar for this page.
         */
        actionBar: actionBar.ActionBar;

        /**
         * A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
         * @param eventNames - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change"). 
         * @param callback - Callback function which will be executed when event is raised.
         * @param thisArg - An optional parameter which will be used as `this` context for callback execution.
         */
        on(eventNames: string, callback: (data: observable.EventData) => void, thisArg?: any);

        /**
         * Raised when navigation to the page has started.
         */
        on(event: "navigatingTo", callback: (args: NavigatedData) => void, thisArg?: any);

        /**
         * Raised when navigation to the page has finished.
         */
        on(event: "navigatedTo", callback: (args: NavigatedData) => void, thisArg?: any);

        /**
         * Raised when navigation from the page has started.
         */
        on(event: "navigatingFrom", callback: (args: NavigatedData) => void, thisArg?: any);

        /**
         * Raised when navigation from the page has finished.
         */
        on(event: "navigatedFrom", callback: (args: NavigatedData) => void, thisArg?: any);
        
        /**
         * Raised when the page is shown as a modal dialog.
         */
        on(event: "shownModally", callback: (args: ShownModallyData) => void, thisArg?: any);

        /**
         * Shows the page contained in moduleName as a modal view.
         * @param moduleName - The name of the page module to load starting from the application root.
         * @param context - Any context you want to pass to the modally shown page. This same context will be available in the arguments of the Page.shownModally event handler.
         * @param closeCallback - A function that will be called when the page is closed. Any arguments provided when calling ShownModallyData.closeCallback will be available here.
         * @param fullscreen - An optional parameter specifying whether to show the modal page in full-screen mode.
         */
        showModal(moduleName: string, context: any, closeCallback: Function, fullscreen?: boolean);

        
    }

    /**
     * Provides a set with most common option used to create a page instance.
     */
    export interface Options extends view.Options {
        /**
         * Gets or sets the page module.
         */
        module?: any;

        /**
         * Gets or sets the page module file name.
         */
        filename?: string;

        /**
         * Gets or sets the page module exports.
         */
        exports?: any;
    }
}