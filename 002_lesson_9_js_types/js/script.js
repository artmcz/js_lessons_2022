'use strict';





console.log('Экзамен сдан!!! Далее переходим к реакту, начиная с урока 011');




/*

/////////////////////          Задача фром НИК

const players = [
  {
      name: 'Andy',
      playerUuid: 'as3eb3bdd-8165-4abc-a214-42fdc86cef2b',
      experience: 2,
  },
  {
      name: 'Leo',
      playerUuid: '743eb3bd-8165-4abc-a214-42fdc86sef2b',
      experience: 4,
  },
  {
      name: 'Tess',
      playerUuid: '73eb3bdd-8165-4rtc-a214-42fdc86cef2b',
      experience: 6,
  },
  {
      name: 'Katrina',
      playerUuid: '34rt3bdd-8165-4ads-a214-42fdc86cef2b',
      experience: 16,
  },
];

const newBonuses = {
  a: { minExperience: 0, maxExperience: 4, currencyCode: 'USD', amount: 100 },
  b: { minExperience: 2, maxExperience: 6, currencyCode: 'RUB', amount: 200 },
  c: { minExperience: 6, maxExperience: 12, currencyCode: 'HRN', amount: 300 },
  d: { minExperience: 13, maxExperience: 14, currencyCode: 'EUR', amount: 400 },
};

//console.log( players );

let experienceList  = [];

experienceList.push('user', 'name');

//console.log( experienceList );

for (let exp of players) {

  let bonussGroup;

  if (exp.experience <= 4) {
    bonussGroup = 'a';
  } else if (exp.experience >= 2 && exp.experience <= 6) {
      bonussGroup = 'b';
  } else if (exp.experience >= 6 && exp.experience <= 12) {
    bonussGroup = 'c';
  } else if (exp.experience >= 13 && exp.experience <= 14) {
    bonussGroup = 'd';
  } else {
    bonussGroup = 'net bonus';
  }

  console.log( exp.name + ' Have bonus: ' + exp.experience + ' Bonus group: ' + bonussGroup);
}

for (let key in newBonuses) {
  // ключи
  //console.log( key ); 
  // значения ключей
  //console.log( newBonuses[key] );

  let aaa = newBonuses[key];

  for (let aaaKey in aaa) {
    console.log( aaaKey + ': ' + aaa[aaaKey]);
  }

  //console.log( aaa );

}


console.log( newBonuses.a );














////////////////////      Остаточные параметры


function sum(a, b) {
  return a + b;
}

console.log( sum(1, 2, 3, 4, 5) );


////////////////////      JSON   

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

console.log( json );





////////////////////      Деструктурирующее присваивание     Rest

function convertUsd(rate, ...totals) {

  console.log(rate, totals);

  return totals.map(total => total / rate);

}

const total = convertUsd(25, 200, 300, 50, 800, 150, 1000);

console.log( total );



let mass = [100, 200, 300, 400, 500];

let [s10, , , ...s11] = mass;

console.log(s11);


////////////////////       date()

let date = new Date();

console.log( date.getFullYear() );



////////////////////       Object.keys

const user = {
  name: 'Art',
  age: 25,
  prof: 'front',
};

Object.defineProperty(user, 'passport', {
  value: 'DH fg6dkjf',
  enumerable: false,
});

console.log(user);

let entries = Object.entries(user);

entries.map(([index, item]) => console.log(index, item));




////////////////////     МАСИВЫ ЗАДАЧИ      Part 2

// --- Перебираемые ключи

'use strict';

let map = new Map();

map.set("name", "John")
   .set("1", "тгь");

let keys = Array.from(map.keys());

console.log(map);

keys.push("more");

console.log(keys);


// --- Отфильтруйте анаграммы

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

// - тоже только через объект

function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));




// --- Массив с уникальными значениями 

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
  return Array.from(new Set(arr));
}

console.log( unique(values) );


///////////////////       SET

let set = new Set(["апельсин", "яблоко", "банан"]);

set.add('апельсин');
set.add('Апельсин');

for (let value of set) console.log(value);

// то же самое с forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});




//////////////////         MAP     keys    value    entries(key, value)     forEach     entries - obj to map     Object.fromEntries - map to obj

let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));

console.log( map.get('name') ); // John



let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук",    50]
]);

recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // огурец: 500 и так далее
});



let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук",    50]
]);

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // огурец, помидор, лук
}

for (let vegetable of recipeMap.values()) {
  console.log(vegetable); // 500, 350, 50
}

for (let vegetable of recipeMap.entries()) {
  console.log(vegetable); // огурец,500 (и так далее)
}


let map = new Map();

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, "bool1");

console.log( map.get('1') );



////////////////// --------- STOP ---------- ПРОДОЛЖИТЬ ПО МАССИВАМ  https://learn.javascript.ru/array-methods



////////////////// --------- STOP ---------- ПРОДОЛЖИТЬ ПО МАССИВАМ  https://learn.javascript.ru/array-methods


///////////////////      ЕЩЕ    МАССИВЫ   splice   slice   concat   forEach  

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} имеет позицию ${index} в ${array}`);
});


let arr = ["t", "e", "s", "t"];

let summArr = [];

console.log( summArr.concat([3], arr));   // КОПИРОВАНИЕ С РАЗНЫХ В ОДИН



let arr = ["t", "e", "s", "t"];

console.log( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)

console.log( arr.slice(-2) ); // s,t (копирует с -2 до конца)

let newArr = arr.slice(); // КОПИРОВАНИЕ МАССИВА

console.log( newArr );



let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

let removed = arr.splice(0, 3, 'Давай', 'танцевать', '1', '2', '3');

arr.splice(2, 0, '9', '8', '7');

console.log( arr );
console.log( removed );





///////////////////          ЗАДАЧИ    ПО    МАССИВАМ



function getMaxSubSum(arr) {
  let sum = 0;

  for (let num of arr) {
    if (num > 0) sum += num;
  }

  return sum;

}

console.log( getMaxSubSum([-1, 2, 3, -9]) );




function sumInput() {
  
  let num = [];

  while (true) {

    let value = prompt('Num? ', 0);

    if (value === null || value === '' || !isFinite(value) ) break;

    num.push(+value);

  }

  let sum = 0;

  for (let number of num ) {
    sum += number;
  }

  return sum;

}

console.log(sumInput());




let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2]();



let style = ['Джаз', 'Блюз'];

console.log( style );

style.push('Рок-н-ролл'); 

let styleCenter = Math.floor(style.length / 2);

console.log( style );

style[styleCenter] = 'Классика';

console.log( style );

console.log( style.shift() );

console.log( style );

style.unshift('Рэп', 'Регги'); 

console.log( style );




///////////////////          МАССИВЫ      splice         slice





let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

let removed = arr.splice(0, 3, 'Давай', 'танцевать');

arr.splice(2, 0, '9', '8', '7');

console.log( arr );
console.log( removed );




let fruits = ["Apple", "Orange", "Plum"];

for (let i = 0; i < fruits.length; i++) {
  console.log( i + ': ' + fruits[i] );
}

for (let fruit of fruits) {
  console.log( fruit );
}





let fruits = ["Apple", "Orange", "Plum"];

console.log( fruits[fruits.length - 1] ); // show last

console.log( fruits.at(-1) ); // show  last

console.log( fruits.pop() ); // del and show last

console.log( fruits );

fruits.push('Plum'); // add last

console.log( fruits );

console.log( fruits.push() ); // length 

console.log( fruits.shift() ); // del first

fruits.unshift('Apple', 'Max'); // add to start

console.log( fruits );




let fruits = ["Apple", "Orange", "Plum"];

console.log( fruits[fruits.length-1] );

console.log( fruits.at(-1) );



///////////////////          ЗАДАЧИ ПО СТОРОКАМ


function extractCurrencyValue(str) {
  return +str.slice(3);
}

console.log( extractCurrencyValue('df$120') );



function truncate(str, strLength) {
  return (str.length > strLength) ?
    str.slice(0, strLength - 1) + '...' : str;
}

function truncateMy(str, strLength) {
  if (str.length >= strLength) {
    return str.slice(0, strLength) + '...';
  } else {
    return str;
  }
}

console.log( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );

console.log( truncate("Всем привет!", 20) );




function checkSpam(userName) {

  let lowerUserName = userName.toLowerCase();

  return lowerUserName.includes('spam') || lowerUserName.includes('www') ;
}

console.log( checkSpam('www SpAm www') );
console.log( checkSpam('wwsdgfww') );




function ucFirst(str) {

  return str[0].toUpperCase() + str.slice(1);
}

console.log( ucFirst("вася") );


let str = 'sdgfhdsg'; 
console.log( str.toUpperCase() );




///////////////////       СТРОКИ

console.log( 'Арт'.localeCompare('Арт') );


function abc() {
  let str = '';
  for (let i = 65; i <=220; i++ ) {
    str += String.fromCodePoint(i);
  }
  console.log( str );
}

abc();
let str = 'Ослик Иа-Иа посмотрел Иа на виадук';
console.log( str.codePointAt(6) );

console.log( str.substr(4, 10) );

console.log( str.slice(-4, -1) );



let str = 'Ослик Иа-Иа посмотрел Иа на виадук';

let target = 'виадук';

console.log( str.endsWith(target));
console.log( str.startsWith(target));
console.log( str.includes(target) );

let pos = 0;

while (true) {
  let foundPos = str.indexOf(target, pos)

  if (foundPos == -1) break;

  console.log('Find here: ' + foundPos);

  pos = foundPos + 1;
}




let str = 'dsg ds sdg';
console.log( str[str.length - 1] ); 

for (let char of str) {
  console.log(char);
}




///////////////////       ЗАДАЧИ

function random(min, max) {
  let num = min + Math.random() * (max - min);
  return num.toFixed(0);
}

console.log( random(1, 5) );




let i = 0;

while (i < 20) {

  i += 0.2;

  console.log(i);

}




function readNumber() {

  let num;

  do {
    num = +prompt('Enter number: ', 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

console.log(`Number: ${readNumber()}`);





console.log( 6.35.toFixed(1) );

console.log( Math.round(6.35 * 10) / 10 );

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1

Math.random()


alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, без 0x тоже работает

alert( parseInt('2n9c', 36) ); // 123456




alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, вернётся только целая часть
alert( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке



///////////////////////    ЧИСЛА            Object.is(NaN, NaN) === true          Object.is(0, -0) === false

let str = ('99999999999');

console.log( Number.isFinite(str) ); // false
console.log( isFinite(str) ); // true


// Math.floor       Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
// Math.ceil        Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.
// Math.round       Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.
// Math.trunc       Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1
//  Math.random     возвращает случайное число от 0 (включительно) до 1 (но не включая 1)



?.?.?.?.?.?.?.?.?.?.?.?         ?. ?.() ?.[]

let key = 'firstName';

let user1 = {
  firstName: 'John',
}

let user2 = {};

console.log( user1?.firstName + ' ' + user2.firstName?.str );

delete user1.firstName;

console.log( user1.firstName);



let user = {
  name: 'Art',
  adress: {street: 'street', home: 'home'},
};

console.log(user.name + ' ' + user.adress + ' ' + user.adress.street?.stsr);




/////////////////////         Accumulator  WITH  КОНСТРУКТОР       ///////

function Accumulator(startingValue) {
  this.value = startingValue;
  
  this.read = function() {
    this.value += +prompt('Add summ? ', 0);
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();

console.log(accumulator.value);



/////////////////////         Calculator  WITH  КОНСТРУКТОР       ///////

function Calculator() {
  this.read = function() {
    this.a = +prompt('a? ', 0);
    this.b = +prompt('b? ', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

console.log( "Sum = " + calculator.sum() );
console.log( "Mul = " + calculator.mul() );


/////////////////// ЗАДАНИЯ

let obj = {};

function A() { 
  return obj;
 }
function B() { 
  return obj;
 }

let a = new A;
let b = new B;

console.log( a == b ); // true



/////////////////////         ФУНКЦИЯ КОНСТРУКТОР    new    new.target     ///////

function User(name, admin) {
  if (!new.target) {
    return new User(name);
  }
  this.name = name;
  this.isAdmin = admin || false;

  this.sayHi = function() {
    console.log('My name: ' + this.name + '. I admin? ' + this.isAdmin);
  }

}

let user =  User("Jack"),
    user1 = User("Ann"),
    user2 = new User("Mark", true);

user.sayHi(); user1.sayHi(); user2.sayHi(); // Jack Ann Mark

//console.log(user.sayHi() + ' ' + user1.sayHi() + ' ' +  user2.sayHi()); // Jack Ann Mark
console.log(user.isAdmin + ' ' + user1.isAdmin + ' ' +  user2.isAdmin); // false




/////////////////// ЗАДАНИЯ

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    console.log( this.step );
    return this;
  },
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

ladder // показывает 1 затем 0
  .up()
  .up()
  .down()
  .showStep()
  .down()
  .showStep(); 




/////////////////////         CALCULATOR         ///////

let calculator = {
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },
  
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();

console.log( calculator.sum() );
console.log( calculator.mul() );




/////////////////////         МЕТОД ОБЪЕКТА         ///////

let user = {
  name: 'Art',
  age: '30',

  sayName() {
    console.log(this.name);
  },
  
  sayHi() {
    console.log('Hi!');
  },
  
  sayBy() {
    console.log('By!');
  },
};

user.sayName();




?????????????? Object.assign ДЛЯ ВЛОЖЕННЫХ ОБЪЕКТОВ ///////////////


let user = {
  name: "John",
  size: {
    one: 10,
    two: 20,
    three: {
      25: 25,
      48: 48,
    }
  }
};

let cloneUser = Object.assign({}, user);

for (let key in cloneUser) {
  console.log(key + ': ' + cloneUser[key]);
}


/////////////// Object.assign ///////////////

let user = {
  name: "John",
  age: 30
};

let cloneUser = Object.assign({}, user);

for (let key in cloneUser) {
  console.log(key + ': ' + cloneUser[key]);
}



let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, {name: 'Art'}, {age: '33'}, permissions1, permissions2);

// теперь user = { name: "John", canView: true, canEdit: true }

for (let key in user) {
  console.log(key + ': ' + user[key]);
}



/////////////// клонирование объекта ///////////////

let user = {
  name: "John",
  age: 30
};

let clone = {}; // новый пустой объект

// давайте скопируем все свойства user в него
for (let key in user) {
  clone[key] = user[key];
}

// теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete"; // изменим в нём данные


for (let key in clone) {
  console.log(key + ': ' + clone[key]);
}


for (let key in user) {
  console.log(key + ': ' + user[key]);
}



let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

for (let key in menu) {
  console.log(key + ': ' + menu[key]);
}

function multiplyNumeric(menu) {
  for (let key in menu) {
    if(typeof menu[key] == 'number') {
      menu[key] *= 2;
    }
    console.log(key + ': ' + menu[key]);
  }  
}

multiplyNumeric(menu);




let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);



function isEmpty(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
}



let user = {};

user.name = 'John';
user.surname = 'Smith';

for (let key in user) {
  console.log(key + ': ' + user[key]);
}

user.name = 'Pete';

for (let key in user) {
  console.log(key + ': ' + user[key]);
}

delete user.name;

for (let key in user) {
  console.log(key + ': ' + user[key]);
}



// Дополнительные операторы:

// Удаление свойства: delete obj.prop.
// Проверка существования свойства: "key" in obj.
// Перебор свойств объекта: цикл for for (let key in obj).



let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // добавим ещё одно свойство
user.surname = 'Art';

// не целочисленные свойства перечислены в порядке создания
for (let prop in user) {
  console.log( prop + ': ' + user[prop] ); // name, surname, age
}



let codes = {
  "49": "Германия",
  "41": "Швейцария",
  "44": "Великобритания",
  // ..,
  "1": "США"
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}



let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // ключи
  console.log( key + ': ' + user[key]);  // name, age, isAdmin
  // значения ключей
 //console.log( user[key] ); // John, 30, true
}




let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
  () => alert('Привет!') :
  () => alert("Здравствуйте!");

welcome();



let sayHi = () => alert("Hello!");
let fff = sayHi;
fff();



let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
  function() { alert("Привет!"); } :
  function() { alert("Здравствуйте!"); };

welcome(); // теперь всё в порядке



function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );




function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "Вы согласны." );
  }
  
  function showCancel() {
    alert( "Вы отменили выполнение." );
  }
  
  // использование: функции showOk, showCancel передаются в качестве аргументов ask
  ask("Вы согласны?", showOk, showCancel);




/////////// Функции-«колбэки»





function min(a, b) {
  return a < b ? a : b;
}



function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}



const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;

  case 1:
    alert('Вы ввели число 1');
    break;

  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}



let a = 9;

switch (a) {
  case 4:
    alert('Правильно!');
    break;

  case 3: // (*) группируем оба case
  case 5:
    alert('Неправильно!');
    alert("Может вам посетить урок математики?");
    break;

  default:
    alert('Результат выглядит странновато. Честно.');
}



let a = 3;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}



////////// Switch / Case



let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log( i ); // простое число
  
}



for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) console.log( i );
}



let j = 0;
while (j < 3) {
    console.log( `number ${j}!` );
    j++;
}

for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
}



let i = 0;
while (++i < 5) console.log( i ); // 1-4
while (i++ < 5) console.log( i ); // 1-5



outer: 
for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Значение на координатах (${i},${j})`, '');
  
      // Что если мы захотим перейти к Готово (ниже) прямо отсюда?
      if (!input) break outer;
      
    }
  }
  
  alert('Готово!');
  
  
  
  for (let i = 0; i < 10; i++) {

    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue;
  
    console.log(i); // 1, затем 3, 5, 7, 9
  }




let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );




for (let i = 0; i <= 3; i++) { // выведет 0, затем 1, затем 2
    console.log(i);
  }

let i = 5;
do {
  alert( i );
  i++;
} while (i < 3);

let i = 3;
while (i) console.log(i--);




let i = 3;
while (i) { // выводит 0, затем 1, затем 2
  console.log(i);
  i--;
}



let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  console.log(i);
  i++;
}



////////// Циклы while и for



let firstName = 'Суперкодер';
let lastName = null;
let nickName = "";

// показывает первое значение, которое определено:
console.log(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер



let login = prompt('Login?', '');

if (login === 'Admin') {

    let password = prompt('Password', '');

    if (password === 'Я Главный') {
        alert('Здравствуйте!');
    } else if (password === '' || password === null) {
        alert('Отменено Password');
    } else {
        alert('Неверный пароль!');
    }

} else if (login === '' || login === null ) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}



if (-1 || 0) alert( 'first' ); // OK
if (-1 && 0) alert( 'second' ); // KO
if (null || -1 && 1) alert( 'third' ); // OK



let name = false || false || false || true;
console.log(name);



let login;
let msg = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' : 
    "";



let a = 1, b = 2;
let result = (a + b < 4) ? 'Malo' : 'Mnogo';
console.log(result);



let age = +prompt('Number?', '');

let msg = (age > 0) ? alert('1') :
    (age < 0) ? alert('-1') :
    (age == 0) ? alert('0') :
    alert('error');



let value = +prompt('Number?', '');

if (value > 0) {
    alert('1');
} else if (value < 0) {
    alert('-1');
} else if (value == 0) {
    alert('0');
} else {
    alert('error');
}




let companyJS = prompt('JS Company name?', '');

if (companyJS == 'ECMAScript') {
    alert('True!');
} else {
    alert('Не знаете? ECMAScript!');
}




let age = prompt('Сколько вам лет?', '18');

let message = (age < 3) ? 'Hello, Baby!' : 
    (age < 18) ? "Hello!" :
    (age < 100) ? "Hi!" :
    "AGE ERROR!";

alert(message);



let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
if (year == 2015) alert( 'Вы правы!' );



let a = "21" > "1111131";
console.log(typeof a); // boolean
console.log(a); // true



let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(+a + +b); // 3



let a = "" + 1 + 0;
console.log(typeof a);
console.log(a); // 10

let a = "" - 1 + 0;
console.log(typeof a);
console.log(a); // -1

let a = true + false;
console.log(typeof a);
console.log(a); // 1

let a = 6 / "3";
console.log(typeof a);
console.log(a); // 2

let a = "2" * "3";
console.log(typeof a);
console.log(a); // 6

let a = 4 + 5 + "px";
console.log(typeof a);
console.log(a); // 9px

let a = "$" + 4 + 5;
console.log(typeof a);
console.log(a); // $45

let a = "4" - 2;
console.log(typeof a);
console.log(a); // 2

let a = "4px" - 2;
console.log(typeof a); // number
console.log(a); // NaN

let a = "  -9  " + 5;
console.log(typeof a); // string
console.log(a); //  -9  5

let a = "  -9  " - 5;
console.log(typeof a); // number
console.log(a); //  -14

let a = null + 1;
console.log(typeof a); // number
console.log(a); // 1

let a = undefined + 1;
console.log(typeof a); // number
console.log(a); // NaN

let a = " \t \n" - 2;
console.log(typeof a); // number
console.log(a); // -2



const a = {};
function clear(a) {
  a.b = 2;
  a = null;
}
clear(a);

console.log(a);      // { b: 2 } Что выведет и почему?
console.log(a.b);   // 2 Что выведет и почему?"



let age = 41;
age = ++age;
console.log(age);



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