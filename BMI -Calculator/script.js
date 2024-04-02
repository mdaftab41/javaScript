const form = document.querySelector('form');
// this use will give you empty b/c before submit of form  you select hte value
// const height = document.parseInt(document.querySelector(#hight).value)
//parseInt use to conver string value into int 

form.addEventListener('submit' , function(e){
    e.preventDefault();//use to remove defult sumit
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if(height==='' || height < 0  || isNaN(height)) {//isNaN() is not a number methode
        results.innerHTML = `please give a valid height  ${height}`;
    } else if (weight==='' || weight < 0  || isNaN(weight)) {//isNaN() is not a number methode
        results.innerHTML = `please give a valid weight  ${weight}`;
    } else{
         const bmi =(weight/((height*height)/10000)).toFixed(2) // 2 decimal value
         results.innerHTML=`<span>${bmi}</span>`;
    }

})