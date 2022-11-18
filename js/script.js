const numderOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
    count: numderOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {

    let movie = prompt('Один из последних просмотренных фильмов?', '');
    let movieScore = +prompt('На сколько оцените его?', '');

    if (movie != null && movieScore != null && movie != '' && movieScore != '' && movie.length < 50) {
        personalMovieDB.movies[movie] = movieScore;
    } else {
        i--
    }

}

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

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Вы - классический зритель')
} else if ( personalMovieDB.count <= 50) {
    console.log('Вы - киноман')
} else {
    console.log('Вы все испортили')
}




console.log(personalMovieDB);


