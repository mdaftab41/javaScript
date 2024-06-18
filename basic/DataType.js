"use strict" // trea all js  code newer version
//alert(3+3)  // we are using noddejs not browser

let name= "string"  // string data type
let age=274;// number 2 to power of 53
let isLoggedIn = false;// boolean  true or false 
let ans ; //undefine  data type 
// symbol 
// null 
// bigint 
console.log(typeof undefined)// undefine
console.log(typeof null) //object 
// conering datatype 
//"33"=> 33
// "33dd"=>Nan
//true=> 1
//! Here are more examples
console.log(parseInt("123"));
// 123 (default base-10)
console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
console.log(parseInt("   123 "));
// 123 (whitespace is ignored)
console.log(parseInt("077"));
// 77 (leading zeros are ignored)
console.log(parseInt("1.9"));
// 1 (decimal part is truncated)

//! When we will not get an Output
console.log(parseInt("&123"));
console.log(parseInt("-123"));
console.log(parseInt("xyz"));