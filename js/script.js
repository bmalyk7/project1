"use strict";


const numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", " ");

const personalMowieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

 const a = prompt("Один из последних просмотреных фильмов?", " "),
       b = prompt("На сколько оцените его?", " "),
       c = prompt("Один из последних просмотреных фильмов?", " "),
       d = prompt("На сколько оцените его?", " ");

personalMowieDB.movies[a] = [b];
personalMowieDB.movies[c] = [d];

console.log(personalMowieDB);


















