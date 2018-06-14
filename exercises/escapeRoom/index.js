var rs = require("readline-sync");

var userName = rs.question("What is your name? ");
console.log("Hello " + userName + ", welcome to the Escape Room!!! If you're quick witted you might leave! Here are your options:");

var fate1 = {
    hole: "You just died a slow painful death, I guess wit wasn't your strong point!",
    key: "Where woud you like to look?",
    door: "Uh, you need the key first.",
    cancel: "You're so lame!!!",
};
var fate2 = {
    desk: "Nothing in here but paper.",
    armoir: "Nice try, you can't escape to Narnia. Mr. Tumnus doesn't like you enough to open the portal...",
    bed: "Don't you know boogie men hide under beds, what were you thinking? Now your dead!",
    birdCage: "Luckily the vampire bird is taking a nap and didn't bite you!! You find the key on the bottom of the cage. You are lucky to escape with your life!",

};
var keyFound = false;
while (true) {
    choice = ["Put your hand in the hole, if you dare...", "Look around the room for the key.", "Open the door.", "I give up."];
    index = rs.keyInSelect(choice, "What fate do you choose?");
    if (index === 0) {
        console.log(fate1.hole);
    } else if (index === 1) {
        console.log(fate1.key);
        var isLooking = true;
        while (isLooking) {
            var look = ["Look in the desk?", "Look in the the large armoir ?", "Look under the bed?", "Look in the bird cage?"];
            var quest = rs.keyInSelect(look, "What fate do you choose?");
            if (quest === 0) {
                console.log(fate2.desk);
            } else if (quest === 1) {
                console.log(fate2.armoir);
            } else if (quest === 2) {
                console.log(fate2.bed);
            } else if (quest === 3) {
                console.log("You found the key!");
                keyFound = true;
                isLooking = false;
            }
        }
    } else if (index === 2) {
        if(keyFound){
            console.log("You win! Escape now before the zombies get you!!!!!");
            break;
        } else {
            console.log(fate1.door);
            continue;
        }

    } else if (index === 3) {
        console.log(fate1.cancel);
        continue;
    }
}