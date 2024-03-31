const name =" aftab"
const repoCount =50;
console.log(name+" " +repoCount +" value");
// we use backtik 
console.log(`Hello my name is${name} and my repo count is${repoCount}`);

const newString = new String("Aftabalam");
console.log(newString);
console.log(newString.toLowerCase());
console.log(newString.toUpperCase());
console.log(newString.slice(-8, 4));
console.log(newString.substring(0, 4));
console.log(newString.charAt(5));
console.log(newString.indexOf('a'));//give firt index

const s ="  aftab alam ";
console.log(s);
console.log(s.trim());// remove first and last whitespace
console.log(s.replace(" " , "/")) // remove (first sting) whitespace by /

// math in javav script 

console.log(Math);
console.log(Math.abs(-8));
console.log(Math.round(6.46));
console.log(Math.floor(6.64));
console.log(Math.ceil(4.94));
console.log(Math.max(4,5,6));
console.log(Math.min(4,5,6));
console.log(Math.random());
console.log((Math.random()*10)+1);

// if oyu want value b/w 10 and 20
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min))+min);
