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
import * as middleware from './src/node/middleware';
export * from './src/node/middleware';
export { middleware };
export { middleware as middlewares };
export { middleware as mware };
export { middleware as MW };
import * as test from './src/node/test';
export * from './src/node/test';
export { test };
import * as file from './src/node/file';
export * from './src/node/file';
export { file };
import * as nodeTypes from './src/node/types-node';
export declare const types: typeof isoTypes & typeof nodeTypes;
export * from './src/node/types-node';
export * from './src/types-iso';
import * as webpack from './src/node/webpack';
export * from './src/node/webpack';
export { webpack };
export { webpack as webpackUtils };
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
    file: typeof file;
    isNode: any;
    json: typeof json;
    locale: typeof locale;
    middleware: typeof middleware;
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
    test: typeof test;
    type: typeof isoTypes & typeof nodeTypes;
    types: typeof isoTypes & typeof nodeTypes;
    typing: typeof isoTypes & typeof nodeTypes;
    webpack: typeof webpack;
    webpackUtils: typeof webpack;
};
export declare const __: {
    array: typeof array;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof error;
    file: typeof file;
    isNode: any;
    json: typeof json;
    locale: typeof locale;
    middleware: typeof middleware;
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
    test: typeof test;
    type: typeof isoTypes & typeof nodeTypes;
    types: typeof isoTypes & typeof nodeTypes;
    typing: typeof isoTypes & typeof nodeTypes;
    webpack: typeof webpack;
    webpackUtils: typeof webpack;
};
export declare const m_: {
    array: typeof array;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof error;
    file: typeof file;
    isNode: any;
    json: typeof json;
    locale: typeof locale;
    middleware: typeof middleware;
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
    test: typeof test;
    type: typeof isoTypes & typeof nodeTypes;
    types: typeof isoTypes & typeof nodeTypes;
    typing: typeof isoTypes & typeof nodeTypes;
    webpack: typeof webpack;
    webpackUtils: typeof webpack;
};
export declare const madUtils: {
    array: typeof array;
    date: typeof date;
    decorator: typeof decorator;
    decorators: typeof decorator;
    enum: typeof Enum;
    Enum: typeof Enum;
    error: typeof error;
    file: typeof file;
    isNode: any;
    json: typeof json;
    locale: typeof locale;
    middleware: typeof middleware;
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
    test: typeof test;
    type: typeof isoTypes & typeof nodeTypes;
    types: typeof isoTypes & typeof nodeTypes;
    typing: typeof isoTypes & typeof nodeTypes;
    webpack: typeof webpack;
    webpackUtils: typeof webpack;
};
