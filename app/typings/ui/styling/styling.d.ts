declare module "ui/styling" {
    import observable = require("ui/core/dependency-observable");
    import color = require("color");
    import view = require("ui/core/view");
    import dependencyObservable = require("ui/core/dependency-observable");

    /**
     * Represents an observable property which can have its value set form CSS style.
     */
    export class Property extends observable.Property {

        /**
         * Creates a new style property.
         * @param name Name of the property
         * @param cssName The name of property when it is defined in CSS
         * @param metadata The property metadata
         * @param valueConverter Converter function that will be used to convert the CSS value to the actual property type.
         */
        constructor(name: string, cssName: string, metadata: observable.PropertyMetadata, valueConverter?: (value: any) => any);

        /**
         * Gets the CSS name of the property.
         */
        cssName: string;

        /**
         * Gets the converter function that will be used to convert the CSS value to the actual property type. 
         */
        valueConverter: (value: any) => any;
    }

    /**
     * Represents as style object containing all the style properties for a particular view.
     */
    export class Style extends observable.DependencyObservable {
        /**
         * Creates new style object.
         * @param parentView The view for which the style is created for.
         */
        constructor(parentView: view.View);

        /**
         * Gets or sets the color style property.
         */
        color: color.Color;
        /**
         * Gets or sets the background-color style property.
         */
        backgroundColor: color.Color;
        
        /**
         * Gets or sets the background-image style property.
         */
        backgroundImage: string;
        
        /**
         * Gets or sets the background-size style property.
         */
        backgroundSize: string;
        
        /**
         * Gets or sets the background-position style property.
         */
        backgroundPosition: string;
        
        /**
         * Gets or sets the background-repeat style property.
         */
        backgroundRepeat: string;

        /**
         * Gets or sets the border-color style property.
         */
        borderColor: color.Color 

        /**
         * Gets or sets the border-width style property.
         */
        borderWidth: number

        /**
         * Gets or sets the border-radius style property.
         */
        borderRadius: number;

        /**
         * Gets or sets font-size style property.
         */
        fontSize: number;

        /**
         * Gets or sets font-family style property.
         */
        fontFamily: string;

        /**
         * Gets or sets font-style style property.
         */
        fontStyle: string;

        /**
         * Gets or sets font-weight style property.
         */
        fontWeight: string;

        /**
         * Gets or sets text-alignment style property.
         */
        textAlignment: string;

        /**
         * Gets or sets min-width style property.
         */
        minWidth: number;

        /**
         * Gets or sets min-height style property.
         */
        minHeight: number;

        /**
         * Gets or sets width style property.
         */
        width: number;

        /**
         * Gets or sets height style property.
         */
        height: number;

        /**
         * Gets or sets margin style property.
         */
        margin: string;

        /**
         * Specifies extra space on the left side of this view.
         */
        marginLeft: number;

        /**
         * Specifies extra space on the top side of this view.
         */
        marginTop: number;

        /**
         * Specifies extra space on the right side of this view.
         */
        marginRight: number;

        /**
         * Specifies extra space on the bottom side of this view.
         */
        marginBottom: number;

        /**
         * Gets or sets padding style property.
         */
        padding: string;

        /**
         * Specify the left padding of this view.
         */
        paddingLeft: number;

        /**
         * Specify the top padding of this view.
         */
        paddingTop: number;

        /**
         * Specify the right padding of this view.
         */
        paddingRight: number;

        /**
         * Specify the bottom padding of this view.
         */
        paddingBottom: number;

        /**
         * Gets or sets horizontal-alignment style property.
         */
        horizontalAlignment: string;

        /**
         * Gets or sets vertical-alignment style property.
         */
        verticalAlignment: string;

        /**
         * Gets or sets the visibility style property.
         */
        visibility: string;

        /**
         * Gets or sets the opacity style property.
         */
        opacity: number;

        
    }

    /**
     * Encapsulates the style properties definitions and utility methods.
     */
    module properties {
        /**
         * The font-size property definition.
         */
        export var fontSizeProperty: Property;

        /**
         * The color property definition.
         */
        export var colorProperty: Property;

        /**
         * The background-color property definition.
         */
        export var backgroundColorProperty: Property;

        /**
         * The text-alignment property definition.
         */
        export var textAlignmentProperty: Property;

        /**
         * Gets style Property by its name.
         * @param The name.
         */
        export function getPropertyByName(name: string): Property;

        /**
         * Gets style Property by its CSS name.
         * @param The CSS name.
         */
        export function getPropertyByCssName(name: string): Property;

        /**
         * Executes a callback for all defined style properties.
         * @param The callback.
         */
        export function eachProperty(callback: (property: Property) => void);

        /**
         * Executes a callback for all defined inheritable style properties.
         * @param The callback.
         */
        export function eachInheritableProperty(callback: (property: Property) => void);
    }

    /**
     * Encapsulates CSS converter methods.
     */
    module converters {
        /**
         * CSS color converter function.
         * @param cssValue The css value.
         */
        export function colorConverter(cssValue: any): color.Color;

        /**
         * CSS font-size converter function.
         * @param cssValue The css value.
         */
        export function fontSizeConverter(cssValue: any): number;

        /**
         * CSS text-align converter function.
         * @param cssValue The css value.
         */
        export function textAlignConverter(cssValue: any): string;

        /**
         * CSS number converter function.
         * @param cssValue The css value.
         */
        export function numberConverter(cssValue: any): number;

        /**
         * CSS visibility converter function.
         * @param cssValue The css value.
         */
        export function visibilityConverter(cssValue: any): number;
    }

    /**
     * Encapsulates visual states names.
     */
    module visualStates {
        /**
         * The normal visual state.
         */
        export var Normal: string;

        /**
         * The hovered visual state.
         */
        export var Hovered: string;

        /**
         * The pressed visual state.
         */
        export var Pressed: string;
    }

    /**
     * Encapsulates styler classes used for converting NativeScript properties to properties of the native views/widgets.
     */
    module stylers {
        /**
         * Represents an object that defines how style property should be applied on a native view/widget.
         */
        export class StylePropertyChangedHandler {
            /**
             * Creates a new StylePropertyChangedHandler object.
             * @param applyCallback - called when a property value should be applied onto the native view/widget.
             * @param resetCallback - called when the property value is cleared to restore the native view/widget in its original state. The callback
             * also receives as a parameter the value stored by the getNativeValue callback.
             * @param getNativeValue - called when a style property is set for the first time to get the default native value for this property
             * in the native view/widget. This value will be passed to resetCallback in case the property value is cleared. Optional.
             */
            constructor(applyCallback: (view: view.View, newValue: any) => void,
                resetCallback: (view: view.View, nativeValue: any) => void,
                getNativeValue?: (view: view.View) => any);
        }

        /**
         * Represents a sceleton for an object that holds all style related callbacks and registers handlers.
         * Used for better code readability.
         */
        export class Styler {
            public static registerHandlers();
        }

        /**
         * A function that actually registers a property with a StylePropertyChangedHandler.
         * @param property - Usually a style dependency property which should be registered for style changes.
         * @param handler - The handler that reacts on property changes.
         * @param className(optional) - This parameter (when set) registers handler only for the class with that name and all its inheritors.
         */
        export function registerHandler(property: dependencyObservable.Property, handler: StylePropertyChangedHandler, className?: string);
    }
}