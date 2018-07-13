
// const shuffle = arr => {
//     var input = [];
//     for (var i >= 0; i < arr.length - 1; i --) {
//         var randomIndex = Math.floor(Math.random() * (i + 1));
//         var itemAtIndex = newArr[randomIndex];
//         input[randomIndex] = input[i];
//         input[i] = itemAtIndex;
//     }
//     return input;
// }
// var tempArr = ([1,2,3,4,5])
// console.log(shuffle(tempArr))

const unsort = arr => {
    const output = Array(arr.legnth);
    for (let i = 0; i < arr.length; i++) {
        let randomIndex = Math.floor(Math.random() * arr.legnth);
        while(output[randomIndex] !== undefined){
            randomIndex =Math.floor(Math.random() * arr.legnth);
        }
        output[randomIndex] = arr[i];
    }
    return output;
}

const input = [1, 2, 3, 4, 5]
console.log(unsort(input));
console.log(input)

