const arr1=[1,2,3,4,5,6,];
const ini=0;
const sum =arr1.reduce((ini,acc)=>(ini+acc))
console.log(sum);

const sum1= arr1.reduce((init,acc)=>(init*acc),0)
console.log(sum1);

const course =[
    {name:"js",
     price:123
   },
   {name:"c++",
   price:200
 },
 {name:"py",
     price:100
   },
   {name:"DSA",
   price:500
 },
 {name:"c",
     price:75
   },
   {name:"DataScience",
     price:750
   },
   {name:"Networking",
     price:700
   },
]

// sum the price of all course having price>499

const totalPrice = course.filter((item)=>item.price>499)
const totalSum = course.filter((item)=>item.price>499).reduce((item, acc)=>(item+acc.price),0)
 console.log(totalPrice);
 console.log(totalSum);