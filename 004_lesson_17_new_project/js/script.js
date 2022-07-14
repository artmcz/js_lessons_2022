'use strict';

const numOfFilm = +prompt('How mach films you see?', '');

const personalMovieDB = {
    count: numOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const   a = prompt('Last film?', ''),
        b = prompt('Rating?', ''),
        c = prompt('Last film?', ''),
        d = prompt('Rating?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);