/**
 * Contains the Frame class, which represents the logical View unit that is responsible for navigation within an application.
 */
declare module "ui/frame" {
    import view = require("ui/core/view");
    import observable = require("data/observable");
    import pages = require("ui/page");

    /**
     * Represents the logical View unit that is responsible for navigation withing an application.
     * Typically an application will have a Frame object at a root level.
     * Nested frames are supported, enabling hierarchical navigation scenarios.
     */
    export class Frame extends view.View {
        /**
         * String value used when hooking to androidOptionSelected event (prefix `android` states that this event is available only in Android).
         */
        public static androidOptionSelectedEvent: string;

        /**
         * Navigates to the previous entry (if any) in the back stack.
         */
        goBack();

        /**
         * Checks whether the goBack operation is available.
         */
        canGoBack(): boolean;

        /**
         * Navigates to a Page instance as described by the module name. 
         * This method will require the module and will check for a Page property in the exports of the module.
         * @param pageModuleName The name of the module to require starting from the application root.
         * For example if you want to navigate to page called "myPage.js" in a folder called "subFolder" and your root folder is "app" you can call navigate method like this:
         * var frames = require("ui/frame");
         * frames.topmost().navigate("app/subFolder/myPage");
         */
        navigate(pageModuleName: string);

        /**
         * Creates a new Page instance using the provided callback and navigates to that Page.
         * @param create The function to be used to create the new Page instance.
         */
        navigate(create: () => pages.Page);

        /**
         * Navigates to a Page resolved by the provided NavigationEntry object.
         * Since there are a couple of  ways to specify a Page instance through an entry, there is a resolution priority:
         *     1. entry.moduleName
         *     2. entry.create()
         * @param entry The NavigationEntry instance.
         */
        navigate(entry: NavigationEntry);

        /**
         * Gets the back stack of this instance.
         */
        backStack: Array<BackstackEntry>;

        /**
         * Gets the Page instance the Frame is currently navigated to.
         */
        currentPage: pages.Page;

        /**
         * Gets the NavigationEntry instance the Frame is currently navigated to.
         */
        currentEntry: NavigationEntry;

        /**
         * Gets or sets if navigation transitions should be animated.
         */
        animated: boolean;

        /**
         * Gets or sets if navigation transitions should be animated globally.
         */
        static defaultAnimatedNavigation: boolean;

        /**
         * Gets the AndroidFrame object that represents the Android-specific APIs for this Frame. Valid when running on Android OS.
         */
        android: AndroidFrame;

        /**
         * Gets the iOSFrame object that represents the iOS-specific APIs for this Frame. Valid when running on iOS.
         */
        ios: iOSFrame;

        

        /**
         * A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
         * @param eventNames - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change"). 
         * @param callback - Callback function which will be executed when event is raised.
         * @param thisArg - An optional parameter which will be used as `this` context for callback execution.
         */
        on(eventNames: string, callback: (args: observable.EventData) => void, thisArg?: any);

        /**
         * Raised when native android [onOptionsItemSelected method](http://developer.android.com/reference/android/app/Activity.html#onOptionsItemSelected(android.view.MenuItem)) is called.
         */
        on(event: "optionSelected", callback: (args: observable.EventData) => void, thisArg?: any);
    }

    /**
     * Gets the topmost frame in the frames stack. An application will typically has one frame instance. Multiple frames handle nested (hierarchical) navigation scenarios.
     */
    export function topmost(): Frame;

    /**
     * Navigates back using the navigation hierarchy (if any). Updates the Frame stack as needed.
     * This method will start from the topmost Frame and will recursively search for an instance that has the canGoBack operation available.
     */
    export function goBack();

    /**
     * Gets the frames stack.
     */
    export function stack(): Array<Frame>;

    /**
     * Represents an entry in passed to navigate method.
     */
    export interface NavigationEntry {
        /**
         * The name of the module containing the Page instance to load. Optional.
         */
        moduleName?: string;

        /**
         * A function used to create the Page instance. Optional.
         */
        create?: () => pages.Page;

        /**
         * An object passed to the onNavigatedTo callback of the Page. Typically this is used to pass some data among pages. Optional.
         */
        context?: any;

        /**
         * True to navigate to the new Page using animated transitions, false otherwise.
         */
        animated?: boolean;

        /**
         * True to record the navigation in the backstack, false otherwise. 
         * If the parameter is set to false then the Page will be displayed but once navigated from it will not be able to be navigated back to.
         */
        backstackVisible?: boolean;
    }

    /**
     * Represents an entry in the back stack of a Frame object.
     */
    export interface BackstackEntry {
        entry: NavigationEntry;
        resolvedPage: pages.Page;
    }

    /**
     * Represents the data passed to the androidOptionSelected event. 
     * This event is raised by the Android OS when an option in the Activity's action bar has been selected.
     */
    export interface AndroidOptionEventData extends observable.EventData {
        /**
         * Gets the Android-specific menu item that has been selected.
         */
        item: android.view.IMenuItem;

        /**
         * True to mark the event as handled (that is to prevent the default processing).
         */
        handled: boolean;
    }

    /**
     * Represents the Android-specific Frame object, aggregated within the common Frame one.
     * In Android there are two types of navigation - using new Activity instances or using Fragments within the main Activity.
     * To start a new Activity, a new Frame instance should be created and navigated to the desired Page.
     */
    export interface AndroidFrame extends observable.Observable {
        /**
         * Gets the native [android ViewGroup](http://developer.android.com/reference/android/view/ViewGroup.html) instance that represents the root layout part of the Frame.
         */
        rootViewGroup: android.view.ViewGroup;

        /**
         * Gets the native [android Activity](http://developer.android.com/reference/android/app/Activity.html) instance associated with this Frame. In case of nested Frame objects, this property points to the activity of the root Frame.
         */
        activity: android.app.Activity;

        /**
         * Gets the current (foreground) activity for the application. This property will recursively traverse all existing Frame objects and check for own Activity property.
         */
        currentActivity: android.app.Activity;

        /**
         * Gets the actionBar property of the currentActivity.
         */
        actionBar: android.app.ActionBar;

        /**
         * A function called by the Runtime whenever a new Activity is about to be opened.
         * @param intent The native [android Intent](http://developer.android.com/reference/android/content/Intent.html) object passed to the Activity's onCreate method.
         */
        onActivityRequested(intent: android.content.Intent): Object;

        /**
         * Determines whether the Activity associated with this Frame will display an action bar or not.
         */
        showActionBar: boolean;

        /**
         * Gets or sets whether the page UI will be cached when navigating away from the page.
         */
        cachePagesOnNavigate: boolean;
    }

    /* tslint:disable */
    /**
     * Represents the iOS-specific Frame object, aggregated within the common Frame one.
     * In iOS the native controller, associated with a Frame object is UINavigationController.
     * The navigation controller will automatically hide/show its navigation bar depending on the back stack of the Frame.
     */
    export interface iOSFrame {
        /**
         * Gets the native [UINavigationController](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UINavigationController_Class/index.html) instance associated with this Frame.
         */
        controller: UINavigationController;

        /**
         * Gets or sets the visibility of navigationBar.
         * Use NavBarVisibility enumeration - auto, never, always
         */
        navBarVisibility: string;
    }
}