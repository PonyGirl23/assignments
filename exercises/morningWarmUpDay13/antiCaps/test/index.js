var assert = require("chai").assert;
// we will import our function here later

var antiCaps = require("../index.js");

var testCases = ["", "abc", "ABC", "AbC"];

describe("Testing anti-caps", function () {
    it("should return empty string", function () {
        // describe("message", callback function())
        // assert(actual value, expected value)
        assert.equal(antiCaps(testCase[0]), "");
    });
    it("should return ABC", function () {
        assert.equal(antiCaps(testCases[1]), "ABC");
    });
    it("should return abc", function () {
        assert.equal(antiCaps(testCase[2], "abc"));
    });
    it("should return AbC", function(){
        assert.equal(antiCaps(testCase[3], "AbC"));
    })

})

