// const inputArray = (arr1) => {
//     arr2 = [" "]
//     let(i = 0, i <= arr1.legnth, i++)
//     } if (arr1[i]
// )

// module.exports = inputArray;
// console.log(inputArray([ ]))

// Solution 1:
function difference(arr) {
    if(arr.length < 3) {
        console.log("This array must be longer");
    } else {
        var answer = []
        var x = 0
        var final = (arr[0].length + arr[1].length + arr[2].length);
        for(k = 0; k < arr.length - 3; k++) {
            if (final < (arr[k+1].length + arr[k+2].length + arr[k+3].length)) {
                final = (arr[k+1].length + arr[k+2].length + arr[k+3].length);
                x = k;
            } else {
            }
        }
        answer.push(arr[x+1], arr[x+2], arr[x+3])
        console.log(answer)
    }
}

difference(["This", "is", "an", "array"])

Solution 2:
const difference = (arr) =>{
    let mathStorage = 0;
    let arrayStorage;
    for (let i = 1; i < arr.length -1 ; i++) {
        if (mathStorage < arr[(i-1)].length + arr[i].length + arr[(i+1)].length){
            mathStorage = arr[i-1].length + arr[i].length + arr[(i+1)].length;
            arrayStorage = [arr[(i-1)], arr[i], arr[(i+1)]];            
        }        
    }
    return arrayStorage;
}
Solution 3:
const inputArray = ["this", "is", "an", "array", "I"];

const adjacent = arr => {
  let largest = 0;
  let final = '';
  arr.map((word, i) => {
    if(arr[i+2] !== undefined){
      curStr = `${word} ${arr[i+1]} ${arr[i+2]}`;
    }
    if(curStr.length - 2 > largest){
      largest = curStr.length - 2;
      final = curStr.split(' ')
    }
    })
  return final
}

adjacent(inputArray)
const adjacentDifference = arr => {
    // loop through array.length - 2
    let largest = [arr[0], arr[1], arr[2]]
    // check length of array[i] [i + 1] & [i + 2 ] and replace largest if larger
    for(let i = 1; i < arr.length - 2; i++){
      if(arr[i].length + arr[i + 1].length + arr[i + 2 ].length > largest[0].length + largest[1].length + largest[2].length){
        largest.splice(0, 3, arr[i], arr[i + 1], arr[i + 2])
      }
    }
    return largest
  }