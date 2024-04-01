// filter method
const myNum=[1,2,3,5,6,7,8,9,9];

const ans =myNum.filter((num)=>num>=3)
console.log(ans);
const ans2 =myNum.filter((num)=>num<=3)
console.log(ans2);
// map methode
// Add 10 in each element of array
const  ans3 =myNum.map((num)=>num+10)
console.log(ans3);
//chaning function concept in map : => use more than one function 
const  ans4 =myNum.map((num)=>num+10).map((n)=>n*10)
console.log(ans4);

// Also filter the element using forEach loop
 const arr=[];
 myNum.forEach((num)=>{
    if(num>=4){
        num=num+10;
        arr.push(num)
    }

 })
 console.log(arr);