const assert = require('chai').assert;
// import function that you are testing

const { stringifyUrl, object } = require('../index');
const testCasesStringify = [
    {
        url: "http://localhost:8080/monkeys",
        query: {
            color: "black",
            species: "howler"
        }
    },
    {
        url: "http://localhost:8080/monkeys",
        query: {}
    }
]

describe('test stringify', () => {
    it('should return a url string with the parameters added at the end separated by ', () => {
        assert.equal(stringifyUrl(testCasesStringify[0].url, testCasesStringify[0].query),
            "http://localhost:8080/monkeys?color=black&species=howler")
    });
    it('should return a url string with no query added', () => {
        assert.equal(stringifyUrl(testCasesStringify[1].url, testCasesStringify[1].query),
            "http://localhost:8080/monkeys")
    });
});

const testCasesObject = [
    "http://localhost:8080/monkeys?color=black&species=howler",
    "http://localhost:8080/monkeys",
]
describe('Test object', () => {
    it('should return a query object with a couple of key value pairs', () => {
        assert.deepEqual(object(testCasesObject[0]), {
            color: "black",
            species: "howler"
        });
    });
    it('should return a empty query object', () => {
        assert.deepEqual(object(testCasesObject[1]), {});
    })
})