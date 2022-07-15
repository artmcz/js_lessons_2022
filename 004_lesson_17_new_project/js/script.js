'use strict';

const numOfFilm = +prompt('How mach films you see?', '');

const personalMovieDB = {
    count: numOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const   a = prompt('Last film?', ''),
//         b = prompt('Rating?', ''),
//         c = prompt('Last film?', ''),
//         d = prompt('Rating?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 1; i++) {
    const   a = prompt('Last film?', ''),
            b = prompt('Rating?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('few movies watched');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('you are a great viewer');
} else if (personalMovieDB.count >= 30) {
    console.log('you are a cinephile');
} else {
    console.log('error');
}

console.log(personalMovieDB);

