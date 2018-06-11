form.elemnts[3].addEventListener('click', function(e) { 
    e.preventDefault();
    var output = {};
    output.goombas = document.getElementById('goombas').value
    output.bobOms = document.getElementById('bobOms').value;
    output.cheepCheeps = document.getElementById('cheepCheeps').value
    document.getElementById('total').innerHtml += output.goombas + output.bobOms + output.cheepCheeps;
});


// var form = document.forms[0];

// form.elements[3].addEventListener("click", function(e){
//     e.preventDefault();
//     var x = Number(document.getElementById("goombas").value) + Number(document.getElementById("bobOms").value) + Number(document.getElementById("cheepCheep").value); 
//     document.getElementById("total").innerHTML += x; 
// });

