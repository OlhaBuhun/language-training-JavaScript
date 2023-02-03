// Віведіть на екран загальну кількість яблук і вінограду. Різницю яблук та віногрвду

const apples = 56;
const grapes = 146;
const total = apples + grapes;

console.log(total)

const diff = grapes - apples;

console.log(diff);

// Заміни вираз перевизначення комбіновании оператором +=

let students = 100;
students += 50;
console.log(students);

// Розбери пріоритет операторів в інструкції надання значення зміної result

const result = 108 + 223 - 2 * 5;
console.log(result);

// Напиши скрипт, який виводить у консоль заокруглені 
// вгору/вниз т.д. Значення змінної value.
// Використовуй методи Math.floor(), Math.ceil(), Math.round().
// що буде в консолі при значенняз 27.3 і 27.9

// const value = 27.5

// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

const value = Math.floor(27.5);
console.log(value);

// Склади речення за допомогою шаблонных рядків  A has B bots in stock,
// де A i B зьшррш вставлені в рядок.

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 150;
const massage = `${companyName} has ${repairBots + defenceBots } bots in stock `;
console.log(massage);


// Методи рядків та чейнінг- Number(parseFloat(wigth)
// Напиши скрипт, який разраховує індекс маси тіла людини. 
// Для цого необхідно розділити вагу в кг на квадрат висоти людини за метри.
// Вага та висота зберігаються в змінних wigth i heigth, але в вигляді рядків.
// Нецілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
// частини може бути кома.

// Індекс маси тела округлити до одншєї цифрі після коми;

let wigth = '88,3';
let heigth = '1.75';
wigth = Number(wigth.replace(',','.'));
heigth = Number(heigth);

const bmi = wigth / Math.pow(heigth,2);

console.log(bmi.toFixed(1));

// parseFloat - кому в точку
// другий вариант wigth = wigth.replace(',','.');
// pow -  степень;





