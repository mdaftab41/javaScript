const user = {
    username : "aftab alam",
    signedIn : true,
    loginCount : 8 ,
    getUserDetail: function (){
    console.log("Got user details from databs");
    // this keyword: we use this in current context 
    console.log(`Username: ${this.username}`)
    }
}
console.log(user.username);
console.log(user.getUserDetail());