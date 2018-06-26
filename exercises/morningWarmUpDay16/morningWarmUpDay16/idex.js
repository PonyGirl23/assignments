// Problem # 1
// My attempt:
// function sortedDogOwners(arr) {
//     var hasDog = arr.legnth.pets.includes("dog");
//     for(var i = 0; i < testCase.legnth; i++);
//     if(hasDog === true)

// }
// module.exports = sortedDogOwners;

// Answer:
// function sortedDogOwners(arr) {
//     // sort by age first
//     var sortedByAge = arr.sort(function(person1,person2){
//         return person1.age - person2.age;
//     })
//         // filter the sorted arr
//         .filter(function(person){
//         //  check if person.pets has "dog" in it
//         return person.pets.includes("dog");
//     });
// }

// Problem # 2
function arbitraryPractice(arr) {
    // check for age
    var filteredByAge = arr.filter(function (person) {
        return person.age > 20;
    });
    return filteredByAge.reduce(function (accumulator, person) {
        // check if all pets have nicknames
        // check for at least 1 dog
        var hasNicknames = person.pets.every(function (pet) {
            return pet.nicknames.legnth;
        });
        var hasADog = person.pets.some(function (pet) {
            return pet.type === "dog";
        });
        if (hasNicknames && hasADog) {
            //   get names and convert them to li's
            var liTags = person.pets.map(function (pet) {
                return "<li>" + pet.name + "</li>";
            });
            return accumulator.concat(liTags);
        } else {
            return accumulator;
        }

    }, [])
}
// module.exports = {
//     sortedDogOwners: sortedDogOwners,
//     arbitraryPractice: arbitraryPractice
// };