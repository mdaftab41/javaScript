const searchForm=document.querySelector("form") ;
const movieContainer = document.querySelector('.movie-container') ;
const inputBox = document.querySelector('.inputBox');
 
const getMovieInfo = async (movie)=>{
     try {
        const myApiKey="27544902" ;
    const url =`https://www.omdbapi.com/?i=tt3896198&apikey=${myApiKey}&t=${movie}`;
    const response = await fetch(url) ;
    if(!response.ok){
        throw new Error("Unable to fetch movie data");
    }
    const data =  await response.json();
    
    showMovieData(data);
     } catch (error) {
        showErrorMessage("No Movie Found");
     }
}  

const showMovieData=(data)=>{
    movieContainer.innerHTML="";
    movieContainer.classList.remove('noBackground');
    //arrra Destructing
    const {Title, imdbRating, Genre, Released ,RunTime ,Actors, Plot,Poster} = data;
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-info');
    movieElement.innerHTML=`<h2>${Title}</h2>
    <p> <strong>Rating: &#11088;</strong>${ imdbRating}</p> `;
    
    
    const movieGenreElement = document.createElement('div');
    movieGenreElement.classList.add("movie-genre");
    //Genre is astring like array (commmedy , action , love)
    Genre.split(",").forEach(element => {
        const p=document.createElement('p');//write the movies type
        p.innerHTML=element ;
        movieGenreElement.appendChild(p);
    });
    movieElement.appendChild(movieGenreElement);
    //we use + to append otherwise is replase 
    movieElement.innerHTML+=` <p> <strong>Released:</strong>${Released}</p>
    <p> <strong>Duration:</strong>${RunTime}</p>
    <p> <strong>Cast:</strong>${Actors}</p>
    <p> <strong>Plot:</strong>${Plot}</p> `;
    const moviePoster=document.createElement('div');
    moviePoster.classList.add('movie-poster');
    moviePoster.innerHTML = `<img src="${Poster}" alt="Poster">`;
    movieContainer.appendChild(moviePoster);
    movieContainer.appendChild(movieElement);
    inputBox.value = "";
}

const showErrorMessage = (massage)=>{
    movieContainer.innerHTML=`<h2>${massage}</h2>`
    movieContainer.classList.add('noBackground');
    inputBox.value = "";
}


searchForm.addEventListener('submit' , (e)=>{
    e.preventDefault() ;
     const movieName = inputBox.value.trim();
     if(movieName !=""){
        showErrorMessage("Fetching Movie Information.....");
        getMovieInfo(movieName) ;
     }else{
        showErrorMessage("Enter valid movie name to get movie information");
     }
});
 