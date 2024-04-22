const User = {
  name: "Parth Goyal",
  email: "aftab@gmail.com",
  RegNo: 1244,
};

const Teacher = {
  makeVideo: true,
  lecture: "Every day ",
};

const TeacingSuport = {
  isAvailable: true,
  workingHour: 5,
};

const TASupport = {
  makeAssignment: "js assignment ",
  fullTime: true,
  __proto__: TeacingSuport, // inherit property of teaching support  collled prototype Inheritance
};

Teacher.__proto__ = User; // inherit property of user in teacher called prototype inheritance

console.log("Modern syntax of inheritence ");

Object.setPrototypeOf(TeacingSuport, Teacher);

// removing white space  using prototype

let AnotherUser = "          Md Aftab Alam                        ";
String.prototype.trueLength = function () {
  console.log(`${this}`); // give  Md Aftab Alam

  console.log(`True length is : ${this.trim().length}`);
};

AnotherUser.trueLength();
"Parshant".trueLength();
"Parth".trueLength();

/* Inheritance in JavaScript is a mechanism that allows a new object to adopt and access the properties and  
methods of another object. JavaScript uses prototype-based inheritance,  
rather than classical inheritance. Here's how it works:   */

// Using constructor function
// function Animal(type) {
//   this.type = type;
// }

// // Adding a method to the prototype
// Animal.prototype.sound = function () {
//   console.log("Sound");
// };

// Using ES6 class
class Animal {
    constructor(type) {
      this.type = type;
    }
  
    sound() {
      console.log("Sound");
    }
  }
  
  //Creating Child Objects
  
  const dog = new Animal("mammal");
  
  //Accessing Properties and Methods
  
  
  console.log(dog.type); // Output: mammal
  dog.sound(); // Output: Sound
  
  //Inheriting from Multiple Objects
  
  // Define mixin objects
  const swimMixin = {
    swim() {
      console.log("Swimming");
    },
  };
  
  const flyMixin = {
    fly() {
      console.log("Flying");
    },
  };
  
  // Define child object
  function Duck() {
    this.sound = function () {
      console.log("Quack");
    };
  }
  
  // Apply mixins
  Object.assign(Duck.prototype, swimMixin, flyMixin);
  
  // Create instance
  const donald = new Duck();
  
  // Access inherited methods
  donald.sound(); // Output: Quack
  donald.swim(); // Output: Swimming
  donald.fly(); // Output: Flying
  
  //Prototype Chain
  
  console.log(dog.hasOwnProperty("type")); // Output: true
  console.log(dog.hasOwnProperty("sound")); // Output: false
  