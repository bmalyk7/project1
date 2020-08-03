"use strict";



let numberOfFilms;

function start(){
    numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", " ");
    
    while(numberOfFilms == " " || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", " ");
    }
}
start();

const personalMowieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms(){
    for(let i = 0; i<2; i++){
        const a = prompt("Последний просмотренный фильм?", " "),
              b = prompt("Как оцените?", " ");
        if(a != null && b !=null && a!=0 && b!=0 && a.length < 50){
            personalMowieDB.movies [a] = b;
            console.log("Done");
        }      else {
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel(){
    if(numberOfFilms <= 10) {
        alert(" Очень мало фильмов!");
    } else if(numberOfFilms >=10 && numberOfFilms <=30) {
        alert("Вы классический киноман");
    } else {
        alert(" Воу!");
    }

}

detectPersonalLevel();



function showMyDb(){
    if(personalMowieDB.privat == false){
        console.log(personalMowieDB);
    }
    
}

showMyDb();

function writeYourGenres (){
    for(let i = 1; i <= 3; i++){
        personalMowieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();