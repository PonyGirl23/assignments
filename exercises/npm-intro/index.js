CALCULATOR:
var rs = require("readline-sync");

var x = rs.question("input number 1: ");
var y = rs.question("input number 2: ");
var operator = {
    add: function(){
        let total = Number(x) + Number(y);
        return total;
},  
    subtract: function(){
        let total = Number(x) - Number(y);
        return total;
},
    multiply: function(){
        let total = Number(x) * Number(y);
        return total;
},
    divide: function(){
        let total = Number(x) / Number(y);
        return total;
}};
choice = ["add","subtract","multiply","divide"];
index = rs.keyInSelect(choice, "Which function would you like to perform?");
    if (index === 0){
        console.log(operator.add());
    }else if(index === 1){
        console.log(operator.subtract());  
    }else if(index === 2){
        console.log(operator.multiply());
    }else if(index === 3){ 
        console.log(operator.divide());
    }else{  
        console.log(cancel);  
 }
 