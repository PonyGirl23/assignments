var rs = require("readline-sync");

function Player(pName, pHP = 100, pCHP = 100, pATP = Math.floor(Math.random() * 75)) {
    this.pName = pName;
    this.pItem = 'sword';
    this.pHP = pHP;
    this.pCHP = pCHP;
    this.pATP = pATP;
    this.winPoints = 0;
    this.alive = true;
};

let user = rs.question("Hello player, what is your name? ");
console.log("Hello " + user + " Let's begin!");

let player1 = new Player(user);

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
    
};

function generateEnemy() {
    var names = ["Defecto", "Creeper", "Gnar"];
    var items = ["Evil Magic", "Invisibility Cloak", "Double-Headed Axe"];
    var enemy = new Enemy(names[Math.floor(Math.random() * names.length)], items[Math.floor(Math.random() * items.length)]);
    return enemy;
};

function genFight(genE) {
    var fight = true;
    while (fight) {
        player1.pCHP = player1.pCHP - genE.eATP;
        genE.eCHP = genE.eCHP - player1.pATP;
        if (player1.pCHP > genE.eCHP && genE.eCHP > 0) {
            console.log(`${player1.pName} is destroying ${genE.eName} \n ${player1.pName} has ${player1.pCHP} points remaining and ${genE.eName} has ${genE.eCHP} points remaining `)
        } else if (genE.eCHP > player1.pCHP && player1.pCHP >= 0) {
            console.log(`${genE.eName} is destroying ${player1.pName} \n ${genE.eName} has ${genE.eCHP} points remaining and ${player1.pName} has ${player1.pCHP} points remaining `)
        } else if (player1.pCHP <= 0 || genE.eCHP <= 0) {
            if (genE.eCHP <= 0) {
                console.log(outcome.eDead)
                player1.winPoints++
                fight = false;
            } else{
                console.log(outcome.pDead)
                player1.alive = false;
                fight = false;
            }
        }
    }
}

var outcome = {
    pDead: "You have been slaughtered!!",
    eDead: "You have vanquished the enemy!!"
}


// Game:
while (player1.winPoints < 3 && player1.alive) {
    walking = ["w"];
    isWalking = rs.keyInSelect(walking, "Press 1 to begin walking");
    if (isWalking === 0) {
        let checkForE = checkForEnemy();
        if (checkForE <= 2) {
            console.log(isEnemy.yes);
            var enemyLives = true;
            while (enemyLives) {
                var options = ["Fight like a fierce gladiator", "Run like a coward"];
                var choice = rs.keyInSelect(options, "What fate do you choose?");
                if (choice === 0) {
                    // commence fight sequence
                    let genE = generateEnemy();
                    console.log("You shiver as " + genE.eName + ", the harbinger of death appears with his " + genE.eItem + " to kill you! " + player1.pName + " get your sword ready to fight for your life!!!");
                    genFight(genE);
                    enemyLives = false;
                }
            }
        }
    }
}

