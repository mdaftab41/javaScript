 const num = 13434
 console.log(num)// take it as a number
 const balance = new Number(5442.9)
 console.log(balance.toString())// conver into string 
 console.log(balance.toString().length)// provide the length of digit present 
 console.log(balance.toFixed(2))// fixe the decimal point 
 console.log(balance.toPrecision(4))// use to round the value after that point 

 const num1 = new Number(276396000);
 console.log(num1.toLocaleString())// place comman in international place value chart  us standard
 console.log(num1.toLocaleString("en-IN"))// indian standard
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
 