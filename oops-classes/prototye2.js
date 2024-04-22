let myName = "Aftab Alam    "
console.log(myName.trim().length)// use to remove white space of end and starting 

let myHero = ["Parshant " , "Parth"]
let heroPower = {
    thor:"Hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.Aftab = function() { 
 console.log(`Aftab is present in all object `);
}

heroPower.Aftab();

console.log("array as object");
myHero.Aftab();//array as object 