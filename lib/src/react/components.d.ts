/// <reference types="react" />
/******************************************** IMPORTS *********************************************/
import * as React from 'react';
/*************************************** BASIC CONDITIONALS ***************************************/
/**
 * Render the child if 'test' is truthy. Can only accept React components.
 * If given a string, wraps it in a span before returning it.
 * @param {any} test - If truthy, render children.
 * @return {JSX.Element|null} If test is truthy, return JSX element child. Otherwise return null.
 */
export declare const IfTruthy: (props: {
    test: any;
    children?: any;
}) => React.ReactElement<any>;
/**
 * Render the child if 'test' is falsy. Can only accept React components.
 * If given a string, wraps it in a span before returning it.
 * @param {any} test - If falsy, render children.
 * @return {JSX.Element|null} If test is falsy, return JSX element child. Otherwise return null.
 */
export declare const IfFalsy: (props: {
    test: any;
    children?: any;
}) => React.ReactElement<any>;
export declare const Default: React.StatelessComponent<{
    children?: any;
}>;
export declare const Case: React.StatelessComponent<{
    val: any;
    children?: any;
}>;
export declare const Switch: React.StatelessComponent<{
    children?: any;
    test: any;
}>;
