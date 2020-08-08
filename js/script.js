"use strict";



let numberOfFilms;

const personalMowieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    // start: function () {
    //     numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", " ");
    //     while (numberOfFilms == " " || numberOfFilms == null || isNaN(numberOfFilms)) {
    //         numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", " ");
    //     }
    // },
    // rememberMyFilms: function () {
    //     for (let i = 0; i < 2; i++) {
    //         const a = prompt("Последний просмотренный фильм?", " "),
    //             b = prompt("Как оцените?", " ");
    //         if (a != null && b != null && a != 0 && b != 0 && a.length < 50) {
    //             personalMowieDB.movies[a] = b;
    //             console.log("Done");
    //         } else {
    //             i--;
    //         }
    //     }
    // },
    // detectPersonalLevel: function () {
    //     if (numberOfFilms <= 10) {
    //         alert(" Очень мало фильмов!");
    //     } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    //         alert("Вы классический киноман");
    //     } else {
    //         alert(" Воу!");
    //     }
    // },
    // showMyDb: function () {
    //     if (personalMowieDB.privat == false) {
    //         console.log(personalMowieDB);
    //     }
    // },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввtли неккоректное сообщение либо не ввели вообще!');
                i--;
            } else {
                personalMowieDB.genres[i - 1] = genre;
            }

        }


    },
    // toggleVisiableMyDB: function () {
    //     if (personalMowieDB.privat) {
    //         personalMowieDB.privat = false;
    //     } else {
    //         personalMowieDB.privat = true;
    //     }

    // }
};

/*personalMowieDB.start();
personalMowieDB.rememberMyFilms();
personalMowieDB.detectPersonalLevel();*/

personalMowieDB.writeYourGenres();

personalMowieDB.showMyDb();
personalMowieDB.toggleVisiableMyDB();