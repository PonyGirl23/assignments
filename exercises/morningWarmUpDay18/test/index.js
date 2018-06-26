
const assert = require("chai").assert;

const matchWords = require("../index.js");



const testCase = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.";

const expected = ["lever", "on", "far", "pull", "the", "right"];
 
describe("Testing matching words", () => {
     it("should return an array containing duplicates", () => {
        assert.deepEqual(matchWords(testCase), expected);
     })
     
 })
