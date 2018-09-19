/************************************** THIRD-PARTY MODULES ***************************************/
import * as moment from 'moment';
import { StrOrNum } from './types-iso';
/********************************************* EXPORT *********************************************/
export declare type NumRange0To6 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | '0' | '1' | '2' | '3' | '4' | '5' | '6';
export declare const defaultTimestampFormat = "YYYY/MM/DD : HH:mm:ss";
/**
 * True if the given year is a leap year
 * Throw if given value cannot be cast to an integer
 *
 * @param {NumLike} year Determine if the given number is a leap year
 * @return {boolean|number} True if a leap year; false if not; throw if invalid year given
 */
export declare function isLeapYear(year: StrOrNum): boolean | never;
/**
 * Get the current date, formatted for display in the stream of Express logs to
 * the CLI
 *
 * Example: Return current date + time as default-formatted timestamp:
                now(); // => 2017/05/28 : 02:51:39
 *
 * Example: Return current date + time as timestamp without day or second:
 *              now(`YYYY/MM hh:mm`); // => 2017/02 12:53
 *
 * @param {string} timeFormat momentJS timestamp format [OPTIONAL]
 *                            e.g. `MM/DD::hh:mm:ss`
 *                            See https://momentjs.com/docs/#/parsing/string-format/
 * @return {string} Current date and time, formatted for use in a timestamp
 */
export declare const now: (timeFormat?: string) => string;
/**
 ************************ WARNING: SOMEWHAT EXPERIMENTAL ***********************
 ************************ CONSIDER THIS FUNCTION 'ALPHA' ***********************
 *
 * Convert [date] strings containing month text to moment
 * Returns moment objects as-is
 * Assumes strings only contain 4-digit year
 *
 * Uses currently set locale in moment unless a new [locale] string is provided
 *
 * If no month found:
 * - If [opts.fallbackFormat] is given, it tries to use it to format the string
 * - If no [opts.fallbackFormat] given, it tries to parse string in ISO format
 * - If false is given as [opts.fallbackFormat], it returns null
 *
 * Example strings this can handle:
 *     25 juil 2018
 *     25 juil. 2018
 *     25 juillet 1980
 *     25 février 2018
 *     25 Février 2018
 *     25 june 2018
 *     25 June 2018
 *     25 October 2018
 *     25 oct 2018
 *     25 oct. 2018
 *     June 30, 2018
 *     Février 25, 2018
 *     2018 January 13
 *     2018, 31 Dec
 *     2018-10-15
 *     15-10-2018  <- if opts.fallbackFormat = 'DD-MM-YYYY'
 */
export declare const dateStringWithMonthTextToMoment: (date: string | moment.Moment, opts?: {
    locale?: string;
    fallbackFormat?: string | boolean;
}) => any;
