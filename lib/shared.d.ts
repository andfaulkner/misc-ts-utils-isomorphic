/******************************************** IMPORTS *********************************************/
import * as array from './src/array';
export * from './src/array';
export { array };
import * as date from './src/date';
export * from './src/date';
export { date };
import * as decorator from './src/decorator';
export * from './src/decorator';
export { decorator };
import * as Enum from './src/enum';
export * from './src/enum';
export { Enum };
import * as error from './src/error';
export * from './src/error';
export { error };
import * as func from './src/function';
export * from './src/function';
export { func };
import * as json from './src/json';
export * from './src/json';
export { json };
import * as locale from './src/locale';
export * from './src/locale';
export { locale };
import * as number from './src/number';
export * from './src/number';
export { number };
import * as object from './src/object';
export * from './src/object';
export { object };
import * as url from './src/url';
export * from './src/url';
export { url };
import * as search from './src/search';
export * from './src/search';
export { search };
import * as string from './src/string';
export * from './src/string';
export { string };
import * as types from './src/types-iso';
export * from './src/types-iso';
export { types };
import * as dataTypes from './src/types-data-generic';
export * from './src/types-data-generic';
export { dataTypes };
import * as validation from './src/validation';
export * from './src/validation';
export { validation };
import * as stream from './src/stream';
export * from './src/stream';
export { stream };
import * as isNode from 'detect-node';
export { isNode };
/********************************************* EXPORT *********************************************/
/**
 * @export mUtils - module
 */
export declare const mUtils: {
    array: typeof array;
    date: typeof date;
    commonDataTypes: typeof dataTypes;
    dataTypes: typeof dataTypes;
    decorator: typeof decorator;
    decorators: typeof decorator;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof error;
    find: typeof search;
    func: typeof func;
    'function': typeof func;
    functionUtils: typeof func;
    genericDataTypes: typeof dataTypes;
    isNode: any;
    json: typeof json;
    jsonUtils: typeof json;
    locale: typeof locale;
    math: typeof number;
    num: typeof number;
    number: typeof number;
    numeric: typeof number;
    object: typeof object;
    url: typeof url;
    search: typeof search;
    srch: typeof search;
    stacktrace: typeof error;
    str: typeof string;
    string: typeof string;
    type: typeof types;
    types: typeof types;
    typing: typeof types;
    validation: typeof validation;
};
export declare const __: {
    array: typeof array;
    date: typeof date;
    commonDataTypes: typeof dataTypes;
    dataTypes: typeof dataTypes;
    decorator: typeof decorator;
    decorators: typeof decorator;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof error;
    find: typeof search;
    func: typeof func;
    'function': typeof func;
    functionUtils: typeof func;
    genericDataTypes: typeof dataTypes;
    isNode: any;
    json: typeof json;
    jsonUtils: typeof json;
    locale: typeof locale;
    math: typeof number;
    num: typeof number;
    number: typeof number;
    numeric: typeof number;
    object: typeof object;
    url: typeof url;
    search: typeof search;
    srch: typeof search;
    stacktrace: typeof error;
    str: typeof string;
    string: typeof string;
    type: typeof types;
    types: typeof types;
    typing: typeof types;
    validation: typeof validation;
};
export declare const m_: {
    array: typeof array;
    date: typeof date;
    commonDataTypes: typeof dataTypes;
    dataTypes: typeof dataTypes;
    decorator: typeof decorator;
    decorators: typeof decorator;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof error;
    find: typeof search;
    func: typeof func;
    'function': typeof func;
    functionUtils: typeof func;
    genericDataTypes: typeof dataTypes;
    isNode: any;
    json: typeof json;
    jsonUtils: typeof json;
    locale: typeof locale;
    math: typeof number;
    num: typeof number;
    number: typeof number;
    numeric: typeof number;
    object: typeof object;
    url: typeof url;
    search: typeof search;
    srch: typeof search;
    stacktrace: typeof error;
    str: typeof string;
    string: typeof string;
    type: typeof types;
    types: typeof types;
    typing: typeof types;
    validation: typeof validation;
};
export declare const madUtils: {
    array: typeof array;
    date: typeof date;
    commonDataTypes: typeof dataTypes;
    dataTypes: typeof dataTypes;
    decorator: typeof decorator;
    decorators: typeof decorator;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof error;
    find: typeof search;
    func: typeof func;
    'function': typeof func;
    functionUtils: typeof func;
    genericDataTypes: typeof dataTypes;
    isNode: any;
    json: typeof json;
    jsonUtils: typeof json;
    locale: typeof locale;
    math: typeof number;
    num: typeof number;
    number: typeof number;
    numeric: typeof number;
    object: typeof object;
    url: typeof url;
    search: typeof search;
    srch: typeof search;
    stacktrace: typeof error;
    str: typeof string;
    string: typeof string;
    type: typeof types;
    types: typeof types;
    typing: typeof types;
    validation: typeof validation;
};
/************************************ EXPORT COMMON FUNCTIONS *************************************/
export declare const commonShared: {
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
    centeredPad: (strToPad?: string, outWidth?: number, padChar?: string) => string;
    isNonexistentOrString: (val: any) => val is string;
    isNumberLike: (val: any, allowArrayWith1Num?: boolean) => boolean;
    isBoolean: (val: any) => val is boolean;
    isDateLike: (val: any) => boolean;
    isTrue: (val: any, include1CharVal?: boolean) => val is true;
    castToNum: (numLike: types.NumLike, throwOnFail?: boolean) => number | Error;
    CharInputStream: typeof stream.CharInputStream;
    isNode: any;
};
export { commonShared as commonIso };
