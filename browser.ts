import {Moment} from 'moment';

// Import shared modules, and re-export them for top-level access
import {m_} from './shared';
export * from './shared';

// Import shared modules for usage in typings
import {
    array,
    date,
    decorator,
    Enum,
    error,
    func,
    locale,
    number,
    object,
    url,
    search,
    string,
    types,
    typesIso,
    validation,
    dataTypes,
    stream,
} from './shared';

// Import DOM module
import * as dom from './src/browser/dom';
export * from './src/browser/dom';
export {dom};

// Import event module
import * as event from './src/browser/event';
export * from './src/browser/event';
export {event};

// Import local-store module
import * as localStore from './src/browser/local-store';
export * from './src/browser/local-store';
export {localStore};
export {localStore as localStorage};
export {localStore as localStoreUtils};
export {localStore as localStorageUtils};

// Import browser-types (including merged-in types from types-iso)
import * as browserTypes from './src/browser/types-browser';
export * from './src/browser/types-browser';

/********************************************* EXPORT *********************************************/
/**
 * @export mUtils - module
 */
export const mUtils = {
    ...m_,
    dom,
    event,
    localStore,
    localStoreUtils: localStore,
    localStorage: localStore,
    localStorageUtils: localStore,
};

// Easier to access the 'pseudo-namespaced' mUtils/madUtils module
export {mUtils as __};
export {mUtils as m_};
export {mUtils as madUtils};

/************************************ COMMON FUNCTION EXPORTS *************************************/
import {commonShared} from './shared';

/**
 * Most common functions from mad-utils used in browser
 */
export const common = Object.assign({}, commonShared, {
    parseUserAgent: dom.parseUserAgent,
    getFromStorage: localStore.getFromStorage,
});
