function multipleBy5(num){
 return num*5;
}
multipleBy5.power = 2;
console.log(multipleBy5(5))
console.log(multipleBy5.power);// function as a object 
// in js everything is behaives as a object 

console.log(multipleBy5.prototype);// give empty object 
 function createUser(username, score){
    this.username=username // prototype store the reference 
    this.score=score
 }
 createUser.prototype.increment = function(){
    this.score++
 }
 createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`)
 }
const chai = new  createUser("AFTAB ALAM" , 35)
const tea = new createUser("Malik" , 27)
chai.printMe();
tea.printMe();


