//ES6
// you can add function and property inside class
class UserDetail {
    constructor(username , email ,password){
        this.username=username,
        this.email= email,
        this.password = password
    }

    // encryption of password 
    encryptPasword(){
       // return this.password
        return `ffbfdbf${this.password}abc12@31#`
    }

}
const user1 = new UserDetail( " Aftab" , "aftab123@gmail.com" , "123");
console.log(user1)
console.log(user1.encryptPasword())


console.log("user class ")

// Adding some methode
class User {
    constructor(username , email ,password){
        this.username=username,
        this.email= email,
        this.password = password
    }

    // encryption of password 
    encryptPasword(){
       // return this.password
        return `ffbfdbf${this.password}abc12@31#`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}
const user2 = new User( " Aftab" , "aftab123@gmail.com" , "123");
//console.log(user1)
console.log(user2.encryptPasword())
console.log(user2.changeUsername())

// Behind the  scene 
function allUser(username , email ,password){
    this.username=username,
    this.email= email,
    this.password = password
}
 allUser.prototype.encryptPasword = function(){
     return `ffbfdbf${this.password}abc12@31#`
 }
 allUser.prototype.changeUsername = function (){
    return `${this.username.toUpperCase()}`
}

const user3 = new allUser( " md aftab alam" , "aftab123@gmail.com" , "567654");
//console.log(user1)
console.log(user3.encryptPasword())
console.log(user3.changeUsername())


//Class Expression
class Animals {
    constructor(type) {
      this.type = type;
    }
  
    sound() {
      console.log("Sound");
    }
  }
  
  // Creating an instance of the class
  const cat = new Animals("mammal");
  
  // Accessing Properties and Methods
  console.log(cat.type); // Output: mammal
  cat.sound(); // Output: Sound

  

//Using Prototype with Classes
class Animal1 {
    constructor(type) {
      this.type = type;
    }
  
    sound() {
      console.log("Sound");
    }
  }
 
  // Creating an instance of the class
  const dog = new Animal1("mammal");
  
  // Accessing Properties and Methods
  console.log(dog.type); // Output: mammal
  dog.sound(); // Output: Sound
  
  // Prototype Chain
  console.log(dog.hasOwnProperty("type")); // Output: true
  console.log(dog.hasOwnProperty("sound")); // Output: false



//Inheritance with Classes
class Animal {
    constructor(type) {
      this.type = type;
    }
  
    sound() {
      console.log("Sound");
    }
  }
  
  class Dog extends Animal {
    constructor(type, breed) {
      super(type);
      this.breed = breed;
    }
  }
  
  // Creating an instance of the subclass
  const myDog = new Dog("mammal", "Labrador");
  
  // Accessing Properties and Methods
  console.log(myDog.type); // Output: mammal
  console.log(myDog.breed); // Output: Labrador
  myDog.sound(); // Output: Sound
  