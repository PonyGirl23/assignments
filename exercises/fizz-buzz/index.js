// var num = ([])
function fizzBuzz(){
    var array = [];
    for (var i = 0; i < 101; i++){
        if (i % 3 === 0){
            array.push("fizz");
        } else if (i % 5 === 0){
            array.push("buzz");
        } else if (i % 15 === 0){
            array.push("fizzBuzz");
        } else {
            array.push(i);
        }
    }
    return array;
}
console.log(fizzBuzz());
