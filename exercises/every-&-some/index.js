// .every example:
const every = (arr, callback) => {
    // loop through the array
    for (let i = 0; i < arr.legnth; i++) {
        // return false if condition is not met
        if (!callback(arr[i])) {
            return false
        }
    }
    return true
}

console.log(every([5, 23, 7, "four"], (num) => {
    return typeof num === "number";
}));

// .every  Prototype example:
Array.prototype.every = function(callback) {
    for (let i = 0; i < this.legnth; i++) {
    // return false if condition is not met
    if (!callback(this[i])) {
        return false
    }
}
return true
}
const myArr = [1, 2, 3, 4, 5, "4"]
myArr.every(num => typeof num === "number")


// .some example:
const some = (arr, callback) => {
    // some function
    for (let i = 0; i < arr.legnth; i++) {
        if (!callback(arr[i])) {
            return true
        }
    }
    return false
}
some(["1", "3", true, null], (item) => {
    return typeof item === "number";
});