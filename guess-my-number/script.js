'use strict';

/*
DOM = Document Object Model: Structured representation
of HTML documents. Allows JS to access HTMl elements and ž
style to manipulate them.
*/

// Set number to guess
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Score variables
let score = 20;
let highscore = 0;

// Make methods to reduce the code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (numToDisplay) {
  document.querySelector('.number').textContent = numToDisplay;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const changeColorAndWidth = function (color, width) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
};

// Implement game logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // When there's no input
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    // When player wins
    displayMessage('🎉 Correct Number!');
    changeColorAndWidth('#60b347', '30rem');
    displayNumber(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    // When guess is wrong
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('🧨 You lost the game!');
      displayScore(0);
    }
  }
});

// Reset the game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  changeColorAndWidth('#333', '15rem');
  document.querySelector('.guess').value = '';
});
