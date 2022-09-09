'use strict';




let age = 41;
age = ++age;
console.log(age);

/*




AND(и) ( & )
OR(или) ( | )
XOR(побитовое исключающее или) ( ^ )
NOT(не) ( ~ )
LEFT SHIFT(левый сдвиг) ( << )
RIGHT SHIFT(правый сдвиг) ( >> )
ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )



let counter = 0;
alert( counter++ ); // 0

let counter = 0;
alert( ++counter ); // 1

let counter = 0;
counter++;
++counter;
alert( counter ); // 2, обе строки сделали одно и то же



let n = 2;
n *= 3 + 5;
alert( n ); // 16  (сначала выполнится правая часть, выражение идентично n *= 8)



let n = 2;
n += 5; // теперь n = 7 (работает как n = n + 5)
n *= 2; // теперь n = 14 (работает как n = n * 2)
alert( n ); // 14



let apples = "2";
let oranges = "3";

// оба операнда предварительно преобразованы в числа
alert( +apples + +oranges ); // 5

// более длинный вариант
// alert( Number(apples) + Number(oranges) ); // 5

let apples = "2";
let oranges = "3";
alert( apples + oranges ); // "23", так как бинарный плюс объединяет строки



alert(2 + 2 + '1' ); // будет "41", а не "221"
alert( 6 - '2' ); // 4, '2' приводится к числу
alert( '6' / '2' ); // 3, оба операнда приводятся к числам



alert( 4 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня)
alert( 8 ** (1/3) ); // 2 (степень 1/3 эквивалентна взятию кубического корня)



alert( 2 ** 2 ); // 4  (2 умножено на себя 2 раза)
alert( 2 ** 3 ); // 8  (2 * 2 * 2, 3 раза)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 раза)



alert( 5 % 2 ); // 1, остаток от деления 5 на 2
alert( 8 % 3 ); // 2, остаток от деления 8 на 3



let x = 1, y = 3;
alert( y - x ); // 2, бинарный минус вычитает значения

let x = 1;
x = -x;
alert( x ); // -1, применили унарный минус



alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // пробел это тоже true


alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

let age = Number("Любая строка вместо числа");
alert(age); // NaN, преобразование не удалось

let str = "123";
alert(typeof str); // string

let num = Number(str); // становится числом 123
alert(typeof num); // number

alert( "6" / "2" ); // 3, строки преобразуются в числа

let value = true;
alert(typeof value); // boolean


value = String(value); // теперь value это строка "true"
alert(typeof value); // string




///////////////

let userName = prompt('your name?', '');dfgdf

alert(`your name = ${userName}!`);

////////////////




let isBoss = confirm("Ты здесь главный?");

alert( isBoss ); // true, если нажата OK



let age = prompt ('How your old?', 'Sto');

alert(`Your age = ${age}!`);



console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof "foo");
console.log(typeof Symbol('id'));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof alert); //??????



let age;

alert(age);



let admin, name;

name = 'Djone';

admin = name;

alert ('Привет, ' + admin + `--- Hi, ${admin}`);

let ourPlanetName, currentUserName;



alert("Hello");

let result = prompt ('Hulli?', ['3']);

alert(result);



// BLOCK OBJECKT 

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

*/