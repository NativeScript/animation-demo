/**
 * Allows you to create, start, stop and react to timers.
 */
declare module "timer" {
    /**
     * Calls a function after a specified delay.
     * @param callback The function to be called.
     * @param milliseconds The time to wait before the function is called. Defaults to 0.
     */
    export function setTimeout(callback: Function, milliseconds?: number): number;

    /**
     * Clears the delay set by a call to the setTimeout function.
     * @param id The identifier returned by the previously called setTimeout() method.
     */
    export function clearTimeout(id: number): void;

    /**
     * Calls a function repeatedly with a delay between each call.
     * @param callback The function to be called.
     * @param milliseconds The delay between each function call.
     */
    export function setInterval(callback: Function, milliseconds?: number): number;

    /**
     * Clears repeated function which was set up by calling setInterval().
     * @param id The identifier returned by the setInterval() method.
     */
    export function clearInterval(id: number): void;
}