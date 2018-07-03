var rs = require("readline-sync");

function Player(pName, pItem = "sword", pHP = 100, pCHP = 100, pATP = Math.floor(Math.random() * 75)) {
    this.pName = pName;
    this.pItem = pItem;
    this.pHP = pHP;
    this.pCHP = pCHP;
    this.pATP = pATP;
    return {
        pName,
        pItem,
        pHP,
        pCHP,
        pATP,
    }
};

let user = rs.question("Hello player, what is your name? ");
console.log("Hello " + user + " Let's begin!");

let player1 = new Player(user);
console.log(player1)

var isEnemy = {
    yes: "Out of the forest comes a terrifying warrior!!",
    no: "It's eerily quite in this part of the woods, you should keep walking."
};

function checkForEnemy() {
    var checkForE = Math.floor((Math.random() * 3) + 1);
    return checkForE;
};

function Enemy(eName, eItem, eHP = 100, eCHP = 100, eATP = Math.floor(Math.random() * 75)) {
    this.eName = eName;
    this.eItem = eItem;
    this.eHP = eHP;
    this.eCHP = eCHP;
    this.eATP = eATP;
    return {
        eName,
        eItem,
        eHP,
        eCHP,
        eATP
    }
};

function generateEnemy() {
    var names = ["Defecto", "Creeper", "Gnar"];
    var items = ["Evil Magic", "Invisibility Cloak", "Double-Headed Axe"];
    var enemy = new Enemy(names[Math.floor(Math.random() * names.length)], items[Math.floor(Math.random() * items.length)]);
    return {
        names,
        items,
        enemy,
    }
};
// var playerCHP = 

// Player.prototype.pCurrentHP = function () {
//     this.pCHP = Enemy.eATP - Player.pHP;
//     return this.pCHP;
// }
// console.log(this.pCHP);

// Enemy.prototype.eCurrentHP = function () {
//     this.eCHP = Player.pATP - Enemy.eHP;
//     return this.eCHP;
// }
// console.log(this.eCHP);

function genFight(genE) {
    var fight = true;
    while (fight) {
        console.log("hello");
        player1.pCHP = genE.eATP - player1.pHP;
        genE.eCHP = player1.pATP - genE.eHP;
        if (player1.pCHP >= 1 && player1.pChp > genE.eCHP) 
            console.log(winning.p);
        } else if {
            (genE.eCHP >= 1 && genE.eCHP > player1.pChp);
        console.log(winning.e);
    } else {
        (player1.pCHP <= 0 || genE.eCHP <= 0)
        fight = !fight;
    }
};

var winning = {
    p: " ,you are clearly superior!",
    e: " , is crushing you!!"
}
var outcome = {
    pDead: "You have been slaughtered!!",
    eDead: "You have vanquished the enemy!!"
}


// Game:
var win = false;
while (true) {
    walking = ["w"];
    isWalking = rs.keyInSelect(walking, "Press 'W' to begin walking");
    if (isWalking === 0) {
        let checkForE = checkForEnemy();
        if (checkForE <= 2) {
            console.log(isEnemy.yes);
            var enemyYes = true;
            while (enemyYes) {
                var options = ["Fight like a fierce gladiator", "Run like a coward"];
                var choice = rs.keyInSelect(options, "What fate do you choose?");
                if (choice === 0) {
                    // commence fight sequence
                    let genE = generateEnemy();
                    console.log("You shiver as " + genE.eName + ", the harbinger of death appears with his " + genE.eItem + " to kill you! " + player1.pName + " get your sword ready to fight for your life!!!");


                    genFight(genE);
                    enemyYes = !enemyYes;


                    //     while enemy hp > 0 AND player hp  > 0 {
                    //     subtract damage from player
                    //     subtract damage from enemy
                    //     }
                    //     AFTER loop, check the damages
                    //     if player hp is < 0 BREAK and lose
                    //     else continue on

                }
            }
        }
    }
}
