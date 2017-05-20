/// <reference path="../node_modules/@types/mocha/index.d.ts" />

/******************************** IMPORT ARRAY MODULE FOR TESTING *********************************/
import { expect } from 'chai';

import { m_, query } from '../index';

const queryFns = m_.query;

describe(`query sub-module`, function() {
    it(`exists`, function() {
        expect(query).to.exist;
    });
});
