var assert = require("chai").assert;
// import the program
var findMissingNum = require("../index.js")

// create test cases
var testCase1 = [2, 1, 3, 5]
var testCase2 = [12, 10, 9]
var testCase3 = [-3, 0, -2, 3, 2, -1]

var expected1 = 4;
var expected2 = 11;
var expected3 = 1;

describe("Testing missing number finder function", function () {
    it("case 0 should return 4", function () {
        assert.equal(findMissingNum(testCase1), expected1);
    })
    it("case 1 should return 11", function () {
        assert.equal(findMissingNum(testCase2), expected2);
    })
    it("case 3 should return 1", function () {
        assert.equal(findMissingNum(testCase3), expected3);
    })
})