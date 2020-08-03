"use strict";


const numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", " ");

const personalMowieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/*for(let i = 0; i<2; i++){
    const a = prompt("Последний просмотренный фильм?", " "),
          b = prompt("Как оцените?", " ");
    if(a != null && b !=null && a!=0 && b!=0 && a.length < 50) {
        personalMovieDB.movies [a] = b;
        console.log("DOne");
        
    }      else {
        i--;
    }
    
}

console.log(personalMowieDB);*/


/*let i = 0;


do {
    let a = prompt("Последний просмотренный фильм?", " "),
        b = prompt("Как оцените?", " ");
        i++;
    if(a !=null && b !=null && a!=0 && b!=0 && a.length < 50){
        personalMowieDB.movies[a] = b;
        console.log("done");
    } else { 
        i--;
    }

    
} while(i < 2);*/


let i = 0;

while(i < 2) {
    let a = prompt("Последний просмотренный фильм", " "),
        b = prompt("Как оцените?", " ");
        i++;
 if( a != null && b != null && a !=0 && b != 0 && a.length < 50) {
     personalMowieDB.movies[a] = b;
     console.log("Done");
} else {
    i--;
}

}


if(numberOfFilms <= 10) {
    alert(" Очень мало фильмов!");
} else if(numberOfFilms >=10 && numberOfFilms <=30) {
    alert("Вы классический киноман");
} else {
    alert(" Воу!");
}

console.log(personalMowieDB);

