const searchForm=document.querySelector("form") ;
const movieContainer = document.querySelector('.movie-container') ;
const inputBox = document.querySelector('.inputBox');
 
const getMovieInfo = async (movie)=>{
    const myApiKey="27544902" ;
    const url =`http://www.omdbapi.com/?i=tt3896198&apikey=${myApiKey}&t=${movie}`;
    const response = await fetch(url) ;
    const data =  await response.json();
    console.log(data) ;
}  

const showMoveDetail =()=>{
    
}


searchForm.addEventListener('submit' , (e)=>{
    e.preventDefault() ;
     const movieName = inputBox.value.trim();
     if(movieName !=""){
        getMovieInfo(movieName) ;
     }
});