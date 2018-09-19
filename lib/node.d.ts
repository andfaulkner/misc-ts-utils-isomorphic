import { Moment } from 'moment';
import { array, date, decorator, Enum, func, locale, number, object, url, search, string, types as isoTypes, validation, dataTypes, stream } from './shared';
export { array, date, decorator, Enum, func, locale, number, object, url, search, string, validation, stream, };
export * from './src/array';
export * from './src/date';
export * from './src/decorator';
export * from './src/enum';
export * from './src/error';
export * from './src/function';
export * from './src/locale';
export * from './src/number';
export * from './src/node/node-error';
export * from './src/object';
export * from './src/url';
export * from './src/search';
export * from './src/stream';
export * from './src/string';
export * from './src/validation';
import { isNode } from 'detect-node';
export { isNode };
import * as middleware from './src/node/middleware';
export * from './src/node/middleware';
export { middleware };
export { middleware as middlewares };
export { middleware as mware };
export { middleware as MW };
import * as nodeError from './src/node/node-error';
export * from './src/node/node-error';
export { nodeError };
import * as errorShared from './shared';
export { error as errorShared } from './shared';
declare const err: typeof errorShared & typeof nodeError;
export { err };
export { err as error };
import * as test from './src/node/test';
export * from './src/node/test';
export { test };
import * as file from './src/node/file';
export * from './src/node/file';
export { file };
import * as nodeTypes from './src/node/types-node';
export declare const types: typeof isoTypes & typeof dataTypes;
export * from './src/node/types-node';
export * from './src/types-iso';
export * from './src/types-data-generic';
import * as expressRouting from './src/node/express-routing';
export * from './src/node/express-routing';
export { expressRouting };
/********************************************* EXPORT *********************************************/
/**
 * @export mUtils - module
 */
export declare const mUtils: {
    array: typeof array;
    commonDataTypes: typeof dataTypes;
    dataTypes: typeof dataTypes;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof errorShared & typeof nodeError;
    err: typeof errorShared & typeof nodeError;
    errorShared: typeof errorShared;
    expressRouting: typeof expressRouting;
    file: typeof file;
    func: typeof func;
    function: typeof func;
    functionUtils: typeof func;
    genericDataTypes: typeof dataTypes;
    isNode: any;
    locale: typeof locale;
    middleware: typeof middleware;
    nodeErr: typeof nodeError;
    nodeError: typeof nodeError;
    number: typeof number;
    object: typeof object;
    url: typeof url;
    search: typeof search;
    stacktrace: typeof errorShared & typeof nodeError;
    stream: typeof stream;
    str: typeof string;
    string: typeof string;
    test: typeof test;
    type: typeof isoTypes & typeof dataTypes;
    types: typeof isoTypes & typeof dataTypes;
    typing: typeof isoTypes & typeof dataTypes;
    validation: typeof validation;
};
export declare const __: {
    array: typeof array;
    commonDataTypes: typeof dataTypes;
    dataTypes: typeof dataTypes;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof errorShared & typeof nodeError;
    err: typeof errorShared & typeof nodeError;
    errorShared: typeof errorShared;
    expressRouting: typeof expressRouting;
    file: typeof file;
    func: typeof func;
    function: typeof func;
    functionUtils: typeof func;
    genericDataTypes: typeof dataTypes;
    isNode: any;
    locale: typeof locale;
    middleware: typeof middleware;
    nodeErr: typeof nodeError;
    nodeError: typeof nodeError;
    number: typeof number;
    object: typeof object;
    url: typeof url;
    search: typeof search;
    stacktrace: typeof errorShared & typeof nodeError;
    stream: typeof stream;
    str: typeof string;
    string: typeof string;
    test: typeof test;
    type: typeof isoTypes & typeof dataTypes;
    types: typeof isoTypes & typeof dataTypes;
    typing: typeof isoTypes & typeof dataTypes;
    validation: typeof validation;
};
export declare const m_: {
    array: typeof array;
    commonDataTypes: typeof dataTypes;
    dataTypes: typeof dataTypes;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof errorShared & typeof nodeError;
    err: typeof errorShared & typeof nodeError;
    errorShared: typeof errorShared;
    expressRouting: typeof expressRouting;
    file: typeof file;
    func: typeof func;
    function: typeof func;
    functionUtils: typeof func;
    genericDataTypes: typeof dataTypes;
    isNode: any;
    locale: typeof locale;
    middleware: typeof middleware;
    nodeErr: typeof nodeError;
    nodeError: typeof nodeError;
    number: typeof number;
    object: typeof object;
    url: typeof url;
    search: typeof search;
    stacktrace: typeof errorShared & typeof nodeError;
    stream: typeof stream;
    str: typeof string;
    string: typeof string;
    test: typeof test;
    type: typeof isoTypes & typeof dataTypes;
    types: typeof isoTypes & typeof dataTypes;
    typing: typeof isoTypes & typeof dataTypes;
    validation: typeof validation;
};
export declare const madUtils: {
    array: typeof array;
    commonDataTypes: typeof dataTypes;
    dataTypes: typeof dataTypes;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof errorShared & typeof nodeError;
    err: typeof errorShared & typeof nodeError;
    errorShared: typeof errorShared;
    expressRouting: typeof expressRouting;
    file: typeof file;
    func: typeof func;
    function: typeof func;
    functionUtils: typeof func;
    genericDataTypes: typeof dataTypes;
    isNode: any;
    locale: typeof locale;
    middleware: typeof middleware;
    nodeErr: typeof nodeError;
    nodeError: typeof nodeError;
    number: typeof number;
    object: typeof object;
    url: typeof url;
    search: typeof search;
    stacktrace: typeof errorShared & typeof nodeError;
    stream: typeof stream;
    str: typeof string;
    string: typeof string;
    test: typeof test;
    type: typeof isoTypes & typeof dataTypes;
    types: typeof isoTypes & typeof dataTypes;
    typing: typeof isoTypes & typeof dataTypes;
    validation: typeof validation;
};
import * as connect from 'connect';
/**
 * Most common functions from mad-utils used in Node
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
    rmAllFalsy: <T = any>(arr: T[], falsyType?: array._FalsyType) => T[];
    isArray: <T = any>(val: any) => val is T[];
    isLeapYear: typeof date.isLeapYear;
    now: (timeFormat?: string) => string;
    condSwitch: typeof func.condSwitch;
    uuid: number.UUIDNamespace;
    hasKey: <T extends Object>(obj: T, matchKey: string) => boolean;
    eachPair: <T extends Object>(func: (val: T[Extract<keyof T, string>], key?: Extract<keyof T, string>) => any) => (obj: T) => T;
    assignFrozenClone: <T>(...args: {}[]) => Readonly<T>;
    /************************************ COMMON FUNCTION EXPORTS *************************************/
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
    isVoidOrString: (val: any) => val is string;
    isNumberLike: <T extends string | number | String | Number = number>(val: any) => val is T;
    isBoolean: <T extends boolean | Boolean = boolean>(val: any) => val is T;
    isDateLike: <T extends string | boolean | Object | Moment>(val: any) => val is T;
    isTrue: <T extends string | true | String = true>(val: any, include1CharVal?: boolean) => val is T;
    CharInputStream: typeof stream.CharInputStream;
    isNode: any;
} & {
    isDir: (fileOrDirPath: string) => boolean;
    pathFromRoot: (filePathFromRoot?: string) => string;
    replaceInFile: typeof file.replaceInFile;
    getJsFilesInDir: (dir: string, excludeMin?: boolean) => string[];
    isFileInDir: (dir: string, filename: string) => boolean;
    useMiddlewareInProdOnly: <T>(opts?: T) => (middleware: nodeTypes.MWare<T>) => connect.Server;
    composeExpressMiddlewares: <T extends nodeTypes.ExpressApp>(app: T, ...midwareApplicators: nodeTypes.ApplyMiddlewareFn[]) => T;
    expectEmptyObject: (testValue: any) => void;
    expectFuncExists: (func: Function, name?: string, extraMsg?: string) => void;
    expectNonEmptyObjectExists: (nonEmptyObj: any, name: string, extraMsg?: string) => void;
};
