function findMissingNum(arr) {
    // get array in sequential order
    var sorted = arr.sort(function (a, b) {
        return a - b;
    })
    // check for gaps
    // loop through array and check if there is more than
    // a difference of 1 between two given elements
    for (var i = 0; i < arr.length; i++) {
        if ((sorted[i] - sorted[i + 1]) !== -1) {
            // return the number that should fill the gap
            return sorted[i] + 1;
        }
    }
}

console.log(findMissingNum([2, 1, 3, 5]));

module.exports = findMissingNum;