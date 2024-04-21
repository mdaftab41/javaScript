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
console.log("constructer function ")

function User( username , loginCount , isLoggedIn ){
    this.username= username ,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn
    // we return the this to pass object if you not pass this then it pass a empty object
   // return this
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