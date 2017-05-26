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
import { StackUtils } from './src/error';
export { StackUtils };
export { error };
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
import * as query from './src/query';
export * from './src/query';
export { query };
import * as search from './src/search';
export * from './src/search';
export { search };
import * as string from './src/string';
export * from './src/string';
export { string };
import * as types from './src/types-iso';
export * from './src/types-iso';
export { types };
/********************************************* EXPORT *********************************************/
/**
 * @export mUtils - module
 */
export declare const mUtils: {
    array: typeof array;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof error;
    isNode: any;
    json: typeof json;
    locale: typeof locale;
    number: typeof number;
    object: typeof object;
    query: typeof query;
    search: typeof search;
    stacktrace: {
        removeFromStack: (stack: string, libsToRm?: string[]) => string;
        getFirstStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
        getSecondStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
        getThirdStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
    };
    StackUtils: {
        removeFromStack: (stack: string, libsToRm?: string[]) => string;
        getFirstStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
        getSecondStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
        getThirdStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
    };
    str: typeof string;
    string: typeof string;
    type: typeof types;
    types: typeof types;
    typing: typeof types;
};
export declare const __: {
    array: typeof array;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof error;
    isNode: any;
    json: typeof json;
    locale: typeof locale;
    number: typeof number;
    object: typeof object;
    query: typeof query;
    search: typeof search;
    stacktrace: {
        removeFromStack: (stack: string, libsToRm?: string[]) => string;
        getFirstStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
        getSecondStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
        getThirdStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
    };
    StackUtils: {
        removeFromStack: (stack: string, libsToRm?: string[]) => string;
        getFirstStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
        getSecondStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
        getThirdStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
    };
    str: typeof string;
    string: typeof string;
    type: typeof types;
    types: typeof types;
    typing: typeof types;
};
export declare const m_: {
    array: typeof array;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof error;
    isNode: any;
    json: typeof json;
    locale: typeof locale;
    number: typeof number;
    object: typeof object;
    query: typeof query;
    search: typeof search;
    stacktrace: {
        removeFromStack: (stack: string, libsToRm?: string[]) => string;
        getFirstStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
        getSecondStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
        getThirdStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
    };
    StackUtils: {
        removeFromStack: (stack: string, libsToRm?: string[]) => string;
        getFirstStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
        getSecondStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
        getThirdStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
    };
    str: typeof string;
    string: typeof string;
    type: typeof types;
    types: typeof types;
    typing: typeof types;
};
export declare const madUtils: {
    array: typeof array;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof error;
    isNode: any;
    json: typeof json;
    locale: typeof locale;
    number: typeof number;
    object: typeof object;
    query: typeof query;
    search: typeof search;
    stacktrace: {
        removeFromStack: (stack: string, libsToRm?: string[]) => string;
        getFirstStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
        getSecondStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
        getThirdStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
    };
    StackUtils: {
        removeFromStack: (stack: string, libsToRm?: string[]) => string;
        getFirstStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
        getSecondStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
        getThirdStackItem: {
            (stack: string): any;
            <T extends Error>(error: T): any;
        };
    };
    str: typeof string;
    string: typeof string;
    type: typeof types;
    types: typeof types;
    typing: typeof types;
};
