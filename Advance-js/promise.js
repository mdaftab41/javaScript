const promiseOne = new Promise( function(resolve , reject){
    // Do asyn  task 
    //DB calls , crytography

    setTimeout(function(){
        console.log("asyn task complete");
        resolve()
    },1000)

})

promiseOne.then(function(){
    console.log("promise resome");
})