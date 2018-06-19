// var str1 = "aaacodebbb";
// var str2 = "codexxcode";
// var str3 = "cozexxcope";

// var arr1 = convert();

// function convert(){
//     //  aar1 = [" "];
//     for(var i = 0; i < str1.legnth; i++);
//     let arr1 = str.split();
//     return arr1;
// };
// console.log(arr1);
//str.match() or use regex


// function sum(x , y){
//     if(typeof x !== "number" || typeof y !== "number"){
//         throw new TypeError("inputs must be numbers");
//     }
//     return x + y;
// } 

// try{
//   sum("x","y");
// }catch(err){
//     console.log(err.message);
// }

// function sum(x , y){
//     if(typeof x !== "number" || typeof y !== "number"){
//         throw new TypeError("inputs must be numbers");
//     }
//     return x + y;
// } 

// try{
//   sum("1","2");
// }catch(err){
//     console.log(err.message);
// }

// var user = {
//     username: "sam",
//     password: "123abc",
// };
// function login(username, password){
//     if(username !== "sam"){  
//         throw new TypeError("username doesn't match");
//     }else if(password !== "123abc"){
//         throw new TypeError("password doesn't match");
//     }else{
//         console.log("login successful!");
//     }

// }
// try{
//     login("sam","223abc");
// }catch(err){
//          console.log(err.message);
// }


function User(username,password){
    this.name = username;
    this.secret = password;
};
var newUser = new User("sam","123abc");
var users = [newUser];

//created a user
// call login with credentials

var login = function (username, password){
        // check if username exists on one of the users in users array.
        // if no, then throw error
        // if yes, two possibilities:
            //password is correct
                //login successful
            // password is wrong
                //throw error
        if(this.name !== "username"){  
            throw new TypeError("username doesn't match");
        }else if(this.secret !== "password"){
            throw new TypeError("password doesn't match");
        }else{
            console.log("login successful!");
        }
    
    }
    try{
        User(clients());
    }catch(err){
             console.log(err.message);
    }
    
