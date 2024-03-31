//  symbol
const mysym = Symbol("key1");
// object 
const jsuser ={
    name:"aftab",
    [mysym]:"key1",
    email:"aftab@gmail.com",
    age:28,
    isLoggedIn:false,
    lastDayLogin:['monday', 'saturday'],
    "fullname":"mdaftabalam"
}
// acceessing the element 
console.log(jsuser.email);
console.log(jsuser['fullname']);
console.log(jsuser[mysym])
// changing the value of object 
jsuser.email="aftabalam1345@gmail.com"
console.log(jsuser);
//Object.freeze(jsuser);// now we can't change the value
jsuser.name= "parth goyal"
console.log(jsuser)


jsuser.greeting =function(){
    console.log("Hello user");
}
console.log(jsuser.greeting());
jsuser.greeting2 =function(){
    console.log(`Hello user , ${this.name}`);

}
console.log(jsuser.greeting2());



