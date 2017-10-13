"use strict";
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*************************************** IMPORT TEST UTILS ****************************************/
var chai_1 = require("chai");
var test_1 = require("../../src/node/test");
var moment = require("moment");
/******************************* IMPORT TYPES MODULES FOR TESTING *********************************/
var shared_1 = require("../../shared");
var node_1 = require("../../node");
var browser_1 = require("../../browser");
var typesModule = require("../../src/types-iso");
/********************************************* TESTS **********************************************/
describe("types sub-modules", function () {
    describe("types-iso sub-module", function () {
        test_1.expectNonEmptyObjectExists(shared_1.types, 'types (from shared/base export)');
        test_1.expectNonEmptyObjectExists(shared_1.m_.types, 'types (from m_ top-level namespace)');
        test_1.expectNonEmptyObjectExists(typesModule, 'types (import all from types.ts file)');
        describe("isInteger function (and alias isInt)", function () {
            test_1.expectFunctionExists(shared_1.types.isInteger);
            test_1.expectFunctionExists(shared_1.types.isInt);
            it("returns true given an integer", function () {
                chai_1.expect(shared_1.types.isInteger(10)).to.be.true;
                chai_1.expect(shared_1.types.isInteger(-100)).to.be.true;
                chai_1.expect(shared_1.types.isInteger(0)).to.be.true;
            });
            it("returns false given a non-integer", function () {
                chai_1.expect(shared_1.types.isInteger(10.2)).to.be.false;
                chai_1.expect(shared_1.types.isInteger('gr')).to.be.false;
                chai_1.expect(shared_1.types.isInteger({})).to.be.false;
                chai_1.expect(shared_1.types.isInteger(false)).to.be.false;
                chai_1.expect(shared_1.types.isInteger(true)).to.be.false;
                chai_1.expect(shared_1.types.isInteger([])).to.be.false;
                chai_1.expect(shared_1.types.isInteger(function () { return 23; })).to.be.false;
            });
            it("returns false if given null, undefined, or no value at all", function () {
                chai_1.expect(shared_1.types.isInteger(null)).to.be.false;
                chai_1.expect(shared_1.types.isInteger(undefined)).to.be.false;
                chai_1.expect(shared_1.types.isInteger()).to.be.false;
            });
        });
        describe("isBoolean function", function () {
            it("returns true if given a boolean", function () {
                chai_1.expect(shared_1.isBoolean(true)).to.be.true;
                chai_1.expect(shared_1.isBoolean(false)).to.be.true;
            });
            it("returns true if given a factory-constructed Boolean object", function () {
                chai_1.expect(shared_1.isBoolean(Boolean(false))).to.be.true;
                chai_1.expect(shared_1.isBoolean(Boolean(true))).to.be.true;
            });
            it("returns true if given an instantiated Boolean object", function () {
                chai_1.expect(shared_1.isBoolean(new Boolean(false))).to.be.true;
                chai_1.expect(shared_1.isBoolean(new Boolean(true))).to.be.true;
            });
            it("returns false if given a non-boolean", function () {
                chai_1.expect(shared_1.isBoolean(null)).to.be.false;
                chai_1.expect(shared_1.isBoolean(undefined)).to.be.false;
                chai_1.expect(shared_1.isBoolean('')).to.be.false;
                chai_1.expect(shared_1.isBoolean('asdf')).to.be.false;
                chai_1.expect(shared_1.isBoolean(0)).to.be.false;
                chai_1.expect(shared_1.isBoolean(1)).to.be.false;
                chai_1.expect(shared_1.isBoolean(NaN)).to.be.false;
                chai_1.expect(shared_1.isBoolean(function () { return false; })).to.be.false;
                chai_1.expect(shared_1.isBoolean(function () { return true; })).to.be.false;
            });
        });
        describe("isNumberLike function", function () {
            test_1.expectFunctionExists(shared_1.types.isNumberLike);
            it("returns true given a number", function () {
                chai_1.expect(shared_1.types.isNumberLike(0)).to.be.true;
                chai_1.expect(shared_1.types.isNumberLike(1)).to.be.true;
                chai_1.expect(shared_1.types.isNumberLike(-1)).to.be.true;
                chai_1.expect(shared_1.types.isNumberLike(24)).to.be.true;
                chai_1.expect(shared_1.types.isNumberLike(12.32)).to.be.true;
                chai_1.expect(shared_1.types.isNumberLike(-1001.32)).to.be.true;
            });
            it("returns true given a string that can parse into a number", function () {
                chai_1.expect(shared_1.types.isNumberLike('0')).to.be.true;
                chai_1.expect(shared_1.types.isNumberLike('1')).to.be.true;
                chai_1.expect(shared_1.types.isNumberLike('-1')).to.be.true;
                chai_1.expect(shared_1.types.isNumberLike('24')).to.be.true;
                chai_1.expect(shared_1.types.isNumberLike('12.32')).to.be.true;
                chai_1.expect(shared_1.types.isNumberLike('-1001.32')).to.be.true;
                chai_1.expect(shared_1.types.isNumberLike('.32')).to.be.true;
                chai_1.expect(shared_1.types.isNumberLike('-.32')).to.be.true;
            });
            it("returns false given a string that can't parse into a number, or given any other type of non-number (including NaN)", function () {
                chai_1.expect(shared_1.types.isNumberLike({})).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike([])).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike(false)).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike(true)).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike('')).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike('gr argh')).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike(Object)).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike(shared_1.types.isNumberLike)).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike(NaN)).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike('123_a.453')).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike('123..453')).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike('123.453.123')).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike('.')).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike('-.')).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike('-.123.2')).to.be.false;
            });
            it("returns false if given null, undefined, or no value at all", function () {
                chai_1.expect(shared_1.types.isNumberLike(null)).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike(undefined)).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike()).to.be.false;
            });
            it("returns false if given array w/ 1 number-like value & no 2nd arg", function () {
                chai_1.expect(shared_1.types.isNumberLike([2])).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike([54])).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike([54, 89])).to.be.false;
            });
            it("returns true if given array  w/ 1 number-like value, & true as the 2nd arg", function () {
                chai_1.expect(shared_1.types.isNumberLike([2], true)).to.be.true;
                chai_1.expect(shared_1.types.isNumberLike([54], true)).to.be.true;
            });
            it("returns false if given array w/ array w/ 1 number-like value, even w/ true as the 2nd arg", function () {
                chai_1.expect(shared_1.types.isNumberLike([[2]], false)).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike([[2]], true)).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike([[54]], false)).to.be.false;
                chai_1.expect(shared_1.types.isNumberLike([[54]], true)).to.be.false;
            });
        });
        describe("isStringOrNumber function", function () {
            it("returns true if given a number", function () {
                chai_1.expect(shared_1.types.isStringOrNumber(5)).to.eql(true);
            });
            it("returns true if given a string", function () {
                chai_1.expect(shared_1.types.isStringOrNumber('Some string')).to.eql(true);
            });
            it("returns true if given anything that isn't either a string of a number", function () {
                chai_1.expect(shared_1.types.isStringOrNumber({})).to.eql(false);
                chai_1.expect(shared_1.types.isStringOrNumber([])).to.eql(false);
                chai_1.expect(shared_1.types.isStringOrNumber(null)).to.eql(false);
                chai_1.expect(shared_1.types.isStringOrNumber(undefined)).to.eql(false);
                chai_1.expect(shared_1.types.isStringOrNumber(NaN)).to.eql(false);
                chai_1.expect(shared_1.types.isStringOrNumber(Array)).to.eql(false);
                chai_1.expect(shared_1.types.isStringOrNumber(String)).to.eql(false);
                chai_1.expect(shared_1.types.isStringOrNumber(['asdf', 'rbrt'])).to.eql(false);
                chai_1.expect(shared_1.types.isStringOrNumber(Object)).to.eql(false);
            });
        });
        describe("isIntegerLike function", function () {
            test_1.expectFunctionExists(shared_1.types.isIntegerLike);
            it("returns true given an integer", function () {
                chai_1.expect(shared_1.types.isIntegerLike(0)).to.be.true;
                chai_1.expect(shared_1.types.isIntegerLike(1)).to.be.true;
                chai_1.expect(shared_1.types.isIntegerLike(-1)).to.be.true;
                chai_1.expect(shared_1.types.isIntegerLike(24)).to.be.true;
            });
            it("returns false given a number containing a decimal", function () {
                chai_1.expect(shared_1.types.isIntegerLike(12.32)).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike(-1001.32)).to.be.false;
            });
            it("returns true given a string that can parse into an integer (including " +
                "numbers ending in a dot)", function () {
                chai_1.expect(shared_1.types.isIntegerLike('0')).to.be.true;
                chai_1.expect(shared_1.types.isIntegerLike('1')).to.be.true;
                chai_1.expect(shared_1.types.isIntegerLike('-1')).to.be.true;
                chai_1.expect(shared_1.types.isIntegerLike('24')).to.be.true;
                chai_1.expect(shared_1.types.isIntegerLike('24.')).to.be.true;
                chai_1.expect(shared_1.types.isIntegerLike('-24.')).to.be.true;
            });
            it("returns false given a string that can parse into a real number but not an integer", function () {
                chai_1.expect(shared_1.types.isIntegerLike('12.32')).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike('-1001.32')).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike('.32')).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike('-.32')).to.be.false;
            });
            it("returns false given a string that can't parse into a number, or given any other type of non-number (including NaN)", function () {
                chai_1.expect(shared_1.types.isIntegerLike({})).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike([])).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike(false)).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike(true)).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike('')).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike('gr argh')).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike(Object)).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike(shared_1.types.isIntegerLike)).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike(NaN)).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike('123_a.453')).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike('123..453')).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike('123.453.123')).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike('.')).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike('-.')).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike('-.123.2')).to.be.false;
            });
            it("returns false if given null, undefined, or no value at all", function () {
                chai_1.expect(shared_1.types.isIntegerLike(null)).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike(undefined)).to.be.false;
                chai_1.expect(shared_1.types.isIntegerLike()).to.be.false;
            });
        });
        describe("isNonexistentOrString function", function () {
            test_1.expectFunctionExists(shared_1.types.isNonexistentOrString);
            it("returns true for undefined or null", function () {
                chai_1.expect(shared_1.types.isNonexistentOrString(null)).to.equal(true);
                chai_1.expect(shared_1.types.isNonexistentOrString(undefined)).to.equal(true);
                chai_1.expect(shared_1.types.isNonexistentOrString()).to.equal(true);
            });
            it("returns true for string", function () {
                chai_1.expect(shared_1.types.isNonexistentOrString('')).to.equal(true);
                chai_1.expect(shared_1.types.isNonexistentOrString('asdf')).to.equal(true);
                chai_1.expect(shared_1.types.isNonexistentOrString(' ')).to.equal(true);
                chai_1.expect(shared_1.types.isNonexistentOrString('  asdfasdf  ')).to.equal(true);
                chai_1.expect(shared_1.types.isNonexistentOrString('  123  ')).to.equal(true);
                chai_1.expect(shared_1.types.isNonexistentOrString('123')).to.equal(true);
                chai_1.expect(shared_1.types.isNonexistentOrString('true')).to.equal(true);
                chai_1.expect(shared_1.types.isNonexistentOrString('null')).to.equal(true);
                chai_1.expect(shared_1.types.isNonexistentOrString('undefined')).to.equal(true);
                chai_1.expect(shared_1.types.isNonexistentOrString('0')).to.equal(true);
            });
            it("returns false for non-string, non-null, non-undefined items ", function () {
                chai_1.expect(shared_1.types.isNonexistentOrString(123)).to.equal(false);
                chai_1.expect(shared_1.types.isNonexistentOrString(false)).to.equal(false);
                chai_1.expect(shared_1.types.isNonexistentOrString(true)).to.equal(false);
                chai_1.expect(shared_1.types.isNonexistentOrString({})).to.equal(false);
                chai_1.expect(shared_1.types.isNonexistentOrString([])).to.equal(false);
                chai_1.expect(shared_1.types.isNonexistentOrString(['asdf'])).to.equal(false);
                chai_1.expect(shared_1.types.isNonexistentOrString({ 'asdf': 'asdf' })).to.equal(false);
                chai_1.expect(shared_1.types.isNonexistentOrString(0)).to.equal(false);
                chai_1.expect(shared_1.types.isNonexistentOrString(1)).to.equal(false);
                chai_1.expect(shared_1.types.isNonexistentOrString(NaN)).to.equal(false);
                chai_1.expect(shared_1.types.isNonexistentOrString(Object)).to.equal(false);
                chai_1.expect(shared_1.types.isNonexistentOrString(shared_1.types.isNonexistentOrString)).to.equal(false);
            });
        });
        describe("isArray function", function () {
            test_1.expectFunctionExists(shared_1.types.isArray);
            it("returns true for arrays", function () {
                chai_1.expect(shared_1.types.isArray([])).to.be.true;
                chai_1.expect(shared_1.types.isArray(['asdf', '123', null])).to.be.true;
                chai_1.expect(shared_1.types.isArray([null])).to.be.true;
                chai_1.expect(shared_1.types.isArray(new Array())).to.be.true;
                var ArrayExtender = /** @class */ (function (_super) {
                    __extends(ArrayExtender, _super);
                    function ArrayExtender() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return ArrayExtender;
                }(Array));
                ;
                chai_1.expect(shared_1.types.isArray(new ArrayExtender())).to.be.true;
            });
            it("returns false for non-arrays", function () {
                chai_1.expect(shared_1.types.isArray(null)).to.be.false;
                chai_1.expect(shared_1.types.isArray(0)).to.be.false;
                chai_1.expect(shared_1.types.isArray(1)).to.be.false;
                chai_1.expect(shared_1.types.isArray({})).to.be.false;
                chai_1.expect(shared_1.types.isArray({ asdf: [] })).to.be.false;
                chai_1.expect(shared_1.types.isArray('123123')).to.be.false;
                chai_1.expect(shared_1.types.isArray('[]')).to.be.false;
                chai_1.expect(shared_1.types.isArray('sasffwe')).to.be.false;
                chai_1.expect(shared_1.types.isArray(Object)).to.be.false;
                chai_1.expect(shared_1.types.isArray(Array)).to.be.false;
                chai_1.expect(shared_1.types.isArray(undefined)).to.be.false;
                chai_1.expect(shared_1.types.isArray(-123)).to.be.false;
                chai_1.expect(shared_1.types.isArray('')).to.be.false;
                chai_1.expect(shared_1.types.isArray(true)).to.be.false;
                chai_1.expect(shared_1.types.isArray(false)).to.be.false;
                chai_1.expect(shared_1.types.isArray(shared_1.types.isArray)).to.be.false;
            });
        });
        describe("isTrue function", function () {
            test_1.expectFunctionExists(shared_1.types.isTrue);
            it("returns true if given true, 'true', 'True', or 'TRUE', regardless of arg 2's value", function () {
                chai_1.expect(shared_1.types.isTrue(true)).to.be.true;
                chai_1.expect(shared_1.types.isTrue('true')).to.be.true;
                chai_1.expect(shared_1.types.isTrue('TRUE')).to.be.true;
                chai_1.expect(shared_1.types.isTrue('True')).to.be.true;
                chai_1.expect(shared_1.types.isTrue(true, true)).to.be.true;
                chai_1.expect(shared_1.types.isTrue('true', true)).to.be.true;
                chai_1.expect(shared_1.types.isTrue('TRUE', true)).to.be.true;
                chai_1.expect(shared_1.types.isTrue('True', true)).to.be.true;
                chai_1.expect(shared_1.types.isTrue(true, false)).to.be.true;
                chai_1.expect(shared_1.types.isTrue('true', false)).to.be.true;
                chai_1.expect(shared_1.types.isTrue('TRUE', false)).to.be.true;
                chai_1.expect(shared_1.types.isTrue('True', false)).to.be.true;
            });
            it("if arg 2 false, returns false for all vals except true, 'true', 'True', or 'TRUE'", function () {
                chai_1.expect(shared_1.types.isTrue(null)).to.be.false;
                chai_1.expect(shared_1.types.isTrue(false)).to.be.false;
                chai_1.expect(shared_1.types.isTrue('TrUe')).to.be.false;
                chai_1.expect(shared_1.types.isTrue('asdfoigeiubaer')).to.be.false;
                chai_1.expect(shared_1.types.isTrue('')).to.be.false;
                chai_1.expect(shared_1.types.isTrue(undefined)).to.be.false;
                chai_1.expect(shared_1.types.isTrue()).to.be.false;
                chai_1.expect(shared_1.types.isTrue({})).to.be.false;
                chai_1.expect(shared_1.types.isTrue([])).to.be.false;
                chai_1.expect(shared_1.types.isTrue([true, true])).to.be.false;
                chai_1.expect(shared_1.types.isTrue({ true: true })).to.be.false;
                chai_1.expect(shared_1.types.isTrue(1)).to.be.false;
                chai_1.expect(shared_1.types.isTrue(0)).to.be.false;
                chai_1.expect(shared_1.types.isTrue(123456)).to.be.false;
                chai_1.expect(shared_1.types.isTrue(NaN)).to.be.false;
                chai_1.expect(shared_1.types.isTrue(Array)).to.be.false;
                chai_1.expect(shared_1.types.isTrue(Object)).to.be.false;
            });
            it("if arg 2 true, returns true for 't' and 'T'", function () {
                chai_1.expect(shared_1.types.isTrue('t', true)).to.be.true;
                chai_1.expect(shared_1.types.isTrue('T', true)).to.be.true;
            });
            it("if arg 2 false or not defined, returns false for 't' and 'T'", function () {
                chai_1.expect(shared_1.types.isTrue('t', false)).to.be.false;
                chai_1.expect(shared_1.types.isTrue('T', false)).to.be.false;
                chai_1.expect(shared_1.types.isTrue('t')).to.be.false;
                chai_1.expect(shared_1.types.isTrue('T')).to.be.false;
            });
        });
        describe("isFalse function", function () {
            test_1.expectFunctionExists(shared_1.types.isFalse);
            it("returns true if given false, 'false', 'False', or 'FALSE', regardless of arg 2's value", function () {
                chai_1.expect(shared_1.types.isFalse(false)).to.be.true;
                chai_1.expect(shared_1.types.isFalse('false')).to.be.true;
                chai_1.expect(shared_1.types.isFalse('FALSE')).to.be.true;
                chai_1.expect(shared_1.types.isFalse('False')).to.be.true;
                chai_1.expect(shared_1.types.isFalse(false, false)).to.be.true;
                chai_1.expect(shared_1.types.isFalse('false', false)).to.be.true;
                chai_1.expect(shared_1.types.isFalse('FALSE', false)).to.be.true;
                chai_1.expect(shared_1.types.isFalse('False', false)).to.be.true;
                chai_1.expect(shared_1.types.isFalse(false, true)).to.be.true;
                chai_1.expect(shared_1.types.isFalse('false', true)).to.be.true;
                chai_1.expect(shared_1.types.isFalse('FALSE', true)).to.be.true;
                chai_1.expect(shared_1.types.isFalse('False', true)).to.be.true;
            });
            it("if arg 2 false, returns false for all vals except false, 'false', 'False', or 'FALSE'", function () {
                chai_1.expect(shared_1.types.isFalse(null)).to.be.false;
                chai_1.expect(shared_1.types.isFalse(true)).to.be.false;
                chai_1.expect(shared_1.types.isFalse('FaLsE')).to.be.false;
                chai_1.expect(shared_1.types.isFalse('asdfoigeiubaer')).to.be.false;
                chai_1.expect(shared_1.types.isFalse('')).to.be.false;
                chai_1.expect(shared_1.types.isFalse(undefined)).to.be.false;
                chai_1.expect(shared_1.types.isFalse()).to.be.false;
                chai_1.expect(shared_1.types.isFalse({})).to.be.false;
                chai_1.expect(shared_1.types.isFalse([])).to.be.false;
                chai_1.expect(shared_1.types.isFalse([false, false])).to.be.false;
                chai_1.expect(shared_1.types.isFalse({ false: false })).to.be.false;
                chai_1.expect(shared_1.types.isFalse(1)).to.be.false;
                chai_1.expect(shared_1.types.isFalse(0)).to.be.false;
                chai_1.expect(shared_1.types.isFalse(123456)).to.be.false;
                chai_1.expect(shared_1.types.isFalse(NaN)).to.be.false;
                chai_1.expect(shared_1.types.isFalse(Array)).to.be.false;
                chai_1.expect(shared_1.types.isFalse(Object)).to.be.false;
            });
            it("if arg 2 true, returns true for 'f' and 'F'", function () {
                chai_1.expect(shared_1.types.isFalse('f', true)).to.be.true;
                chai_1.expect(shared_1.types.isFalse('F', true)).to.be.true;
            });
            it("if arg 2 false or not defined, returns false for 'f' and 'F'", function () {
                chai_1.expect(shared_1.types.isFalse('f', false)).to.be.false;
                chai_1.expect(shared_1.types.isFalse('F', false)).to.be.false;
                chai_1.expect(shared_1.types.isFalse('f')).to.be.false;
                chai_1.expect(shared_1.types.isFalse('F')).to.be.false;
            });
        });
        describe("isDateLike function", function () {
            test_1.expectFunctionExists(shared_1.types.isDateLike);
            it("should return true for dates & moment objects", function () {
                chai_1.expect(shared_1.types.isDateLike(new Date())).to.be.true;
                chai_1.expect(shared_1.types.isDateLike(moment())).to.be.true;
                chai_1.expect(shared_1.types.isDateLike(moment(new Date()))).to.be.true;
            });
            it("should return true for anything moment considers valid besides negative numbers", function () {
                chai_1.expect(shared_1.types.isDateLike('1234-12-23')).to.be.true;
                chai_1.expect(shared_1.types.isDateLike('1234')).to.be.true;
                chai_1.expect(shared_1.types.isDateLike(1234)).to.be.true;
                chai_1.expect(shared_1.types.isDateLike('1231235')).to.be.true;
                chai_1.expect(shared_1.types.isDateLike('1231/10/23:12:12:12')).to.be.true;
                chai_1.expect(shared_1.types.isDateLike('1231-10-23:12:12:12')).to.be.true;
                chai_1.expect(shared_1.types.isDateLike(123134)).to.be.true;
                chai_1.expect(shared_1.types.isDateLike(0)).to.be.true;
                chai_1.expect(shared_1.types.isDateLike('0')).to.be.true;
                chai_1.expect(shared_1.types.isDateLike({})).to.be.true;
                chai_1.expect(shared_1.types.isDateLike([])).to.be.true;
                chai_1.expect(shared_1.types.isDateLike({ months: 10 })).to.be.true;
                chai_1.expect(shared_1.types.isDateLike({ month: 10 })).to.be.true;
                chai_1.expect(shared_1.types.isDateLike({ years: 10 })).to.be.true;
                chai_1.expect(shared_1.types.isDateLike({ year: 2015 })).to.be.true;
                chai_1.expect(shared_1.types.isDateLike({ date: 24 })).to.be.true;
                chai_1.expect(shared_1.types.isDateLike({ dates: 22 })).to.be.true;
                chai_1.expect(shared_1.types.isDateLike({ day: 21 })).to.be.true;
                chai_1.expect(shared_1.types.isDateLike({ days: 20 })).to.be.true;
                chai_1.expect(shared_1.types.isDateLike({ millisecond: 900 })).to.be.true;
                chai_1.expect(shared_1.types.isDateLike({ seconds: 56 })).to.be.true;
            });
            it("should return false for negative numbers, anything moment considers invalid, & " +
                "nonsensical objects", function () {
                chai_1.expect(shared_1.types.isDateLike('-1234')).to.be.false;
                chai_1.expect(shared_1.types.isDateLike(-1234)).to.be.false;
                chai_1.expect(shared_1.types.isDateLike(NaN)).to.be.false;
                chai_1.expect(shared_1.types.isDateLike(['asdf'])).to.be.false;
                chai_1.expect(shared_1.types.isDateLike([''])).to.be.false;
                chai_1.expect(shared_1.types.isDateLike({ oko: 123 })).to.be.false;
                chai_1.expect(shared_1.types.isDateLike({ oko: 123, date: 10 })).to.be.false;
                chai_1.expect(shared_1.types.isDateLike('12312354')).to.be.false;
            });
        });
        describe("isMultilangTextObj", function () {
            test_1.expectFunctionExists(shared_1.types.isMultilangTextObj);
        });
        describe("@singleton decorator", function () {
            // Mock singleton class
            var SingletonObject = /** @class */ (function () {
                function SingletonObject(someString) {
                    this.someString = someString;
                }
                SingletonObject = __decorate([
                    shared_1.types.singleton,
                    __metadata("design:paramtypes", [Object])
                ], SingletonObject);
                return SingletonObject;
            }());
            // Mock non-singleton class
            var NonSingletonObject = /** @class */ (function () {
                function NonSingletonObject(someString) {
                    this.someString = someString;
                }
                return NonSingletonObject;
            }());
            // Instance of singleton class.
            var singletonObject;
            before(function () {
                singletonObject = new SingletonObject('my string argument');
            });
            test_1.expectFunctionExists(shared_1.types.singleton);
            it("can be applied to a class", function () {
                chai_1.expect(SingletonObject).to.exist;
                chai_1.expect(singletonObject).to.exist;
                chai_1.expect(singletonObject).to.be.instanceof(SingletonObject);
                chai_1.expect(singletonObject.someString).to.eql('my string argument');
            });
            it("ensures re-instantiating a class it's applied to for a second time results in " +
                "returning the original object", function () {
                var newInstance = new SingletonObject('another string');
                chai_1.expect(newInstance.someString).to.eql('my string argument');
                chai_1.expect(newInstance.someString).to.eql(singletonObject.someString);
                chai_1.expect(newInstance).to.eql(singletonObject);
            });
            it("has no effect on classes it's not applied to", function () {
                var nonSingletonInstance = new NonSingletonObject('string one');
                var nonSingletonInstance2 = new NonSingletonObject('string two');
                chai_1.expect(nonSingletonInstance.someString).to.eql('string one');
                chai_1.expect(nonSingletonInstance2.someString).to.eql('string two');
            });
        });
    });
    describe("types-browser sub-module", function () {
        it("exists", function () {
            chai_1.expect(browser_1.types).to.exist;
        });
    });
    describe("types-node sub-module", function () {
        it("exists", function () {
            chai_1.expect(node_1.types).to.exist;
        });
    });
});
//# sourceMappingURL=types.spec.js.map