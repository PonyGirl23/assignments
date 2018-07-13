// const recurse = (x) => {
//     // Base Case:
//     if(x < 1) return `Loop finished, x = ${x}`;
//     console.log(x);

//     // Recursion:
//     return recurse(x - 1);
// }
// console.log(recurse(10))

const gameOfThree = (n, counter = 0) => {
    // Base Case:
    if (n === 1) return counter;
    // Recursion:
    // Determine if n is divisible by 3

    if (n % 3 === 0) {
        return gameOfThree(n / 3, counter + 1);
    } else {
        if ((n + 1) % 3 === 0) {
            return gameOfThree((n + 1) / 3, counter + 1);
        } else { 
            return gameOfThree((n - 1) / 3, counter + 1);
        }
    }
}
    // if not add or subtract 1
    // find the value that IS divisible
    // call function again with new value and counter ++
console.log(gameOfThree(3));
    
