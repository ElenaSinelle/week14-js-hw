'use strict'
const button = document.querySelector('.grade__button');
const arrContainer = document.querySelector('.arr');
const averageContainer = document.querySelector('.average');
const maxContainer = document.querySelector('.max');
const minContainer = document.querySelector('.min');
const moreContainer = document.querySelector('.more');
const lessContainer = document.querySelector('.less');
const letterArrContainer = document.querySelector('.letterArr');

function countGrades() {
  let arr = [];
  for (let i = 0; i<=11; i++) {
    arr.push(Math.ceil(Math.random() * 100));
  }

  arrContainer.textContent = arr.join(', ');
  averageContainer.textContent = Math.round(arr.reduce((sum, item) => sum + item, 0) / arr.length);
  maxContainer.textContent = Math.max(...arr);
  minContainer.textContent = Math.min(...arr);
  moreContainer.textContent = arr.filter(item => item >= 60).length;
  lessContainer.textContent = arr.filter(item => item < 60).length;
  letterArrContainer.textContent = createLetterArr(arr);
}

function createLetterArr(array) {
  let letterArr = [];
  array.forEach(grade => {
    grade >= 80 ? letterArr.push('A') :
    grade >= 60 ? letterArr.push('B') :
    grade >= 40 ? letterArr.push('C') :
    grade >= 20 ? letterArr.push('D') :
    letterArr.push('E');
  });
  return letterArr.join(', ');
}


button.addEventListener('click', countGrades);
