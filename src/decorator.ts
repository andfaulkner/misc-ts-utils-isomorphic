import 'reflect-metadata';

/***************************************** DECORATOR TYPE *****************************************/
/**
 * Available decorator types
 */
export type DecoratorTargetType =
    | 'CLASS'
    | 'STATIC_PROPERTY'
    | 'INSTANCE_PROPERTY'
    | 'PARAMETER'
    | 'STATIC_METHOD'
    | 'INSTANCE_METHOD'
    | 'ACCESSOR'
    | 'INVALID';

/**
 * Determine the decorator declaration type based on the arguments it receives.
 *
 *    Less than 1, or more than 3 arguments                                    --> INVALID
 *    1 arg  : arg1 is function                                                --> CLASS
 *    2 args : arg1 is function; arg2 is string or symbol                      --> STATIC_PROPERTY
 *    2 args : arg1.constructor is function, arg2 is string                    --> INSTANCE_PROPERTY
 *    3 args : arg3 is number                                                  --> PARAMETER
 *    3 args : arg1 is function w prototype & constructor; arg3 is descriptor  --> STATIC_METHOD
 *    3 args : arg1.constructor is function; arg3 is descriptor w no get, set  --> INSTANCE_METHOD
 *    3 args : arg1.constructor is function; arg3 is descriptor w get &/or set --> ACCESSOR
 *
 * @example Usage on class:
 *     @someDecorator
 *     class MyClass { ... }
 *     // On MyClass init, emits: "someDecorator declaration type: CLASS"
 *
 * @example Usage on parts of in a class:
 *     class MyClass {
 *         @someDecorator
 *         username: string = '';
 *         // On MyClass init, emits: "someDecorator declaration type: INSTANCE_PROPERTY"
 *
 *         @someDecorator
 *         fetchData() { ... }
 *         // On MyClass init, emits: "someDecorator declaration type: INSTANCE_METHOD"
 *     }
 *
 * @param {any[]} args Arguments initially passed to a function by decorator syntax e.g. @decorator
 *                     The "implicit" arguments given to a decorator by virtue of its placement.
 *
 * @return {string} CLASS, STATIC_PROPERTY, INSTANCE_PROPERTY, PARAMETER, ACCESSOR,
 *                  STATIC_METHOD, INSTANCE_METHOD, or INVALID (based on detected type).
 */
export function getDecoratorType(...args): DecoratorTargetType {
    const [target, key, descriptor] = args;

    const isTargetFunction = typeof target === 'function';
    const isTargetObject = typeof target === 'object';
    const isTargetConstructorFunction = typeof target.constructor === 'function';
    const targetHasPrototype = typeof target.prototype === 'object';
    const isKeyStringOrSymbol = typeof key === 'string' || typeof key === 'symbol';

    switch (args.filter(arg => typeof arg !== 'undefined' && arg !== null).length) {
        case 1:
            if (isTargetFunction) return 'CLASS';
            return 'INVALID';

        case 2:
            if (isTargetFunction && isKeyStringOrSymbol) return 'STATIC_PROPERTY';
            if (isTargetConstructorFunction && typeof key === 'string') return 'INSTANCE_PROPERTY';
            return 'INVALID';

        case 3:
            if (typeof descriptor === 'number') return 'PARAMETER';

            if (isTargetFunction && targetHasPrototype && isTargetConstructorFunction) {
                return 'STATIC_METHOD';
            }

            if (isTargetObject && isTargetConstructorFunction && typeof key === 'string') {
                return descriptor.get || descriptor.set ? 'ACCESSOR' : 'INSTANCE_METHOD';
            }
            return 'INVALID';

        default:
            return 'INVALID';
    }
}

/***************************************** BARREL EXPORTS *****************************************/
export {singleton} from './types-iso';
