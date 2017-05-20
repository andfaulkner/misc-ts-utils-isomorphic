/// <reference path="../node_modules/@types/mocha/index.d.ts" />

/******************************** IMPORT ARRAY MODULE FOR TESTING *********************************/
import { expect } from 'chai';

import { m_, array } from '../index';

const arr = m_.array;

describe(`array sub-module`, function() {
    it(`exists`, function() {
        expect(array).to.exist;
    });
});
