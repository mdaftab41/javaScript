/*static keyword is used to define a static method or property for a class.
Static methods or properties are associated with the class itself rather than with the instances of the class.
Static methods and properties are accessed from the class, not from instances created with new.
Static methods are commonly used for utility functions or to provide additional functionality related to the class.
Static properties can be used to define properties that are shared among all instances of the class. */
class User{
    constructor(username){
        this.username= username
    }
    logMe(){
      console.log(`Username is : ${this.username}`)  
    }
   static createId(){
       return `123` 
    }
}

const alam = new User("Aftab alam");
//console.log(alam.createId()) // due to statis methode is not accessible by instance

class Teacher extends User{
    constructor( username ,email){
        super(username),
        this.email= email

    }

}
const app = new Teacher ("Aftab alam","Alam@gmail.com")
console.log(app);
app.logMe();
//console.log(app.createId()) // not accessible by child due to static 

class Animal {
    constructor(type) {
      this.type = type;
    }
  
    sound() {
      console.log("Sound");
    }
  
    // Static method
    static displayInfo() {
      console.log("This is an animal class");
    }
  }
  
  // Adding a static property to the Animal class
  Animal.classification = "Mammal";
  
  // Calling the static method
  Animal.displayInfo(); // Output: This is an animal class
  
  // Accessing the static property
  console.log(Animal.classification); // Output: Mammal
  