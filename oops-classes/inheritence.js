const User = {
    name : "Parth Goyal",
    email:"aftab@gmail.com",
    RegNo:1244
}


const Teacher = {
    makeVideo : true,
    lecture : "Every day "
}


const TeacingSuport={
    isAvailable: true ,
    workingHour: 5
}

 const TASupport = {
    makeAssignment : "js assignment ",
    fullTime:true ,
    __proto__:TeacingSuport // inherit property of teaching support  collled prototype Inheritance

 }

 Teacher.__proto__ = User // inherit property of user in teacher called prototype inheritance  

 console.log("Modern syntax of inheritence ");

 Object.setPrototypeOf(TeacingSuport , Teacher);



 // removing white space  using prototype 

let AnotherUser = "          Md Aftab Alam                        ";
String.prototype.trueLength = function(){
    console.log(`${this}`)// give  Md Aftab Alam   
    
    console.log(`True length is : ${this.trim().length}`);
}

AnotherUser.trueLength()
"Parshant".trueLength()
"Parth".trueLength()