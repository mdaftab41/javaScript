let randomNumber = parseInt(Math.random() * 100 + 1); //use to generate a random number
const submit = document.querySelector(".guessSubmit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaning = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p');// global scope

let preGuess = []; //empty array to store user guess value
let numGuess = 1; //default value
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault(); // Prevents the default form submission behavior
    const guess = parseInt(userInput.value); // Parses the user input value to an integer
    console.log(guess); // Outputs the user's guess to the console
    validateGuess(guess); // Calls a function named validateGuess with the user's guess as an argument
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    preGuess.push(guess); // store the guess number into array
    if (numGuess === 10) {
      displayGuess(guess);
      displayMassage(`Game over.  Random number was ${randomNumber} `);
      endGame(); //Stop the game
    } else {
      displayGuess(guess);
      cheackGuess(guess);
    }
  }
}

function cheackGuess(guess) {
  if (guess === randomNumber) {
    displayMassage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMassage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMassage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},  `;
  numGuess++; // updating the value
  remaning.innerHTML = `${11 - numGuess}`;
}

function displayMassage(massage) {
  lowOrHi.innerHTML=`<h2>${massage}</h2>`
}

function endGame() {
  userInput.value='';//clean the user inpute
  userInput.setAttribute('disabled', '') //disable the inpute field
  p.classList.add('button')// Adding a button classList to behaive like button
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  p.style.backgroundColor = 'green';
  p.style.margin = '0 7rem';
  p.style.borderRadius = '3rem';
  p.style.height = '3rem';
  p.style.textAlign = 'center';
  p.style.lineHeight = '3rem';
  startOver.appendChild(p);//adding new child
  playGame= false ;
  newGame();
}

function newGame() {
 const newGameButton = document.querySelector('#newGame');
 newGameButton.addEventListener('click' , function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = []; //empty array to store user guess value
    numGuess = 1; //default value
    guessSlot.innerHTML = '';
    remaning.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
   
 })
}
