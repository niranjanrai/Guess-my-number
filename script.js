'use strict';
/* 
document.querySelector('.message').textContent = '🎉 correct number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 50;
console.log(document.querySelector('.guess').value);
const guessBtn = (document.querySelector('.guess').value = 30);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number 🎉🎉';
    document.body.style.background = 'green';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        ' 😭😭 You lost the game';
      document.body.style.background = 'red';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        ' 😭😭 You lost the game';
      document.querySelector('.score').textContent = 0;
      document.body.style.background = 'red';
    }
  }
});
