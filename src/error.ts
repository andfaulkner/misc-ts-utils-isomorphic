import {ClassConstructor, SingletonInterface, singleton} from './types-iso';

// Regex & lib filtering utils
const stackNoiseLibsRegex = /\/node_modules(?=\/).*(\/react\/|\/mocha\/|\/ts\-node\/)/g;
const nodeStackNoiseRegex = / \(timers\.js:[0-9]/g;
const stackFilterNode = new RegExp('[lL]oad \\(module\\.js:[0-9]', '');
const alphaNumSet = `[a-zA-Z0-9_]+`;

const defLibsToExclude = ['express', 'body-parser', 'cookie-parser'];

/**
 * Remove unneeded statements from given stack trace: calls to Node core & common
 * third-party libs. Replaces error statement with an info label. Optionally IDs
 * the function requesting the stack.
 * @param {string} stack Stacktrace in string form
 * @param {string} srcFn Name of source function stacktrace originated from
 */
export function scrubStackTrace(stack: string, srcFn?: string): string {
    // Create label IDing the cleaned stack, including (optionally) IDing the requesting function.
    const stackLabel = `  Stack (minus vendor & core) up to ${srcFn ? srcFn + ' ' : ''}call:`;
    // Replace 'Error' statement with stack label.
    return (
        stack
            .split(/^Error(?=\n)/)
            .join(stackLabel)
            // Filter useless stack info
            .split(/\n    at /g)
            // Exclude stacktrace references to mocha, react, and ts-node.
            .filter(line => !line.match(stackNoiseLibsRegex))
            // Exclude stacktrace references to NodeJS' internal timers.js module.
            .filter(line => !line.match(nodeStackNoiseRegex))
            .join('\n   |-> ')
    );
}

/**
 * Remove all stack trace items containing references to any of the given libraries.
 * Must be passed an actual stack for this to work.
 * @param {string} stack The stacktrace itself
 * @param {Array<string>} libsToRm Exclude all stacktrace items coming from any of these libs
 * @return {string} Stacktrace with all items that reference any lib in libsToRm removed
 */
export function removeFromStack(stack: string, libsToRm: Array<string> = defLibsToExclude): string {
    // Partial regex for excluding all libraries in libsToRm. Inject into full regex.
    const filterLibStr = libsToRm.reduce((acc, lib, idx) => {
        const cleanLibName = lib.replace('-', '-');
        if (idx !== libsToRm.length - 1) {
            acc += `(${cleanLibName})|`;
        } else {
            acc += `(${cleanLibName}))`;
        }
        return acc;
    }, `(`);

    // Filtering regexes
    const stackFilterLibs = new RegExp(`node_modules\/${filterLibStr}\/lib`, '');

    // Filter the stack, rejoin into string, & return result
    return stack
        .split('\n')
        .filter(stackEl => !stackFilterLibs.exec(stackEl))
        .filter(stackEl => !stackFilterNode.exec(stackEl))
        .join('\n');
}

/**
 * Split the stack trace, get the first item (aka the most recent item)
 */
export function getFirstStackItem(stack: string): string;
export function getFirstStackItem<T extends Error>(error: T): string;
export function getFirstStackItem<T extends Error>(stackOrError: string | T): string {
    return typeof stackOrError === 'string'
        ? stackOrError.split('\n    at ')[0]
        : stackOrError.stack.split('\n    at ')[0];
}

/**
 * Split the stack trace, get the 2nd item (aka the 2nd most recent item).
 */
export function getSecondStackItem(stack: string): string;
export function getSecondStackItem<T extends Error>(error: T): string;
export function getSecondStackItem<T extends Error>(stackOrError: string | T): string {
    return typeof stackOrError === 'string'
        ? stackOrError.split('\n    at ')[1]
        : stackOrError.stack.split('\n    at ')[1];
}

/**
 * Split the stack trace, get the 3rd item (aka the 3rd most recent item).
 */
export function getThirdStackItem(stack: string): string;
export function getThirdStackItem<T extends Error>(error: T): string;
export function getThirdStackItem<T extends Error>(stackOrError: string | T): string {
    return typeof stackOrError === 'string'
        ? stackOrError.split('\n    at ')[2]
        : stackOrError.stack.split('\n    at ')[2];
}
