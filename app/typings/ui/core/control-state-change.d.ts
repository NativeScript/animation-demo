declare module "ui/core/control-state-change" {
    /**
     * An utility class used for supporting styling infrastructure.
     */
    class ControlStateChangeListener {

        /**
         * Initializes an instance of ControlStateChangeListener class.
         * @param control An instance of the UIControl which state will be watched.
         * @param callback A callback called when a visual state of the UIControl is changed.
         */
        constructor(control: UIControl, callback: (state: string) => void);
    }
}