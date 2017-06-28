/******************************************** IMPORTS *********************************************/
import { isNonexistentOrString, RealAny } from './types-iso';
import { matchesIgnoreCase, replaceAll } from './string';
import { englishVariants, frenchVariants } from './internal/lang-constants';
import deepFreezeStrict = require('deep-freeze-strict');

/********************************************* OBJECT *********************************************/
/**
 * Return a deep-frozen clone of a group of objects. Completely safe.
 * @param {...Object[]} args - Any # of objects to merge together into the merged clone object.
 * @return {Object} Frozen merged version of provided objects. Clones originals - no mutation.
 */
export const assignFrozenClone = <T>(...args: {}[]): Readonly<T> => {
    return deepFreezeStrict<T>(Object.assign({}, ...args));
};

/**
 * [MUTATIVE] Deep freeze the given object.
 * @param {Object} obj - Object to deeply freeze.
 * @return {Readme<Object>} The original object, frozen. Note that it freezes the object itself as
 *                          well - it does not create a frozen copy (the return is for convenience)
 */
export const deepFreeze = <T>(obj: T): Readonly<T> => {
    return deepFreezeStrict<T>(obj);
};

/**
 * Safely get the given prop (via array of path props or 'access string') from the given object.
 *
 * @param {string[]|string} propPath - String in 'key1.key2.etc' form, or array of strings where
 *                                      each item is a key to traverse into:
 *                                      e.g.: ['key1', 'key2', 'etc'] refers to key1.key2.etc
 * @param {Object} obj - Object to get the value from using the given path.
 * @return {any} Value found at the given path.
 */
export const get = <T extends Object>(propPath: string[] | string, objIn: T): RealAny | void => {
    if (typeof objIn === 'undefined' || objIn == null) return null;

    return (typeof propPath === 'string' ? propPath.split('.') : propPath)
        .reduce((obj, objPathPt: string) => {
            const exists = typeof obj !== 'undefined' && typeof obj === 'object' && obj != null;
            if (!exists) return null;
            if (obj[objPathPt]) return obj[objPathPt];
            return null;
        }, objIn);
};

/**
 * Return true if val is (probably) a multilanguage string object (multi also includes '1 language')
 * Not foolproof: assumes one of the languages is either English or French. It won't work otherwise.
 *
 * @param {val} val - Value to type check.
 * @return {boolean} true if object's properties suggest it's a multilanguage string object.
 */
export const isMultilangTextObj = (obj: RealAny): boolean => {
    let matchingKey;
    return !!(
        typeof obj === 'object' && obj !== null
        && Object.keys(obj).length > 0
        && Object.keys(obj).find(key => {
            if (englishVariants.find(matchesIgnoreCase(key)) ||
                frenchVariants.find(matchesIgnoreCase(key)))
            {
                matchingKey = key;
                return true;
            }
        })
        && (typeof matchingKey === 'string'
            || matchingKey == null
            || matchingKey == undefined)
        && isNonexistentOrString(obj[matchingKey])
    );
};

/**
 * Run the given function on the given object. Iterator operates on the value and key of any
 * object provided, in the order "val", "key".
 *
 * @param {Function} func - (val, key) => void | any. Function to iterates over provided object.
 * @param {T extends object} obj - Object to iterate over.
 * @return {T extends Object} Returns the object initially passed in (for chaining)
 */
export const eachPair =
    <T extends Object>(func: ((val: T[keyof T], key?: keyof T) => void | RealAny)) => (obj: T): T =>
{
    Object.keys(obj).forEach((key: keyof T) => func(obj[key], key));
    return obj;
};

/**
 * Get number of keys/pairs in an object. If given a non-object, return 0.
 * @param {Object} obj - Object to get the number of keys of.
 * @return {number} Number of keys in the object, or 0 if it's a non-object (or has no keys).
 */
export const numKeys = (obj: RealAny): number => {
    if (typeof obj !== 'object' || obj == null || obj == undefined) return 0;
    return Object.keys(obj).length;
}
export const numPairs = numKeys;

/**
 * Determine if an object contains a given key.
 *
 * @param {Object} obj - Object to check for the given key
 * @param {string} matchKey - key to search for in obj.
 * @return {boolean} true if obj contains matchKey
 */
export const hasKey = <T extends Object>(obj: T, matchKey: string): boolean => {
    if (typeof obj === 'object' && obj != null) {
        return Object.keys(obj).some((k: keyof T) => k === matchKey);
    }
    return false;
};
