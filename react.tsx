/// <reference path="./node_modules/@types/react/index.d.ts" />

/******************************************** IMPORTS *********************************************/
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RealAny } from './src/types-iso';


/****************************************** REACT TYPES *******************************************/
export type InputChange = React.EventHandler<React.FormEvent<HTMLInputElement>>;
export type FormSubmit = React.EventHandler<React.FormEvent<HTMLFormElement>>;

export { InputChange as InputChangeType }
export { FormSubmit as FormSubmitType }

/**
 * Named stateless functional components / JSX elements.
 * Normally Typescript does not allow you to assign them display names, resulting in:
 *     <Unknown></Unknown>
 *
 */
export type NamedSFC<T> = ((args: T) => JSX.Element) & { displayName: string };


/*********************************** REACT COMPONENT FACTORIES ************************************/
/**
 * @TODO unit test this namedStatelessComponent
 * Build a named stateless functional component.
 * @param {string} displayName - Name you'd like to give the stateless functional component.
 * @param {React.StatelessComponent} sfc - Stateless functional component to name.
 * @return {React.StatelessComponent} Named stateless functional component.
 */
export const buildNamedSfc =
    <T extends any>(displayName: string,
                    statelessComponent: React.StatelessComponent<T>): React.StatelessComponent<T> =>
{
    const NamedSfc: NamedSFC<T> = statelessComponent as NamedSFC<T>;
    NamedSfc.displayName = displayName;
    return NamedSfc;
};

export const buildNamedStatelessComponent = buildNamedSfc;
export const setSfcDisplayName = buildNamedSfc;


/************************************ REACT UTILITY COMPONENTS ************************************/

/**
 * Render the child if 'test' is truthy.
 * @param {any} test - If truthy, render children.
 * @return {JSX.Element|null} If test is truthy, return JSX element child. Otherwise return null.
 */
export const IfTrue = (props: { test: RealAny, children: any }) => {
    if (!!props.test) return React.Children.only(props.children);
    return null;
};