/******************************************** IMPORTS *********************************************/
import * as moment from 'moment';
import { DecoratorError } from './error';
import { isVerbose } from 'env-var-helpers';
import { matches } from './string';
import * as Polyglot from 'node-polyglot';

/************************************ COMMON TYPE DEFINITIONS *************************************/
export interface ClassConstructor {
    new(...args: any[]): {};
}

// For cases where something truly can be any value (contrast with the most common
// case where 'any' is used in lieu of determining a highly complex type)
export type RealAny = any;

export type StringOrNonexistent = string | null | undefined;
export { StringOrNonexistent as StrOrNonexistent };

export interface SingletonInterface<U> {
    new(...args: any[]): U;
    new: <Y>(...args: any[]) => Y;
}

/**
 * Union aliases
 */
export type StrOrNum = string | number;
export type NumOrStr = StrOrNum;
export type StringOrNumber = StrOrNum;
export type NumberOrString = StrOrNum;
export type StrOrNever = string | never;
export type NeverOrStr = string | never;

/**
 * Any type that can potentially be cast to a number.
 */
export type NumLike = StrOrNum | StrOrNum[];

/**
 * Alias to indicate variable injected by a decorator.
 */
export type Injection<T> = T;
export type InjectionType<T> = T;

export type OptionalInjection<T> = T;
export type OptionalInjectedType<T> = T;

export type RequiredInjection<T> = T;
export type RequiredInjectionType<T> = T;

export type MandatoryInjection<T> = T;
export type MandatoryInjectionType<T> = T;

/**
 * Extend to (optionally) include Polyglot
 */
export interface PolyglotProps {
    polyglot?: Readonly<Polyglot>;
}


/*************************************** HTTP REQUEST TYPES ***************************************/
/**
 * Most commonly used HTTP Request types.
 */
export type MainHTTPRequestType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type MainHTTPReqType = MainHTTPRequestType;
export type MainHttpRequestType = MainHTTPRequestType;
export type MainHttpReqType = MainHTTPRequestType;

/**
 * All (known) HTTP Request types.
 */
export type AnyHTTPReqType = MainHTTPReqType | 'OPTIONS' | 'TRACE' | 'CONNECT' | 'HEAD';
export type AnyHTTPRequestType = AnyHTTPReqType;
export type AnyHttpReqType = AnyHTTPReqType;
export type AnyHttpRequestType = AnyHTTPReqType;

export type HTTPRequestType = AnyHTTPReqType;
export type HTTPReqType = AnyHTTPReqType;
export type HttpRequestType = AnyHTTPReqType;
export type HttpReqType = AnyHTTPReqType;

/***************************************** TYPE HANDLERS ******************************************/
/**
 *  Returns true if the value is null, undefined, or a string.
 *  @param {StringOrNonexistent|RealAny} val - Value to type check.
 *  @return {boolean} true if val is null, undefined, or a string.
 */
export const isNonexistentOrString = (val: StringOrNonexistent | RealAny): boolean =>
    (typeof val === 'undefined') || (val === null) || (typeof val === 'string');

/**
 * Returns true if the given argument is a number, a string that can be parsed into a number, or
 * a 1-item array containing either aforementioned type.
 * Excludes NaN, which is not considered number-like. Accepts '.123' and '-.123' formatted numbers.
 * @param {RealAny} val - item being tested for number-like nature.
 * @return {boolean} True if item is number-like, otherwise false.
 */
export const isNumberLike = (val: RealAny): boolean => {
    if (typeof val === 'undefined' || val == null) return false;
    if (typeof val === 'number' && !isNaN(val)) return true;
    if (typeof val === 'string') {
        if (val.replace('.', '').replace(/^\-/, '').match(/\D/)) return false;
        // Let '.123' and '-.123' type strings through.
        let cleanVal = val.match(/^\.\d/) ? '0' + val : val;
        cleanVal = val.match(/^\-\.\d/) ? val.replace(/^-./, '-0.') : cleanVal;
        return !isNaN(parseInt(cleanVal, 10));
    }
    if (isArray(val) && val.length === 1) {
        return isNumberLike(val[0]);
    }
    return false;
};

/**
 * @alias isNumberLike
 */
export const isNumLike = isNumberLike;

/**
 * Returns true if given value is an integer (does not include num-like strings).
 * @param {any} val - value to check type of.
 * @return {boolean} true if given value is integer.
 */
export const isInteger = (val: RealAny): boolean => {
    if (isNumberLike(val) && parseInt(val, 10) === parseFloat(val)) return true;
    return false;
};

/**
 * True if val is an integer or a string that can be converted to an integer.
 * @param {any} val - Item to test.
 * @return {boolean} true if tested item is integer-like (or an integer).
 */
export const isIntegerLike = (val: RealAny): boolean => {
    if (!isNumberLike(val)) return false;
    const vStr = val.toString();
    return !matches(/\./g)(val) || vStr.endsWith('.');
};


/**
 * @alias for isInteger
 */
export const isInt = isInteger;

/**
 * Returns true if val is true or false.
 * @param {any} val - Item to test.
 * @return {boolean} true if val is a boolean.
 */
export const isBoolean = (val: any | boolean): boolean => ((val === true) || (val === false));

/**
 * Returns true if the given argument is a moment instance, Date instance, or any string, number,
 * or object that moment is able to parse. Excludes negative numbers and strings that parse to
 * negative numbers, and objects with date-irrelevant keys (e.g. { year: 1123, bear: 'grizzly' })
 * @param {any} val - Item to test for Date-like properties
 * @return {boolean} True if item is date-like.
 */
export const isDateLike = (val: RealAny): boolean => {
    if ((val instanceof moment) || (val instanceof Date)) return true;
    if ((typeof val === 'number' && val < 0) || (typeof val === 'string' && parseInt(val) < 0)) {
        return false;
    }
    if (typeof val === 'object' && Object.keys(val).find(key =>
        !key.match(/((hours?)|(minutes?)|((milli)?seconds?)|(days?)|(dates?)|(months?)|(years?))/))
    ) {
        return false;
    }
    return (moment(val) as any)._isValid;
};

/**
 * True if the given object is an array. Robust and works across multiple JS environments.
 * @param {any} val - Check if this is an array.
 * @return {boolean} True if arg 'value' is an Array,
 */
export const isArray = (val: RealAny): boolean => {
    // Works in fully compliant ES5, ES6, ES7, ES8 ES[+] environments (Node, new browsers, etc.)
    if (Array.isArray) return Array.isArray(val);
    // Works in browsers without Array.isArray.
    return !!((val)
           && val.constructor
           && (val.constructor.name === 'Array'
               // All ES5 and higher environments
               || (Object.getPrototypeOf && Object.getPrototypeOf(val.constructor) === Array)
               // Pre-ES5 web browsers
               || (val.constructor.__proto__ && val.constructor.__proto__.name === 'Array')));
};

/**
 * True if the given value is any variant of true ('true', 'True', 'TRUE', 'T', 't', or true).
 * @param {any} val - Check if this is a variant of true.
 * @return {boolean} true if given value is a variant of true, otherwise false.
 */
export const isTrue = (val: RealAny): boolean =>
    !!(val === 'true' || val === 'True' || val === 'TRUE' || val === true);

/**
 * TODO make the design-time behaviour more reasonable - i.e. proper type hints + Intellisense.
 *
 * Any class wrapped in this decorator becomes a singleton immediately.
 * Throws if attempt is made to wrap a non-class.
 *
 * @example
 *       @singleton
 *       class SomeSingleton {
 *           someString: string;
 *           constructor(someString) {
 *               this.someString = someString
 *           }
 *       }
 *
 *  // It will now only be possible to create one instance of class SomeSingleton.
 */
export const singleton = <T extends ClassConstructor>(constructor: T, ...varargs: any[]) => {
    if (varargs.length > 0) {
        throw new DecoratorError('Can only apply @singleton to classes', 'singleton', constructor);
    }
    const SingletonClass = class SingletonClass extends constructor {
        private static _instance: SingletonClass = null;

        public static new = (...args: any[]) => {
            if (!SingletonClass._instance) {
                SingletonClass._instance = new SingletonClass(...args);
            }
            return SingletonClass._instance;
        }

        constructor(...args: any[]) {
            if (SingletonClass._instance) return SingletonClass._instance;
            super(...args);
            SingletonClass._instance = this;
            return SingletonClass._instance;
        }
    }

    Object.defineProperty(SingletonClass, 'name', { value: constructor.name });
    return SingletonClass as (SingletonInterface<any> & typeof constructor);
};

/**
 * Convert item to a number (if given item is of a type that can be converted as such).
 * If not, throw an error if this is specified.
 * @param {NumLike} numLike - value to cast to a number
 * @param {boolean} throwOnFail (OPTIONAL) - When true, throw if given type isn't a number.
 *                              When false, return an Error if given type isn't a number.
 * @return {number|Error|never} value converted to number, Error, or nothing if it threw error.
 */
export const castToNum = (numLike: NumLike, throwOnFail = true): number | Error | never => {
    if (typeof numLike === 'number') return numLike;
    if (isNumberLike(numLike)) return parseFloat(numLike as string);

    const baseErrMsg = 'castToNum can only accept numbers, #s in string form e.g. "1", or 1-item' +
                       ` arrays containing either type. Invalid value: ${numLike}`;
    if (throwOnFail) {
        throw new Error(baseErrMsg);
    } else {
        if (isVerbose) console.error(`WARNING: ${baseErrMsg}`);
        return new Error(baseErrMsg);
    }
};

/**
 * Convert string representation of a boolean value to a boolean value. Return error if this
 * isn't possible. If something is already a boolean, it simply passes it through.
 * @example converts 'yes' to true, 'f' to false, 'true' to true, true to true, 'n' to false, etc.
 * @param {string|boolean} val - value to convert to string or boolean. Must be 'y', 'n', 't', 'f',
 *                               'yes', no', 'true', or 'false' (case-insensitive); or a boolean.
 * @return {boolean|Error} true if val is y, t, yes, or true. false if it's n, f, no, or false.
 *                         Otherwise throw.
 */
export const boolStringToBool = (val: string | boolean): boolean | never => {
    const lcVal = val.toString().toLowerCase();
    if (lcVal === 'true' || lcVal === 't' || lcVal === 'y' || lcVal === 'yes') {
        return true;
    } else if (lcVal === 'false'|| lcVal === 'f' || lcVal === 'n' || lcVal === 'no') {
        return false;
    }
    throw new TypeError('Must input true, false, t, f, y, n, yes, or no');
};

/**
 * @alias for boolStringToBool
 */
export const toBoolFromBoolString = boolStringToBool;


export { isMultilangTextObj } from './object';
