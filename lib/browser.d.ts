import { array, date, decorator, Enum, error, json, locale, number, object, query, search, string, types as isoTypes } from './shared';
export { array, date, decorator, Enum, error, json, locale, number, object, query, search, string };
import { StackUtils } from './src/error';
export { StackUtils };
export * from './src/array';
export * from './src/date';
export * from './src/decorator';
export * from './src/enum';
export * from './src/error';
export * from './src/json';
export * from './src/locale';
export * from './src/number';
export * from './src/object';
export * from './src/query';
export * from './src/search';
export * from './src/string';
import { isNode } from 'detect-node';
export { isNode };
import * as dom from './src/browser/dom';
export * from './src/browser/dom';
export { dom };
import * as event from './src/browser/event';
export * from './src/browser/event';
export { event };
import * as localStore from './src/browser/local-store';
export * from './src/browser/local-store';
export { localStore };
import * as browserTypes from './src/browser/types-browser';
export * from './src/browser/types-browser';
export * from './src/types-iso';
export declare const types: {} & typeof isoTypes & typeof browserTypes;
/********************************************* EXPORT *********************************************/
/**
 * @export mUtils - module (namespace)
 */
export declare const mUtils: {
    array: typeof array;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    dom: typeof dom;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof error;
    event: typeof event;
    isNode: any;
    json: typeof json;
    locale: typeof locale;
    localStore: typeof localStore;
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
    type: {} & typeof isoTypes & typeof browserTypes;
    types: {} & typeof isoTypes & typeof browserTypes;
    typing: {} & typeof isoTypes & typeof browserTypes;
};
export declare const __: {
    array: typeof array;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    dom: typeof dom;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof error;
    event: typeof event;
    isNode: any;
    json: typeof json;
    locale: typeof locale;
    localStore: typeof localStore;
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
    type: {} & typeof isoTypes & typeof browserTypes;
    types: {} & typeof isoTypes & typeof browserTypes;
    typing: {} & typeof isoTypes & typeof browserTypes;
};
export declare const m_: {
    array: typeof array;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    dom: typeof dom;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof error;
    event: typeof event;
    isNode: any;
    json: typeof json;
    locale: typeof locale;
    localStore: typeof localStore;
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
    type: {} & typeof isoTypes & typeof browserTypes;
    types: {} & typeof isoTypes & typeof browserTypes;
    typing: {} & typeof isoTypes & typeof browserTypes;
};
export declare const madUtils: {
    array: typeof array;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    dom: typeof dom;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof error;
    event: typeof event;
    isNode: any;
    json: typeof json;
    locale: typeof locale;
    localStore: typeof localStore;
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
    type: {} & typeof isoTypes & typeof browserTypes;
    types: {} & typeof isoTypes & typeof browserTypes;
    typing: {} & typeof isoTypes & typeof browserTypes;
};
