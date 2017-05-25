/******************************************** LOGGING *********************************************/
import { logFactory, logMarkers } from 'mad-logs';
const log = logFactory()(`general-utils.ts`, logMarkers.checkmate);


/******************************************** BROWSER *********************************************/
/**
 * If given a "store" object, try to get item at given key from it. Next try to get it from browser
 * localStorage or sessionStorage. Finally, try key in 'this' binding. Return null if all fail.
 */
export const getFromStorage = (key: string, store?: Object): string | null => {
    // Use value from store param, if it was provided.
    if (store && store[key]) {
        return store[key];
    }

    // Try to grab value off the window storage objects
    try {
        if (window && window.sessionStorage && window.localStorage) {
            return window.sessionStorage.getItem(key) || window.localStorage.getItem(key);
        }
    } catch(e) {
        log.error('getFromStorage: not in a browser environment, cannot use window object');
    }

    // Try to grab the value from 'this' binding.
    if (this && this[key]) {
        return this[key];
    }
};

/**
 * If the user is authenticated, there will be a key in localStorage.
 * Note that this should NEVER be used to determine permissions - this
 * is about what to display in the UI, and nothing else. The server should
 * determine permissions - anything less is begging to be hacked.
 *
 * @param {string} tknKey - Key at which the auth token can be found. Defaults to 'accessToken'.
 * @return {boolean} true if token is found at given key in browser local storage
 */
export const isAuthenticated = (tknKey = 'accessToken'): boolean => !!localStorage.getItem(tknKey);