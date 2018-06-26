var rs = require("readline-sync");

// function Player(pName, item = "sword") {
//     this.pName = pName;
//     this.pItem = item;
//     this.pHtP = 100;
//     this.pAtP = Math.floor(Math.random() * 75);
//     return pAtP;
// };
// console.log(Player(this.pAtP)

// let user = rs.question("Hello player, what is your name? ");
// console.log("Hello " + user + " Let's begin!");

// let player1 = new Player(user);

// var isEnemy = {
//     yes: "Out of the forest comes a terrifying warrior!!",
//     no: "It's eerily quite in this part of the woods, you should keep walking."
// };

// function checkForEnemy() {
//     var checkForE = Math.floor((Math.random() * 3) + 1);
//     return checkForE;
// };

function Enemy(eName, eItem) {
    this.eName = eName;
    this.eItem = eItem;
    this.eHtP = 100;
    this.eAtP = Math.floor(Math.random() * 75);
        return eAtP;
};
console.log(Enemy(this.eAtP)

// function generateEnemy() {
//     var names = ["Defecto", "Creeper", "Gnar"];
//     var items = ["Evil Magic", "Invisibility Cloak", "Double-Headed Axe"];
//     var enemy = new Enemy(names[Math.floor(Math.random() * names.length)], items[Math.floor(Math.random() * items.length)]);
//     return enemy;
// };

// function genFight() {
//     var pHit = Math.floor(Math.random() * 100);
//     var eHit = Math.floor(Math.random() * 100);
//     return pHit 
    
// var pDead = "You have been slaughtered!!";
    // var eDead = "You have vanquished the enemy!!";
    // if (pHit > eHit && pHit > 0) {
    //     return pHit;
    // } else if (pHit < 0) {
    //     return pDead;
    // } else if (eHit > pHit && eHit > 0) {
    //     return eHit;
    // } else if (eHit < 0) {
    //     return eDead;
    // }
// };

// var winning = {
//     p: " ,you are clearly superior!",
//     e: " , is crushing you!!"
// }

// Game:
// var win = false;
// while (true) {
//     walking = ["w"];
//     isWalking = rs.keyInSelect(walking, "Press 'W' to begin walking");
//     if (isWalking === 0) {
//         let checkForE = checkForEnemy();
//         if (checkForE <= 2) {
//             console.log(isEnemy.yes);
//             var enemyYes = true;
//             while (enemyYes) {
//                 var options = ["Fight like a fierce gladiator", "Run like a coward"];
//                 var choice = rs.keyInSelect(options, "What fate do you choose?");
//                 if (choice === 0) {
                    // commence fight sequence
                    // let genE = generateEnemy();
                    // console.log("You shiver as " + genE.eName + ", the harbinger of death appears with his " + genE.eItem + " to kill you! " + player1.pName + " get your sword ready to fight for your life!!!");
                    // // var fighting = true;
                    // while (true) {

                    // }
                        // while enemy hp > 0 AND player hp  > 0 {
                        // subtract damage from player
                        // subtract damage from enemy
                        // }
                        // AFTER loop, check the damages
                        // if player hp is < 0 BREAK and lose
                        // else continue on

                    //     let fSequence = genFight();
                    // // if (fSequence === pHit) {
                    // if (fSequence === genFight.pHit) {
                    //     console.log(winning.p);
                    //     // } else if (fSequence === ehit) {
                    // } else if (fSequence === genFight.eHit) {
                    //     console.log(winning.e);
                    // } else if (fSequence === genFight.pDead) {
                    //     console.log(pDead);
                    // } else if (fSequence === genFight.eDead) {
                    //     console.log(eDead);
                    // }
                    // if (){

    //             }
    //             // console.log();
    //             // let genF = generateFight()
    //             // console.log("")


    //             // } else {
    //             // commence run sequence
    //         }
    //     }
    //     // continue;

    // };
    // else if (checkE === 3) {
    //     console.log(isEnemy.no);
    // }
// }

    // check for win or loss value

)
