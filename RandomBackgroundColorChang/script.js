// fist generating random color
const randomColor = function(){
    const hex='123456789ABCDEF';//range of hexaDecimal code
    let color ='#';
    // color code is of six color
    for(let i=0 ; i<6 ; i++){
        //position is generate and added to generate 6 digit numberlike"#321432" is a color code
      color+=hex[Math.floor(Math.random()*16)] //Math.floor(Math.random()*16  use to generate only the position of hex 
     //console.log(color);
    }
    //console.log(color);
    return color;
};
//randomColor();
const changeBgColo =function(){
    document.body.style.backgroundColor=randomColor() ;
}
let interval;
const startChangingColor = function(){
   //document.body.style.backgroundColor=randomColor() ;
   if(!interval){//interval===null
    interval= setInterval(changeBgColo , 1000)
   }
}

const stopChangingColor = function(){
 clearInterval(interval);
 interval = null ;//to clear interval value
}
document.querySelector("#start").addEventListener('click' , startChangingColor);
document.querySelector("#stop").addEventListener('click' , stopChangingColor )