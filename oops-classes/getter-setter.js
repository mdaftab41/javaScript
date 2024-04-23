
/*In JavaScript, getter and setter functions allow you to define special methods to control the access (get) and assignment (set) of object properties. 
They provide a way of defining computed properties.

Getter
A getter is a method that gets the value of a specific property. It is defined using the get keyword and must have exactly zero parameters. 
When a getter is called, the function runs and returns the value to be used.

Setter
A setter is a method that sets the value of a specific property. It is defined using the set keyword and must have exactly one parameter.
 When a setter is called, it receives one argument and can execute code based on the value provided. */

 /* by default getter and setter function is already define for each property of constuctor
 if getter is define then setter is also define  */
class User{
    constructor(username , email ,password){
        this.username=username,
        this.email=email,
        this.password=password
    }
    get password( ){
        return this._password.toUpperCase();
    }
    set password(value){// we set a new value _password
        this._password=value 
        //this._password=value.toUpperCase()
    }
}
const alam = new User("Aftab Alam" , "Alam@gmail.com","asgreg")
console.log(alam.password)
console.log(alam)