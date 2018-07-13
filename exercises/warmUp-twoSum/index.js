
const twoSum = (arr, int) => {
    // create nested loop, with the second loop offset by one
    // within second loop check wether the two numbers add up to the target
    // if true, return arr of matching indices
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++)
            if (arr[j] + arr[i]=== int){
                return [i, j];
            }
}
}
module.exports = twoSum;