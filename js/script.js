let numderOfFilms;

function start() {
    numderOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '').trim();

    while (numderOfFilms == '' || numderOfFilms == null || isNaN(numderOfFilms)) {
        numderOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

    }
}

start();

const personalMovieDB = {
    count: numderOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        let movie = prompt('Один из последних просмотренных фильмов?', '').trim();
        let movieScore = +prompt('На сколько оцените его?', '').trim();

        if (movie != null && movieScore != null && movie != '' && movieScore != '' && movie.length < 50) {
            personalMovieDB.movies[movie] = movieScore;
        } else {
            i--
        }
    }
}

rememberMyFilms();

// let i = 0;

// while ( i < 2 ) {
//     i++;
//     let movie = prompt('Один из последних просмотренных фильмов?', '');
//     let movieScore = +prompt('На сколько оцените его?', '');

//     if (movie != null && movieScore != null && movie != '' && movieScore != '' && movie.length < 50) {
//         personalMovieDB.movies[movie] = movieScore;
//     } else {
//         i--
//     }
// }

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Вы - классический зритель')
    } else if (personalMovieDB.count <= 50) {
        console.log('Вы - киноман')
    } else {
        console.log('Вы все испортили')
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat)

function writeYourGeners() {

    for (let i = 1; i <= 3; i++) {

        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '').trim();
        
    }
}

writeYourGeners();