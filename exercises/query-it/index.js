// example:  
// const database = [  
//     {firstName: "Jack", lastName: "Smith", age: 2},
//     {firstName: "Jill", lastName: "Johnson", age: 20},
//     {firstName: "Jill", lastName: "Smith", age: 100},
//     {firstName: "Jack", lastName: "White", age: 2}
// ];

// filterDatabase({}, database);  
//     //returns entire database array

// filterDatabase({dolphin: "squeak!"}, database);  
//     //returns empty array

// filterDatabase({firstName: "Jack", age: 2}, database);  
//     //returns 
// [
//     {firstName: "Jack", lastName: "Smith", age: 2},
//     {firstName: "Jack", lastName: "White", age: 2}
// ]




const queryIt = (query, datatbase) => {
    //  Loop through database
    return datatbase.filter(item => {
        for (key in query) {
            if (item[key] !== query[key])
                return false;
        }
        return true;
    }
    
// For each iteration, check if it matches the query
// A match is considered one where the key value pairs of the query are ALL included in the database item
// loop through query and check if all key: value pairs match
// if so keep the array, otherwise don't

}

