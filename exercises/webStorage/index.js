localStorage.setItem("foo", "bar"); 
localStorage.setItem("myName", "Nicole");

var myFavPlace = {
    name: "Capitol Reef Ntl Park",
    location: "Southern Utah"
}

localStorage.setItem("myFavPplace", JSON.stringify(myFavPlace));
localStorage.setItem("primes", JSON.stringify([2,3,5,7,11]));
// localStorage.setItem("primes", [2,3,5,7,11]);

var foo = localStorage.getItem("foo");
console.log(typeof foo);

var myName = localStorage.getItem("myName");
console.log(typeof myName);

var myFavPlaceStored = localStorage.getItem("myFavPlace");
console.log(myFavPlaceStored);

// var primesStored = localStorage.getItem("primes");
// console.log(primesStored);

var primesStored = localStorage.getItem("primes");
console.log(JSON.parse(primesStored));
// You don't have to JSON.stringify primitive data types in order to parse it 
// but you must JSON.stringify a complex data type in order to parse it later
