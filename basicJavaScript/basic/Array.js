const myarr=[2,3,4,5,6]
console .log(myarr);
console .log(myarr[1]);
console .log(myarr[4]);
// methode in array 
myarr.push(7); // add value in last 
console.log(myarr); 
myarr.pop();// remove value from last
console.log(myarr);
myarr.unshift(8);// add value in first position
console.log(myarr);
console.log(myarr);
myarr.shift();// remove value from first position
console.log(myarr);
const myher=["aftab" , "parth", "parshant"] 
console.log(myher);
const arr = new Array(2,4,6,7,8,)
console.log(arr);

// slice , splice methode in arry
const array = ["as",3,4,5,6,7,4]
console.log(array);
console.log(array.slice(2,4));// not effect the original array
console.log(array);
console.log(array.splice(3,7))// change the original array
console.log(array);


// nestted array 
const arr2=[1,2,3,[6,8,8],5,[2,4,5,6,[4,5,0,7,6,],3],3];
console.log (arr2)
const arr3 = arr2.flat(3);
console.log(arr3)
console.log(Array.of("mdaftabalam"))
console.log(Array.from("mdaftabalam"))

const score1=100
const score2=200
const score3=300
console.log(Array.of(score1 , score2, score3));


