
// Re-write this ES6
// Replace all the vars with let and const:

// var name = 'John'  
// var age = 101  
// var pets = ["cat", "dog"]
// var petObjects = []

// for (var i = 0; i < pets.length; i++){  
//   var pet = {type: pets[i]}
//   if (pets[i] === "cat"){
//     var name = "fluffy"
//   } else {
//     var name = "spot"
//   }
//   pet.name = name
//   petObjects.push(pet)
// }

// ES6
// let name = 'John'  
// const age = 101  
// const pets = ["cat", "dog"]
// let petObjects = []

// for (let i = 0; i < pets.length; i++){  
//   let pet = {type: pets[i]}
//   if (pets[i] === "cat"){
//      name = "fluffy"
//   } else {
//      name = "spot"
//   }
//   pet.name = name
//   petObjects.push(pet)
// };
// console.log(petObjects);



// Re-write this .map() using a fat arrow function:
// const vegetables = carrots.map(function(carrot){  
//     return {type: "carrot", name: carrot}
// });
// console.log(carrots.map);

// ES6:
// const vegetables = ["carrot"];
// const mapIt = vegetables.map(carrot => ({ type: "carrot", name: carrot }));
// console.log(mapIt);



// Re-write this .filter() using a fat arrow function:
// friends = people.filter(function(person){  
//     return !!person.friendly
// })

// ES6:
// const people = [
//     {
//     name: "john",
//     friendly: true
// },
// {
//     name: "dave",
//     friendly: false
// }
// ]
// const friends = people.filter(person => !!person.friendly);
// console.log(friends);



// Re-write the following functions to be fat arrow functions:
// function doMathSum(a, b){  
//     return a + b
// }

// ES6
// const doMathSum = (a, b) => a + b;  
//     console.log(doMathSum(5, 6));

// ES6
// var produceProduct = function(a, b){  
//     return a * b
// }

// const produceProduct = (a, b) => a * b;  
//     console.log(produceProduct(2, 20));


// Write a functions that takes a firstName, a lastName, an age and returns a string like the following: 
// Hi Kat Stark, how does it feel to be 40?

// firstName should default to "Jane" 
// lastName should default to "Doe" 
// age should default to 100

// ES6:
// const printInfo = (fName = "Jane", lName = "Doe", age = 100) => {
//     return `Hi ${fName} ${lName}! How does it feel to be ${age}?`
// };
// console.log (printInfo("Kat", "Stark", 40));
  









