'use strict';

// Get body element
let blackBg = "#222";
let greenBg = "#60b347";
let body = document.getElementsByTagName('body')[0];

let randomNumber = Math.floor(Math.random() * 20);
let scoreField = document.getElementsByClassName('score')[0];
let score = scoreField.textContent

// Get hidden number
let hiddenNumber = document.getElementsByClassName('number')[0];

// get highscore element
let highScoreField = document.getElementsByClassName('highscore')[0];
let highScore = highScoreField.textContent;

// Get message element
let text = document.querySelector('.message');

function guessNumber() {
  // Get input field element
  let guessedField = document.getElementsByClassName('guess')[0]; 
  let guessed = guessedField.value;

  if(score > 0) {
    if(guessed > randomNumber) {
      text.textContent = "Too high!";
      score = score-1;
      scoreField.textContent = score;
    } else if(guessed < randomNumber) {
      text.textContent = "Too low!";
      score = score-1;
      scoreField.textContent = score;
    } else {
      text.textContent = "Correct number!";
      hiddenNumber.textContent = randomNumber;
      body.style.backgroundColor = greenBg;

      if(score > highScore) {
        highScore = score;
        highScoreField.textContent = highScore;
      } else {
        highScoreField.textContent = highScore;
      }
    }
  } else {
    text.textContent = "Try again next time...";
    scoreField.textContent = score;
  }
}

const resetGame = () => {
  // Assign new random number 
  randomNumber = Math.floor(Math.random() * 20)

  // change body to black
  body.style.backgroundColor = blackBg;

  // change score to 20 
  score = 20;
  scoreField.textContent = score;

  // Hide hidden number 
  hiddenNumber.textContent = "?";

  // reset message
  text.textContent = "Start guessing...";

  // reset guessed 

  let guessedField = document.getElementsByClassName('guess')[0]; 
  let guessed = guessedField.value;
  guessedField.value = "";
  
}

// get checkbutton value
let checkButton = document.getElementsByClassName('check')[0];
checkButton.addEventListener("click", guessNumber);

// get again button
let againButton = document.getElementsByClassName('again')[0];
againButton.addEventListener("click", resetGame);

