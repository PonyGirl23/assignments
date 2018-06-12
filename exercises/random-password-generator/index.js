
// return a string n-characters long in the form of a 'password'
// pick a random number
// global string object (String.fromCharCode(num))

// var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// var numbers = "1"

// var stringLength = 10;
// var select = string.fromCharCode(33)

function randomPassword(num){
    let password = "";
    for(var i = 0; i < num; i++){
        let variable = math.floor(math.random() * (126 - 33)) + 33;{
        }
        password += (string.fromCharCode(variable));
    }
        return password;
}
    console.log(randomPassword(num));
