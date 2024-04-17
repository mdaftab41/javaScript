const promiseOne = new Promise( function(resolve , reject){
    // Do asyn  task 
    //DB calls , crytography ,network

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
        let error = false;
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
}).finally(()=>{
    console.log("The promise is either resolved or reject")// .finally massage is use to give final massage 
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
}).finally(()=>{
    console.log("The promise is either resolved or reject")// .finally massage is use to give final massage 
})

// async  await in place of .then().catch()

console.log ("promiseFive Start here");

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Md Aftab" , password:"12345"})
        }else{
            reject('ERROR:Some Thing went Worng')
        }
    })
});
// async   await  not handle error directly
// async function consumeFive(){
//    const consume = await promiseFive;
//    console.log(consume) ;
// }
async function consumeFive(){
  try {
    const consume = await promiseFive;
   console.log(consume) ;
} catch (error){
    console.log(error);
}
}
consumeFive();// function call
