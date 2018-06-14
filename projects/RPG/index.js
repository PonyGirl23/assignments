var rs = require("readline-sync");

var userName = rs.question("Hello player, what is your name? ")
    console.log("Hello" + userName + "Let's begin!");

var isEnemy = {
    yes: "Oh no, here come a fierce enemy!!",
    no: "Looks like it's quite in this part of town, you should keep walking."
};
function checkForEnemy(){
    var e = Math.floor((Math.random() * 3) + 1);
    return e;
};
var enemyName = ["Defecto", "Creeper", "Gnar"];

function GenerateEnemy(){

};
function enemy(){

};

var win = false;
while(true){
    walking = ["w"];
    isWalking = rs.keyInSelect(walking, "Press 'W' to begin walking");
        if(isWalking === 0){
            let e = checkForEnemy();
             if(e <= 2) {
                console.log(isEnemy.yes);
                // continue;

            } else if (e === 3){
                console.log(isEnemy.no);
            }

            
        }
}