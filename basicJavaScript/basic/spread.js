// Copying an array
const fruits = ['apple', 'banana', 'cherry'];
const fruitsCopy = [...fruits];
console.log(fruitsCopy); // Output: ['apple', 'banana', 'cherry']

// Merging arrays
const vegetables = ['carrot', 'potato'];
const food = [...fruits, ...vegetables];
console.log(food); // Output: ['apple', 'banana', 'cherry', 'carrot', 'potato']

// Adding elements to an array
const moreFruits = ['orange', ...fruits, 'grape'];
console.log(moreFruits); // Output: ['orange', 'apple', 'banana', 'cherry', 'grape']

// Passing arguments to a function
function multiply(x, y, z) {
    return x * y * z;
}
const numbers = [2, 3, 4];
console.log(multiply(...numbers)); // Output: 24

// Copying and merging objects
const person = { name: 'John', age: 30 };
const address = { city: 'New York', country: 'USA' };
const mergedObject = { ...person, ...address };
console.log(mergedObject); // Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }
