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
//inserting prototype in object to access same property   in all
Object.prototype.Aftab = function() { 
 console.log(`Aftab is present in all object `);
}

heroPower.Aftab();

console.log("array as object");
myHero.Aftab();//array as object 

//inserting prototype in Array  only accessible by array not by object
Array.prototype.mdAlam = function(){
    console.log("mdAlam is present in all");
}

myHero.mdAlam()
//heroPower.mdAlam() // no access  


// removing white space  using prototype 

let AnotherUser = "          Md Aftab Alam                        ";
String.prototype.trueLength = function(){
    console.log(`${this}`)// give  Md Aftab Alam   
    
    console.log(`True length is : ${this.trim().length}`);
}

AnotherUser.trueLength()
"Parshant".trueLength()
"Parth".trueLength()