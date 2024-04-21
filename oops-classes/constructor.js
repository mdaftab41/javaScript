const user = {
    username : "aftab alam",
    signedIn : true,
    loginCount : 8 ,
    getUserDetail: function (){
    console.log("Got user details from databs");
    // this keyword: we use this in current context 
    console.log(`Username: ${this.username}`)
   // printing current context 
   console.log( "current context")
    console.log(this)


    }

}
console.log(user.username);
console.log(user.getUserDetail());
// this in global context 
console.log(this)

// constructer function 
// constructor function give new instance each time 
console.log("constructer function ")

function User( username , loginCount , isLoggedIn ){
    this.username= username ,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn
    // we return the this to pass object if you not pass this then it pass a empty object
    return this
}
// user2 overwrite the value of user two so we use newKeyword

// const userOne =User("Alam", 13,true)
// const user2 = User("Aftab" , 11, false)
// console.log(userOne)
console.log("using new keyword for new instance");
// for new instance we use new keyword
// here user2 not overwrite the value of user two 
const userOne = new User("Alam", 13,true)
const user2 = new User("Aftab" , 11, false)
console.log(userOne)
console.log(user2)

// we also write a function and methode 
function userDetail( username , loginCount , isLoggedIn ){
    this.username= username ,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn,
    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }
    // we return the this to pass object if you not pass this then it pass a empty object
    return this
}
const user3 = new userDetail("Md Aftab alam", 13,true)
const user4 = new userDetail("Parshant Malik" , 11, false)
console.log(user3.constructor) // constructor is reference of itself
console.log(user4)

//In JavaScript, the instanceof operator is used to check whether an object is an instance of a particular class or constructor function.
// It returns true if the object is an instance of the specified constructor, otherwise, it returns false.
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);


  class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  }
  
  let dog = new Dog('Buddy', 'Golden Retriever');
  
  console.log(dog instanceof Dog);     // true
  console.log(dog instanceof Animal);  // true, because Dog extends Animal
  console.log(dog instanceof Object);  // true, because all objects inherit from Object
  console.log(dog instanceof Array);   // false
  


  // new example from mixBlendMode: 
  class Polygon {
    constructor() {
      this.name = "Polygon";
    }
  }
  
  class Rectangle {
    constructor() {
      this.name = "Rectangle";
    }
  }
  
  class Square extends Polygon {
    constructor() {
      super();
    }
  }
  
  // Make Square extend Rectangle (which is a base class) instead of Polygon
  Object.setPrototypeOf(Square, Rectangle);
  
  const newInstance = new Square();
  
  // newInstance is still an instance of Polygon, because we didn't
  // change the prototype of Square.prototype, so the prototype chain
  // of newInstance is still
  //   newInstance --> Square.prototype --> Polygon.prototype
  console.log(newInstance instanceof Polygon); // true
  console.log(newInstance instanceof Rectangle); // false
  
  // However, because super() calls Rectangle as constructor, the name property
  // of newInstance is initialized with the logic in Rectangle
  console.log(newInstance.name); // Rectangle
  