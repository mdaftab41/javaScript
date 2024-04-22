class User {
    constructor(username){
        this.username= username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username , email , password){
        super(username),
        this.email = email,
        this.password= password
    }
    addCourse(){
        console.log(`This course is added by ${this.username}`)
    }
}
// calling child class to inherite the username  property of the parent class
const user1 = new Teacher("Aftab Alam" , "alam124@gmail.com" ," 3497") 
user1.addCourse();
user1.logMe();
// calling parents class 
const user2 = new User("Aftab Alam")
user2.logMe()// not have access of password , email of child class 

console.log(user1===user2)
console.log(user1===Teacher)
console.log(user1 instanceof Teacher) // to cheak the instance of any constructor 
console.log(user1 instanceof User) 

/*The extends keyword provides a more straightforward and cleaner way to implement inheritance in JavaScript.
 Let's rewrite the previous example using the extends keyword: */
 // Parent class
class Animal {
    constructor(type) {
      this.type = type;
    }
  
    sound() {
      console.log("Sound");
    }
  }
  
  // Child class inheriting from the parent class
  class Dog extends Animal {
    constructor(type, breed) {
      super(type);
      this.breed = breed;
    }
  
    bark() {
      console.log("Bark");
    }
  }
  
  // Creating an instance of the child class
  const myDog = new Dog("mammal", "Labrador");
  
  // Accessing Properties and Methods
  console.log(myDog.type); // Output: mammal
  console.log(myDog.breed); // Output: Labrador
  myDog.sound(); // Output: Sound
  myDog.bark(); // Output: Bark
  
  // Prototype Chain
  console.log(myDog.hasOwnProperty("type")); // Output: true
  console.log(myDog.hasOwnProperty("sound")); // Output: false

  

  /* inheritance can be achieved using prototypes.
   It's a concept based on delegation, where an object inherits properties and methods from another object.
   Let's go through an example to understand how inheritance works in JavaScript */
   // Parent class
function Animal1(type) {
    this.type = type;
  }
  
  // Method added to the prototype of the parent class
  Animal1.prototype.sound = function () {
    console.log("Sound");
  };
  
  // Child class inheriting from the parent class
  function Dog1(type, breed) {
    // Inheriting the 'type' property from the parent class
    Animal1.call(this, type);
    this.breed = breed;
  }
  
  // Assigning the parent class's prototype to the child class to inherit its methods
  Dog1.prototype = Object.create(Animal1.prototype);
  Dog1.prototype.constructor = Dog1;
  
  // Adding a method to the child class
  Dog1.prototype.bark = function () {
    console.log("Bark");
  };
  
  // Creating an instance of the child class
  const myDog1 = new Dog1("mammal", "Labrador");
  
  // Accessing Properties and Methods
  console.log(myDog1.type); // Output: mammal
  console.log(myDog1.breed); // Output: Labrador
  myDog1.sound(); // Output: Sound
  myDog1.bark(); // Output: Bark
  
  // Prototype Chain
  console.log(myDog1.hasOwnProperty("type")); // Output: true
  console.log(myDog1.hasOwnProperty("sound")); // Output: false
  