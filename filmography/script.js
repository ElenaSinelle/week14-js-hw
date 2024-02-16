'use strict'
import { directors } from './directors.js';

const buttons = document.querySelector('.directors__container');
const directorName = document.querySelector('.name');
const directorCareer = document.querySelector('.career');
const directorTopRatedFilm = document.querySelector('.topRatedFilm');
const directorFilmography = document.querySelector('.filmography');
const fade = document.querySelector('.fade');
const popup = document.querySelector('.popup');
const closeIcon = document.querySelector('.popup__close');
const filmsButton = document.querySelector('.directors__best-films-button');
const filmsContents = document.querySelector('.directors__best-films-list');

function createPopup(directorCard) {
  directorName.textContent = directorCard.name;
  directorCareer.textContent = directorCard.career;
  directorTopRatedFilm.textContent = directorCard.topRatedFilm;
  directorFilmography.href = directorCard.filmography;
}

function close() {
  fade.classList.remove('active');
  popup.classList.remove('visible');
}

function createBestFilms() {
  const films = directors.map(item => item.topRatedFilm);
  filmsContents.textContent = films.join(', ');
}

// event listeners
buttons.addEventListener('click', function(event) {
  let director = event.target.closest('.directors__director');
  if(!director) return;
  let directorName = director.querySelector('.director').textContent;

  let directorCard = directors.find((item) => item.name === directorName);

  createPopup(directorCard);

  fade.classList.add('active');
  popup.classList.add('visible');

  closeIcon.addEventListener('click', close);
  fade.addEventListener('click', close);
});

filmsButton.addEventListener('click', createBestFilms);
