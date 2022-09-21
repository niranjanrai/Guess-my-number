'use strict';
/* 
document.querySelector('.message').textContent = '🎉 correct number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 50;
console.log(document.querySelector('.guess').value);
const guessBtn = (document.querySelector('.guess').value = 30);
*/

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  // document.querySelector('.message').textContent = '🎉 correct number';
});
