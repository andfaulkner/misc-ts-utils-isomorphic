import { RealAny } from './types-iso';
/**
 * Return a function's source code in nicely spaced array format
 * @param {Function} func The function to examine
 * @return {string[]} function source code in an array, where each 'line' is an item
 */
export declare function getFnAsArr(func: Function): string[];
/**
 * @alias getFnAsArr
 */
export { getFnAsArr as getFunctionSrcAsArray };
/***************************************** LOOP UTILITIES *****************************************/
/**
 * Run given function N times, returning results as an array containing all N return vals
 * @param {number} n Number of times to run given function
 * @param {Function} func Function to repeatedly run
 * @return {Array<any>} Array containing function return values
 */
export declare const loopN: <T>(n: number, func: (...args: any[]) => T) => T[];
/** Run given function 2X, returning results as an array containing both return vals */
export declare const loop2: <T>(func: (...args: any[]) => T) => T[];
/** Run given function 3X, returning results as an array containing all 3 return vals */
export declare const loop3: <T>(func: (...args: any[]) => T) => T[];
/** Run given function 4X, returning results as an array containing all 4 return vals */
export declare const loop4: <T>(func: (...args: any[]) => T) => T[];
/** Run given function 5X, returning results as an array containing all 5 return vals */
export declare const loop5: <T>(func: (...args: any[]) => T) => T[];
/**
 * Rough method to list a function's arguments/parameters (untyped)
 * @param {Function} func Function to get the arguments/params of
 * @return {string[]} List of argument names in string form e.g.: ['id', 'name', age']
 */
export declare const getArgNames: (func: Function) => string[];
export { getArgNames as getArgsFromFunc };
export { getArgNames as getArgs };
/****************************************** CONDITIONALS ******************************************/
/**
 * Function-based switch expression
 *
 * Any odd number of arguments can be given, where for each pair of args, the
 * 1st arg is a condition (which passes if truthy), and the 2nd is the value
 * returned if the condition passes
 * If no conditions pass, the final arg given (default val) is returned
 * If no final arg is given, it instead throws an error
 *
 * If using prettier, it's useful to place prettier-ignore directive above usage, for readability
 *
 * Each pair of arguments:
 *     @param {boolean|any} cond Condition to check for truthiness
 *     @param {any} val Value returned if the test condition is truthy
 * Final argument:
 *     @param {any} defVal Value returned if no test conditions are met
 *
 * @example If size is 'tiny', returns 12; if size is 'small', returns 14; otherwise, returns 20:
 *     // prettier-ignore
 *     condSwitch(size === 'tiny',  12,
 *                size === 'small', 14,
 *                                  20);
 */
export declare function condSwitch(cond: boolean | RealAny, val: RealAny, ...condValPairsAndOrDefVal: RealAny[]): RealAny | never;
/************************************* RUN TIMING / LIMITING **************************************/
/**
 * @param {Function} cb Call max 1X/[wait]ms & call at interval start if [immediate]=true {default}
 * @param {number} wait Time to wait before next call of function allowed
 * @param {boolean} immediate If true, call at the beginning of the interval {default=true}
 *
 * @example throttle(() => console.log('Called!'), 1000);
 *          // 10 "clicks" within 1 second will output 'Called!' only once, on initial "click"
 */
export declare function throttle(cb: (...args: any[]) => any, wait: number, immediate?: boolean): () => void;
/**
 * Run all functions in the given array, return results of each
 */
export declare const runAll: <R = any>(arr: Function[], ...args: any[]) => R[];
