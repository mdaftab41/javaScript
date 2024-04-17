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