import { array, date, decorator, Enum, error, func, json, locale, number, object, url, search, string, types as isoTypes, validation, dataTypes, stream } from './shared';
export { array, date, decorator, Enum, error, func, json, locale, number, object, url, search, string, validation, stream };
export * from './src/array';
export * from './src/date';
export * from './src/decorator';
export * from './src/enum';
export * from './src/error';
export * from './src/function';
export * from './src/json';
export * from './src/locale';
export * from './src/number';
export * from './src/object';
export * from './src/url';
export * from './src/search';
export * from './src/stream';
export * from './src/string';
export * from './src/validation';
import { isNode } from 'detect-node';
export { isNode };
import * as dom from './src/browser/dom';
export * from './src/browser/dom';
export { dom };
import * as event from './src/browser/event';
export * from './src/browser/event';
export { event };
import * as location from './src/browser/location';
export * from './src/browser/location';
export { location };
import * as localStore from './src/browser/local-store';
export * from './src/browser/local-store';
export { localStore };
export { localStore as localStorage };
export { localStore as localStoreUtils };
export { localStore as localStorageUtils };
import * as browserTypes from './src/browser/types-browser';
export * from './src/browser/types-browser';
export * from './src/types-iso';
export * from './src/types-data-generic';
export declare const types: typeof isoTypes & typeof browserTypes & typeof dataTypes;
/********************************************* EXPORT *********************************************/
/**
 * @export mUtils - module (namespace)
 */
export declare const mUtils: {
    array: typeof array;
    commonDataTypes: typeof dataTypes;
    dataTypes: typeof dataTypes;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    dom: typeof dom;
    enum: typeof Enum;
    Enum: typeof Enum;
    err: typeof error;
    error: typeof error;
    event: typeof event;
    func: typeof func;
    'function': typeof func;
    functionUtils: typeof func;
    genericDataTypes: typeof dataTypes;
    isNode: any;
    json: typeof json;
    jsonUtils: typeof json;
    locale: typeof locale;
    localStore: typeof localStore;
    localStoreUtils: typeof localStore;
    localStorage: typeof localStore;
    localStorageUtils: typeof localStore;
    location: typeof location;
    number: typeof number;
    object: typeof object;
    url: typeof url;
    search: typeof search;
    stacktrace: typeof error;
    stream: typeof stream;
    str: typeof string;
    string: typeof string;
    type: typeof isoTypes & typeof browserTypes & typeof dataTypes;
    types: typeof isoTypes & typeof browserTypes & typeof dataTypes;
    typing: typeof isoTypes & typeof browserTypes & typeof dataTypes;
    validation: typeof validation;
};
export declare const __: {
    array: typeof array;
    commonDataTypes: typeof dataTypes;
    dataTypes: typeof dataTypes;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    dom: typeof dom;
    enum: typeof Enum;
    Enum: typeof Enum;
    err: typeof error;
    error: typeof error;
    event: typeof event;
    func: typeof func;
    'function': typeof func;
    functionUtils: typeof func;
    genericDataTypes: typeof dataTypes;
    isNode: any;
    json: typeof json;
    jsonUtils: typeof json;
    locale: typeof locale;
    localStore: typeof localStore;
    localStoreUtils: typeof localStore;
    localStorage: typeof localStore;
    localStorageUtils: typeof localStore;
    location: typeof location;
    number: typeof number;
    object: typeof object;
    url: typeof url;
    search: typeof search;
    stacktrace: typeof error;
    stream: typeof stream;
    str: typeof string;
    string: typeof string;
    type: typeof isoTypes & typeof browserTypes & typeof dataTypes;
    types: typeof isoTypes & typeof browserTypes & typeof dataTypes;
    typing: typeof isoTypes & typeof browserTypes & typeof dataTypes;
    validation: typeof validation;
};
export declare const m_: {
    array: typeof array;
    commonDataTypes: typeof dataTypes;
    dataTypes: typeof dataTypes;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    dom: typeof dom;
    enum: typeof Enum;
    Enum: typeof Enum;
    err: typeof error;
    error: typeof error;
    event: typeof event;
    func: typeof func;
    'function': typeof func;
    functionUtils: typeof func;
    genericDataTypes: typeof dataTypes;
    isNode: any;
    json: typeof json;
    jsonUtils: typeof json;
    locale: typeof locale;
    localStore: typeof localStore;
    localStoreUtils: typeof localStore;
    localStorage: typeof localStore;
    localStorageUtils: typeof localStore;
    location: typeof location;
    number: typeof number;
    object: typeof object;
    url: typeof url;
    search: typeof search;
    stacktrace: typeof error;
    stream: typeof stream;
    str: typeof string;
    string: typeof string;
    type: typeof isoTypes & typeof browserTypes & typeof dataTypes;
    types: typeof isoTypes & typeof browserTypes & typeof dataTypes;
    typing: typeof isoTypes & typeof browserTypes & typeof dataTypes;
    validation: typeof validation;
};
export declare const madUtils: {
    array: typeof array;
    commonDataTypes: typeof dataTypes;
    dataTypes: typeof dataTypes;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    dom: typeof dom;
    enum: typeof Enum;
    Enum: typeof Enum;
    err: typeof error;
    error: typeof error;
    event: typeof event;
    func: typeof func;
    'function': typeof func;
    functionUtils: typeof func;
    genericDataTypes: typeof dataTypes;
    isNode: any;
    json: typeof json;
    jsonUtils: typeof json;
    locale: typeof locale;
    localStore: typeof localStore;
    localStoreUtils: typeof localStore;
    localStorage: typeof localStore;
    localStorageUtils: typeof localStore;
    location: typeof location;
    number: typeof number;
    object: typeof object;
    url: typeof url;
    search: typeof search;
    stacktrace: typeof error;
    stream: typeof stream;
    str: typeof string;
    string: typeof string;
    type: typeof isoTypes & typeof browserTypes & typeof dataTypes;
    types: typeof isoTypes & typeof browserTypes & typeof dataTypes;
    typing: typeof isoTypes & typeof browserTypes & typeof dataTypes;
    validation: typeof validation;
};
/**
 * Most common functions from mad-utils used in browser.
 */
export declare const common: {
    first: typeof array.first;
    last: typeof array.last;
    first2: typeof array.first2;
    last2: typeof array.last2;
    without: {
        last: typeof array.withoutLast;
        last2: typeof array.withoutLast2;
        last3: typeof array.withoutLast3;
        lastN: typeof array.withoutLastN;
        first: typeof array.withoutFirst;
        first2: typeof array.withoutFirst2;
        first3: typeof array.withoutFirst3;
        firstN: typeof array.withoutFirstN;
    };
    withoutFirst: typeof array.withoutFirst;
    withoutLast: typeof array.withoutLast;
    withoutFirst2: typeof array.withoutFirst2;
    withoutLast2: typeof array.withoutLast2;
    removeMatches: typeof array.removeMatches;
    rmAllFalsy: (arr: any[]) => any[];
    isArray: (val: any) => val is any[];
    isLeapYear: typeof date.isLeapYear;
    now: (timeFormat?: string) => string;
    condSwitch: typeof func.condSwitch;
    uuid: number.UUIDNamespace;
    merge: typeof object.merge;
    hasKey: <T extends Object>(obj: T, matchKey: string) => boolean;
    eachPair: <T extends Object>(func: (val: T[keyof T], key?: keyof T) => any) => (obj: T) => T;
    assignFrozenClone: <T>(...args: {}[]) => Readonly<T>;
    deepFreeze: <T>(obj: T) => Readonly<T>;
    parseQueryParams: <T>(queryParamsStr?: string) => T;
    getLangFromUrlPathname: (urlPath?: string, supportedLangs?: string[], defaultLang?: string) => string;
    urlMinusQueryParams: (url?: string) => string;
    toSnakeCase: (str: string, consecUppercaseToLowercase?: boolean) => string;
    cap1LowerRest: (str: string) => string;
    capitalize: (str: string) => string;
    replaceAll: (text: string, find: string | RegExp, replace: string) => string;
    removeWhitespace: (str: string) => string;
    chomp: (str: string, charsToChomp?: string) => string;
    matchesIgnoreCase: (matchOn: string) => (val: string) => boolean;
    removeMatchingText: (str: string, matcherToRm: string | RegExp) => string;
    repeatChars: (repStr: string, len: number) => string;
    endsWithExt: (inode: string, ext: string) => boolean;
    leftPad: (strToPad?: string, outWidth?: number, padChar?: string) => string;
    rightPad: (strToPad?: string, outWidth?: number, padChar?: string) => string;
    centerPad: (strToPad?: string, outWidth?: number, padChar?: string) => string;
    isNonexistentOrString: (val: any) => val is string;
    isNumberLike: (val: any, allowArrayWith1Num?: boolean) => boolean;
    isBoolean: (val: any) => val is boolean;
    isDateLike: (val: any) => boolean;
    isTrue: (val: any, include1CharVal?: boolean) => val is true;
    castToNum: (numLike: isoTypes.NumLike, throwOnFail?: boolean) => number | Error;
    CharInputStream: typeof stream.CharInputStream;
    isNode: any;
} & {
    parseUserAgent: typeof dom.parseUserAgent;
    getFromStorage: typeof localStore.getFromStorage;
};
