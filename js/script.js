
// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
// перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

// 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
// переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '').trim();

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');

        }
    },
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {

            let movie = prompt('Один из последних просмотренных фильмов?', '').trim();
            let movieScore = +prompt('На сколько оцените его?', '').trim();

            if (movie != null && movieScore != null && movie != '' && movieScore != '' && movie.length < 50) {
                personalMovieDB.movies[movie] = movieScore;
            } else {
                i--
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов')
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('Вы - классический зритель')
        } else if (personalMovieDB.count <= 50) {
            console.log('Вы - киноман')
        } else {
            console.log('Вы все испортили')
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGeners: function () {
        for (let i = 1; i <= 2; i++) {
        // for (let i = 1; i <= 3; i++) {
            // let genere = prompt(`Ваш любимый жанр под номером ${i}`, '').trim();
            // if (genere == '' || genere == null) {
            //     console, log('Вы ввели некорректные данные');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genere;
            // }
            let generes = prompt(`Введите ваши любимые жанры через запятую`, '').trim().toLowerCase();
            if (generes == '' || generes == null) {
                console, log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDB.genres = generes.split(',');
                personalMovieDB.genres.sort();
            }
        // }
        }
        personalMovieDB.genres.forEach((item, i) {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        })



    },
    toggleVisibleMyDB: function () {

        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
