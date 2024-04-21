//Function Prototype:
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  };
  
  let person1 = new Person('Alice', 30);
  let person2 = new Person('Bob', 25);
  
  console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.
  console.log(person2.greet()); // Output: Hello, my name is Bob and I am 25 years old.
//Class Prototype
class PersonC {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  let person3= new PersonC('Alice', 30);
  let person4 = new PersonC('Bob', 25);
  
  console.log(person3.greet()); // Output: Hello, my name is Alice and I am 30 years old.
  console.log(person4.greet()); // Output: Hello, my name is Bob and I am 25 years old.
  // Inheritance using Prototype
  function PersonI(name, age) {
    this.name = name;
    this.age = age;
  }
  
  PersonI.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  };
  
  function Employee(name, age, position) {
    PersonI.call(this, name, age);
    this.position = position;
  }
  
  Employee.prototype = Object.create(PersonI.prototype);
  Employee.prototype.constructor = Employee;
  
  Employee.prototype.getInfo = function() {
    return `${this.name} is a ${this.position} and is ${this.age} years old.`;
  };
  
  let employee1 = new Employee('Alice', 30, 'Software Developer');
  let employee2 = new Employee('Bob', 25, 'Data Analyst');
  
  console.log(employee1.greet()); // Output: Hello, my name is Alice and I am 30 years old.
  console.log(employee2.greet()); // Output: Hello, my name is Bob and I am 25 years old.
  console.log(employee1.getInfo()); // Output: Alice is a Software Developer and is 30 years old.
  console.log(employee2.getInfo()); // Output: Bob is a Data Analyst and is 25 years old.
  