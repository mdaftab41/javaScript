const promiseOne = new Promise( function(resolve , reject){
    // Do asyn  task 
    //DB calls , crytography

    setTimeout(function(){
        console.log("asyn task complete");
        resolve()
    },1000)

})

promiseOne.then(function(){
    console.log("promise resolve");
})


// we can do above both step  in single step


new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("asyn task complete");
        resolve()
    },1000)

}).then(function(){
    console.log("asyn2 resolve here");
})

const promiseThree= new Promise(function(resolve , reject){
   setTimeout(function(){
    resolve({username:"Md Aftab" , email:"alam@example.com"})
   } , 1000) 
})

promiseThree.then(function(user){
    console.log(user);
})

// reject  using conditional for ERROR handling
const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Md Aftab" , password:"12345"})
        }else{
            reject('ERROR:Some Thing went Worng')
        }
    })
})

// promiseFour.then().catch()

// chaning of .then()
promiseFour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})

// reject  using conditional for ERROR handling
const promiseFour1 = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Md Aftab" , password:"12345"})
        }else{
            reject('ERROR:Some Thing went Worng')
        }
    })
})

// promiseFour.then().catch()

// chaning of .then()
promiseFour1.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})