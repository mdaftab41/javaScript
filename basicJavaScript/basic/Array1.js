let fruits = ['apple', 'banana', 'cherry'];

// Accessing elements
console.log(fruits[0]); // Output: apple

// Adding elements
fruits.push('date');
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

// Removing elements
let removedFruit = fruits.pop();
console.log(removedFruit); // Output: date
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

// Finding the length
console.log(fruits.length); // Output: 3

// Using splice to replace an element
fruits.splice(1, 1, 'orange');
console.log(fruits); // Output: ['apple', 'orange', 'cherry']

// Using slice to create a new array
let citrus = fruits.slice(1);
console.log(citrus); // Output: ['orange', 'cherry']
