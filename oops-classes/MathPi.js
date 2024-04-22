/*The getProperty method returns the property descriptor for an own property of the specified object.
 It means it allows you to get the descriptor for a specific property of an object.
 The descriptor contains information about the property, such as whether it is writable, enumerable, and configurable.
value: The value associated with the property (data descriptors only).
writable: true if and only if the value associated with the property may be changed with an assignment operator.
get: A function that serves as a getter for the property, or undefined if there is no getter (accessor descriptors only).
set: A function that serves as a setter for the property, or undefined if there is no setter (accessor descriptors only).
configurable: true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
enumerable: true if and only if this property shows up during enumeration of the properties on the corresponding object. */

//Object.getOwnPropertyDescriptor(obj, prop)
const obj = {
    name: 'John',
    age: 30
  };
  
  // Getting the property descriptor of 'name' property
  const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
  
  console.log(descriptor);

  // Math.pi operation 
  console.log(Math.PI)
  Math.PI=123
  console.log(Math.PI)// we cant able to change due to writable property is false

  console.log("Math.pi operation ")

   const Descripter = Object .getOwnPropertyDescriptor(Math , "PI")
   console.log( Descripter);

   // Adding same protery to our object 
   const myObj = {
     name:"Aftab Alam",
     RollNo: 41,
     isAvailable:true
   }
   
   console.log(myObj);
   console.log("PropertyDescriptor  is :")
   console.log(Object .getOwnPropertyDescriptor(myObj , "name"))
   // Adding getOwnPropertyDescriptor
   Object.defineProperty(myObj , "name",{
    writable: false,
    enumerable: false,
    configurable: false
   })
   myObj.name="Md Aftab Alam";// not modifing 
   console.log(Object .getOwnPropertyDescriptor(myObj , "name"))
  