  // for of loop
const arr = [1,3,5,6,8,9,4,5]
for(const ans of arr){
   console.log(ans)
}

const greeting='HelloWorld'
for(const greet of greeting){
  console.log(greet)
}

//Map 
const map= new Map();
map.set("js" , 'JavaScript');
map.set("cpp" , 'c++')
map.set("pps" , 'c')
map.set("py" , 'python')
map.set("java" , 'Java')
console.log(map)
// print key and in a array form
for(const key of map){
  console.log(key);
}
console.log("printing  key  individuly")
for(const [key , value] of map){
  console.log(key);
}
console.log("printing VALUE  individuly")
for(const [key , value] of map){
  console.log(value);
}
console.log("printing both key and value individuly")
for(const [key , value] of map){
  console.log( `${key} --> ${value}`  );
}

// for of loop, not work  for object 
// for in loop
const myObj={
  DSA:500,
  Cpp:400,
  py:800,
  JAVA:1000,
  c:200,
  Ruby:800
}
//Printing key
for(const key in myObj){
  console.log(key);
}
//Printing  value
for(const key in myObj){
  console.log(myObj[key]);
}
//Printing  value and key
for(const key in myObj){
  console.log(`The Price of Course ${key} is  : ${myObj[key]}`);
}
 
