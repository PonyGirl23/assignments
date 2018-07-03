const multiD1 = [[1, 2, 3], ["a", "b", "c"], [true, true, true]]

function checkTypes(arr) {
    // Code here
    for (let i =0; i >= multiD1.length; i++);
    if (multiD1.typeOf.indexOf[1] === multiD1.typeOf.indexOf[2]);
        return true;
} else if {
    (multiD1.typeOf.indexOf[2] === multiD1.typeOf.indexOf[3]);
   return true; 
} else if {
    (multiD1.typeOf.indexOf[1] === multiD1.typeOf.indexOf[3]);
    return true;
} else {
    return false;
}
}
console.log(checkTypes(multiD1));

// Maxx's Answer:
// checkTypes = (arr) => {  
//     let answer;
// for (let i = 0; i < arr.length -1; i++) {
//     if (typeof arr[i][1] === typeof arr[i+1][1]){
//         answer = true
//     } else {
//         answer = false
//     }
// }
// return answer;
// }