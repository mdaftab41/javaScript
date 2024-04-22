function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log(" Function called");
}

function createUser(username, email, password) {
  // SetUsername.call(username) // using .call function to call another function and hold reference
  SetUsername.call(this, username); // passing on reference this to set name

  //this.username= username
  (this.email = email), (this.password = password);
}

const chai = new createUser("Chai", "alam@bmail.com", "123");
console.log(chai);

// example
const car = {
  brand: "Toyota",
  displayInfo: function (price, year) {
    console.log(`Brand: ${this.brand}, Price: ${price}, Year: ${year}`);
  },
};

const bike = {
  brand: "Honda",
};

// Using call() to invoke the displayInfo function with 'car' as 'this'
car.displayInfo.call(car, 20000, 2022); // Output: Brand: Toyota, Price: 20000, Year: 2022

// Using call() to invoke the displayInfo function with 'bike' as 'this'
car.displayInfo.call(bike, 5000, 2020); // Output: Brand: Honda, Price: 5000, Year: 2020

//Using call() with Inheritance
function Vehicle(brand) {
  this.brand = brand;
}

Vehicle.prototype.displayInfo = function (price, year) {
  console.log(`Brand: ${this.brand}, Price: ${price}, Year: ${year}`);
};

function Car(brand, model) {
  Vehicle.call(this, brand);
  this.model = model;
}

Car.prototype = Object.create(Vehicle.prototype);

const myCar = new Car("Toyota", "Camry");
myCar.displayInfo(25000, 2022); // Output: Brand: Toyota, Price: 25000, Year: 2022

/* The Vehicle function acts as a superclass with a method displayInfo.
The Car function is a subclass that inherits from Vehicle.
By using Vehicle.call(this, brand) within the Car constructor, we're able to set up the brand property,
 inheriting the method displayInfo from the Vehicle.*/
