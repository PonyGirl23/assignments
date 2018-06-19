// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         var jsonData = xhr.responseText;
//         var jsData = JSON.parse(jsonData);
//         var h1 = document.createElement("h1");
//         h1.innerHTML = jsData.title;
//         var body = document.querySelector("body");
//         body.appendChild(h1);

//     }
// }
// xhr.open("GEt","https://api.vschool.io/Nicole/todo/5b241f24eec94d291400b4d4",true);
// xhr.send();
// console.log("Hello");

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function parsePokemon() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = xhr.responseText;
        var jsData = JSON.parse(jsonData);
        var body = document.querySelector("body");
        var pokemon = jsData.objects[0].pokemon;
        for (var i = 0; i < pokemon.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = pokemon[i].name;
            body.appendChild(div);
        }
    }
};
xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();