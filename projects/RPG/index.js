var rs = require("readline-sync");

var userName = rs.question("Hello player, what is your name? ")
console.log("Hello " + userName + " Let's begin!");

var isEnemy = {
    yes: "Oh no, here come a fierce enemy!!",
    no: "Looks like it's quite in this part of town, you should keep walking."
};

function checkForEnemy() {
    var checkForE = Math.floor((Math.random() * 3) + 1);
    return checkForE;
};


function Enemy(eName, eItem) {
    this.eName = eName;
    this.eItem = eItem;
    this.eHP = 100;
};

function generateEnemy() {
    // var genEnemy = Math.floor((Math.random(Enemy[i]) * 3) + 1);
    var names = ["Defecto", "Creeper", "Gnar"];
    var items = ["Sword", "Invisibility Cloak", "Double-Headed Axe"];
    var enemy = new Enemy(names[Math.floor(Math.random() * names.length)], items[Math.floor(Math.random() * items.length)]);
    return enemy;
};



var win = false;
while (true) {
    walking = ["w"];
    isWalking = rs.keyInSelect(walking, "Press 'W' to begin walking");
    if (isWalking === 0) {
        let checkForE = checkForEnemy();
        if (checkForE <= 2) {
            var enemy = generateEnemy();
            console.log(isEnemy.yes);
            var enemyYes = true;
            while (enemyYes) {
                var options = ["Fight like a fierce warrior", "Run like a coward"];
                var choice = rs.keyInSelect(options, "What fate do you choose?");
                if (choice === 0) {
                    // commence fight sequence
                } else {
                    // commence run sequence
                }
            }
            // continue;

        } 
        // else if (checkE === 3) {
        //     console.log(isEnemy.no);
        // }


    }
}