/**
 * Contains the action bar related classes.
 */
declare module "ui/action-bar" {
    import observable = require("data/observable");
    import view = require("ui/core/view");
    import dependencyObservable = require("ui/core/dependency-observable");
    import bindable = require("ui/core/bindable");
    import pages = require("ui/page");

    /**
     * Provides an abstraction over the ActionBar (android) and NavigationBar (iOS).
     */
    export class ActionBar extends view.View implements view.AddArrayFromBuilder, view.AddChildFromBuilder {
        
        /**
         * Gets or sets the action bar title.
         */
        title: string;

        /**
         * Gets or sets the title view. When set - replaces the title with a custom view.
         */
        titleView: view.View;
        
        /**
         * Gets or sets the navigation button (a.k.a. the back button).
         */
        navigationButton: NavigationButton;
        
        /**
         * Gets the collection of action items.
         */
        actionItems: ActionItems;
        
        /**
         * Gets the android specific options of the action bar.
         */
        android: AndroidActionBarSettings;

        /**
         * Gets the page that contains the action bar.
         */
        page: pages.Page;

        /**
         * Updates the action bar.
         */
        update();

        

        _addArrayFromBuilder(name: string, value: Array<any>): void;
        _addChildFromBuilder(name: string, value: any): void;
    }

    /**
     * Represents a collection of ActionItems.
     */
    export class ActionItems {
        /**
         * Adds an item to the collection.
         * @param item - the item to be added
         */
        addItem(item: ActionItem): void;
        
        /**
         * Removes an item to the collection.
         * @param item - The item to be removed.
         */
        removeItem(item: ActionItem): void;
        
        /**
         * Gets an array of the current action items in the collection.
         */
        getItems(): Array<ActionItem>;
        
        /**
         * Gets an item at a specified index.
         * @param index - The index.
         */
        getItemAt(index: number): ActionItem;
    }

    /**
     * Base class for action items.
     */
    export class ActionItemBase extends bindable.Bindable {
        /**
         * String value used when hooking to tap event.
         */
        public static tapEvent: string;

        /**
         * Represents the observable property backing the text property.
         */
        public static textProperty: dependencyObservable.Property;

        /**
         * Represents the observable property backing the icon property.
         */
        public static iconProperty: dependencyObservable.Property;

        /**
         * Gets or sets the text of the action item.
         */
        text: string;
        
        /**
         * Gets or sets the icon of the action item.
         */
        icon: string;
        
        /**
         * Gets the action bar that contains the action item.
         */
        actionBar: ActionBar;

        /**
         * A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
         * @param eventNames - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change"). 
         * @param callback - Callback function which will be executed when event is raised.
         * @param thisArg - An optional parameter which will be used as `this` context for callback execution.
         */
        on(eventNames: string, callback: (data: observable.EventData) => void);

        /**
         * Raised when a tap event occurs.
         */
        on(event: "tap", callback: (args: observable.EventData) => void);

        
    }

    /**
     * Represents an action item in the action bar.
     */
    export class ActionItem extends ActionItemBase {
        /**
         * Gets the iOS specific options of the action item.
         */
        ios: IOSActionItemSettings;
        
        /**
         * Gets the Android specific options of the action item.
         */
        android: AndroidActionItemSettings;
    }
    
    /**
     * Represents Android specific options of the action item.
     */
    export interface AndroidActionItemSettings {
        /**
         * Gets or sets the position of the action item in the action bar.
         *  1. actionBar - item is shown in the action bar.
         *  2. actionBarIfRoom - item is shown in the action bar if there is room for it. Otherwise it is put in the popup menu.
         *  3. popup - item is shown in the popup menu.
         */
        position: string;
    }
    
    /**
     * Represents iOS specific options of the action item.
     */
    export interface IOSActionItemSettings {
        /**
         * Gets or sets the position of the action item in the action bar.
         *  1. left - items is shown at the left part of the navigation bar. This is the default value.
         *  2. right - items is shown at the right part of the navigation bar.
         */
        position: string;
    }

    /**
     * Represents Android specific options of the action bar.
     */
    export interface AndroidActionBarSettings {
        
        /**
         * Gets or sets the action bar icon.
         */
        icon: string;
        
        /**
         * Gets or sets the visibility of the action bar icon.
         * The icon is visible by default in pre-lollipop (API level < 20) versions of android and is hidden in lollipop (API level >= 20)
         * The possible values are:
         *  1. auto - the default behavior. This is the default value.
         *  2. always - the icon is aways shown.
         *  3. never - the icon is aways hidden.
         */
        iconVisibility: string;
    }

    /**
     * Represents the navigation (a.k.a. "back") button.
     */
    export class NavigationButton extends ActionItemBase {

    }
}