'use strict';
/* 
document.querySelector('.message').textContent = '🎉 correct number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 50;
console.log(document.querySelector('.guess').value);
const guessBtn = (document.querySelector('.guess').value = 30);
*/
const x = function () {
  console.log(23);
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  document.querySelector('.message').textContent = '🎉 correct number';
});
