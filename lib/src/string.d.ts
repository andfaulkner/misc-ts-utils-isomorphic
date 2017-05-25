/******************************************** STRINGS *********************************************/
/**
 * Capitalize the first letter of a string, and convert other letters in the string to lowercase.
 */
export declare const cap1LowerRest: (str: string) => string;
/**
 * Capitalize the first letter of a string.
 */
export declare const capitalize: (str: string) => string;
/**
 * Replace all matching strings in a text segment with a given replacement string.
 * Can also match against a regex.
 * The main benefit is the fact that *ALL* matching strings get replaced.
 *
 * @param {string} text - string to search and replace in.
 * @param {string|RegExp} find - string or RegExp to match against
 * @param {string} replace - replacement text
 *
 * @return {string} text, with replacements made.
 */
export declare const replaceAll: (text: string, find: string | RegExp, replace: string) => string;
/**
 * Inversion of String.prototype.match, for usage as a predicate.
 * @param {string} matchAgainst - string to match against.
 * @return {boolean} true if a match is found.
 *
 * @example USAGE ::  ['gr', hello'].find(matches('hello')); // => true
 */
export declare const matches: (matchAgainst: string) => (val: string) => boolean;
/**
 * Escape a string for use as a regex. Allows repeat matching on a single string.
 * TODO test this.
 */
export declare const escapeRegExp: (regexStr: string) => string;
/**
 * Inversion of String.prototype.match, for usage as a predicate, where case is ignored.
 * @param {string} matchAgainst - string to match against.
 * @return {boolean} true if a match is found.
 *
 * @example USAGE ::  ['gr', 'HeLLo'].find(matchesIgnoreCase('hello')); // => true
 */
export declare const matchesIgnoreCase: (matchOn: string) => (val: string) => boolean;
/**
 * String that creates a blank line without using \n.
 */
export declare const newlineStr: string;
/**
 * Remove all spaces in the given string.
 *
 * @param {string} str - String to remove spaces from
 * @return {string} input string with spaces removed
 *
 * @example elminateWhitespace(' my test  string   ');
 *          // => myteststring
 */
export declare const eliminateWhitespace: (str: string) => string;
export { stringToEnumVal } from './enum';
export { splitLines } from './array';
