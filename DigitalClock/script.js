const clock = document.getElementById("clock");
//const clock=document.querySelector('.#clock')
//setInterval(function(){} , interva in milisecond)
setInterval(function () {
  let date = new Date(); //create date and time
  clock.innerHTML = date.toLocaleTimeString(); // conver date into time
}, 1000);
