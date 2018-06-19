
var people = ([
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    }, {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    }, {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    }, {
        firstName: "Morty",
        lastName: "Smith",
        age: 13
    }, {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    }
]);

function sortByLastNameFilterByAge(arr) {
    return arr.sort(function (person1, person2) {
        return person1.lastName.localeCompare(person2.lastName);
    })
        .filter(function (person) {
            return person.age >= 18;
        })
}

console.log(sortByLastNameFilterByAge(people));

