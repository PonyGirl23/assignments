// actual program goes here
// isPalindrome("Star Rats!");  // true  
// isPalindrome("palindrome");  // false  
// str = ("I madam, I made radio! So I dared! Am I mad?? Am I?!");  // true  

// function palindromeFinder(str) {
//     var rmvChar = str.toLowerCase().replace(/[^a-z]/g, "");
//     var checkPalinD = rmvChar.split("").reverse().join("");
//     if (rmvChar === checkPalinD) {
//         return true;
//     } else {
//         return false;
//     }
// }
// module.exports = palindromeFinder;

// Done with less code
// function palindromeFinder(str) {
//     var rmvChar = str.toLowerCase().replace(/[^a-z]/g, "");
//     var checkPalinD = rmvChar.split("").reverse().join("");
//     return rmvChar === checkPalinD;
// }
// module.exports = palindromeFinder;

// Another way to do it 
// function palindromeFinder(str) {
//         var rmvChar = str.toLowerCase().replace(/[^a-z]/g, "");
//         for(var i = 0; i < rmvChar.length / 2; i++){
//             if(rmvChar[i] !== rmvChar[rmvChar.length - 1 -i]) return false;
//         }
//         return true;
//     }
    
    // module.exports = palindromeFinder;