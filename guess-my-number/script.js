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

// Implement game logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // When there's no input
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    // When player wins
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    // When guess is wrong
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high' : '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🧨 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reset the game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
});
