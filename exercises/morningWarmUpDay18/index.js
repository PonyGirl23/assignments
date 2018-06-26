// class Ambassador{
//     constructor(){
//         this.messages = ["test","message","here"];
//         this.translations = [];
//     }
//     translate(){
//         this.messages.forEach(str => {
//         this.translations.push(str.toUpperCase());
//     })
//     console.log(this.translations);
//     }
// }
// const ambassador = new Ambassador();

// ambassador.translate();

// const ambassador = {
//     messages: ["test","message","here"],
//     translations(){
//         this.messages.forEach(str => {
//                     this.translations.push(str.toUpperCase());
//     })
// }
// }
// ambassador.translate()

const matchWords = str => { 
// remove special characters and capitols
const noSpecial = str.replace(/[^a-z\s]/gi," ").toLowerCase();
// split string
const splitted = noSpecial.split(" ");
const sorter = {};
const output = [];
//  loop through the array
splitted.forEach(word => {
    if(sorter.hasOwnProperty(word) || !output.includes(word))
    {
        output.push(word);
    } else {
        sorter[word] = true;
    }
});
// check our object to see if it already has a property with that string name
// if so, add to duplicates to array
// if not, set string as a key on the object
// return duplicate array
return output;
}

matchWords("tes, teSt, test")
module.exports = matchWords;