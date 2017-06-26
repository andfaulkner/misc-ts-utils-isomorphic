import { defaultSupportedLangs } from './internal/lang-constants';

/**
 * Query parameters default values.
 */
const queryParamsDef = typeof window !== 'undefined' ? window.location.search : '';
const locationPath =
    (typeof window !== 'undefined' && typeof window.location !== 'undefined' && window != null)
        ? window.location.pathname
        : '';

/****************************************** QUERY PARAMS ******************************************/
/**
 * Turn query params into JS obj (based on splitting on , and =). Return null if no query params. If
 * no param is given, uses the window query params at time of initial page load are used. Careful:
 * this can be unexpected. To play it safe, explicitly pass window.location.search in every time.
 * @param {string} queryParamsString: source to parse for query params. Default: query (?) in URL.
 * @return {Object} Query params as object.
 * @example parseQueryParams('http://example.com/home?hello=everyone&gr=argh')
 *          // => { hello: 'everyone', gr: 'argh' }
 */
export const parseQueryParams = <T>(queryParamsString: string = queryParamsDef): T => {
    // Ensure there are actually query parameters present. Return null otherwise.
    // Various types of query param strings that actually signify no query params.
    if (queryParamsString.match(/((\?)|(\?\=)|(\?\&)|(\?\=\&)|(\?\&\=))$/)) return null;
    // If no query param symbols are present in a string, it cannot be a query param string.
    if ((queryParamsString.split('=').length === 1
            && (queryParamsString.split('?').length === 1)
            && queryParamsString.split('&').length === 1)) {
        return null;
    }
    // Parse the query params if they exist.
    return queryParamsString.replace(/^\?/, '').split('&').reduce(
        (acc, pair) => Object.assign(acc, { [pair.split('=')[0]]: pair.split('=')[1] }),
    {}) as T;
}

/******************************************** LANGUAGE ********************************************/
/**
 * Get current language from the url. Assumes language is stored in a path, and that a 2-letter
 * format is used.
 * @param {Array<string>} supportedLangs - Detectable languages. Default: ['en', 'fr']
 * @param {string} defaultLang - Default language, if none detected. Default: 'en'
 */
export const getLangFromUrlPathname =
    (urlPath = locationPath, supportedLangs = defaultSupportedLangs, defaultLang: string = 'en') =>
        supportedLangs.find((lang: string) =>
            !!urlPath.match(new RegExp(`/(${lang}[^a-zA-Z0-9])|(/${lang}$)`, 'g')))
        || defaultLang;
