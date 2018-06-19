// var axios = require("axios");
// var url = "https://api.vschool.io/Nicole/todo/";

// Get post!!!!
// function getTodos() {
//     axios.get(url)
//         .then(function (response) {
//             console.log(response.data);
//             // do stuff with the request as needed
//         })
//         .catch(function (err) {
//             // handle error as needed
//         })
// }
// getTodos();

// Add post!!!!!
// function addTodo(todoItem) {
//     axios.post(url, todoItem)
//         .then(function (response) {
//             console.log(response.data);
//             // do stuff with the request as needed
//         })
//         .catch(function (err) {
//             console.log(err);
//             // handle the error as needed
//         })
// }
// addTodo({
//     title: "teach axios",
//     description: "this"
// });

// Get post by ID!!!!!
// function getTodoById(id) {
//     axios.get(url + id)
//         .then(function (response) {
//             console.log(response.data);
//         })
//         .catch(function (err) {
//             console.log(err);
//         })
// }
// getTodoById("5b241f24eec94d291400b4d4");

// Delete by ID!!!!!
// function deleteTodoById(id) {
//         axios.delete(url + id)
//             .then(function (response) {
//                 console.log(response.data);
//             })
//             .catch(function (err) {
//                 console.log(err);
//             })
//     }
//     deleteTodoById("5b27e8ceeec94d291400b518");

// Edit post by ID!!!!!!
// function editTodoById(id, editedTodo) {
//     axios.put(url + id, editedTodo)
//         .then(function (response) {
//             console.log(response.data);
//         })
//         .catch(function (err) {
//             console.log(err);
//         })
// }
// editTodoById("5b242870eec94d291400b50f", {completed: true});

//  Practice!!!!!!
// function addToDo(todoItem) {
//         axios.post(url, todoItem)
//             .then(function (response) {
//                 console.log(response.data);
//                 // do stuff with the request as needed
//             })
//             .catch(function (err) {
//                 console.log(err);
//                 // handle the error as needed
//             })
//     }
//     addToDo({
//         title: "Learning",
//         description: "Everything"
//     });

// function editToDoById(id, editedToDo){
//     axios.put(url + id, editedToDo)
//     .then(function(response){
//         console.log(response.data);
//     })
//     .catch(function(err){
//         console.log(err);
//     })
// }
// editToDoById("5b27eecceec94d291400b525", {price: 100000000});

// function getToDos(){
//     axios.get(url)
//     .then(function(response){
//         console.log(response.data);
//     })
//     .catch(function(err){
//         console.log(err);
//     })
// }
// getToDos();

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


            