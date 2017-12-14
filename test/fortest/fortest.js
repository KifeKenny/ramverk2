/**
 * Test for class fortest.
 */
"use strict";

/* global describe it */

var assert = require("assert");
const ForTest = require("../../public/js/modules/fortest");

describe("multiplikate", function() {
    describe("Get value 7", function() {
        it("should be card 7", function() {
            let calc = new ForTest();
            let res = calc.mulitplikation(5, 2);

            assert.equal(res, 7);
        });
    });
});
