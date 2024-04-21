const user = {
    username : "aftab alam",
    signedIn : true,
    loginCount : 8 ,
    getUserDetail: function (){
    console.log("Got user details from databs");
    // this keyword: we use this in current context 
    console.log(`Username: ${this.username}`)
   // printing current context 
   console.log( "current context")
    console.log(this)


    }

}
console.log(user.username);
console.log(user.getUserDetail());
// this in global context 
console.log(this)

// constructer function 
// constructor function give new instance each time 
console.log("constructer function ")

function User( username , loginCount , isLoggedIn ){
    this.username= username ,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn
    // we return the this to pass object if you not pass this then it pass a empty object
    return this
}
// user2 overwrite the value of user two so we use newKeyword

// const userOne =User("Alam", 13,true)
// const user2 = User("Aftab" , 11, false)
// console.log(userOne)
console.log("using new keyword for new instance");
// for new instance we use new keyword
// here user2 not overwrite the value of user two 
const userOne = new User("Alam", 13,true)
const user2 = new User("Aftab" , 11, false)
console.log(userOne)
console.log(user2)

// we also write a function and methode 
function userDetail( username , loginCount , isLoggedIn ){
    this.username= username ,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn,
    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }
    // we return the this to pass object if you not pass this then it pass a empty object
    return this
}
const user3 = new userDetail("Md Aftab alam", 13,true)
const user4 = new userDetail("Parshant Malik" , 11, false)
console.log(user3.constructor) // constructor is reference of itself
console.log(user4)