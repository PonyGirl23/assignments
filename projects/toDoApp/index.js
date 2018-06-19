// To Do App!!!!!
// Get the elements you need and store them in a variable
var section = document.querySelector("section");
var form = document.querySelector("form");

// Make a get request using Axios
var url = "https://api.vschool.io/Nicole/todo/";

var displayToDo = function (todo) {
    // make wrapper
    var wrapper = document.createElement("div");

    // make header
    var h3 = document.createElement("h3");
    h3.innerHTML = todo.title;

    // make description
    var descP = document.createElement("p");
    descP.innerHTML = todo.description;

    // make price
    var priceP = document.createElement("p");
    priceP.innerHTML = todo.price;

    // make check box
    var label = document.createElement("label");
    label.innerHTML = "Completed";

    var input = document.createElement("input");
    input.type = "checkbox";
    label.appendChild(input);

    // make delete button



    // append all the changes to the wrapper
    wrapper.appendChild(h3);
wrapper.appendChild(descP);
wrapper.appendChild(priceP);
wrapper.appendChild(label);

        // append them to the section
        section.appendChild(wrapper);
}

axios.get(url)
    .then(function (response) {
        // convert data into html elements
        var todos = response.data;
        todos.forEach(displayTodo);
    })

        .catch (function (err) {
    console.log(err);
})

form.addEventListener("submit", function (e) {
    // store input values in a todo object
var inputValue = document.createElement("div");
inputValue.innerHTML = 
    // post the todo using axios

    // call the disply todo function with response data
})


            