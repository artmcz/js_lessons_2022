'use strict';

const obj = {
    name: 'Art',
    age: 25,
    isMarried: true
};

obj.age = 41;

console.log(obj.name + ' age: ' + obj.age);
console.log(obj['name']);

let arr = ['first', 'file', 6, 'text', {}, []];
console.log(arr[1]);

