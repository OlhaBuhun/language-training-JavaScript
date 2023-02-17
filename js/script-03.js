// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// // const lastIndex = friends.length - 1;

// // for(let i=0; i <= lastIndex; i += 1) {
// //   friends[i] += '-1';
// // }

// // console.table(friends);

// for(const friend of friends) {
//   console.log(friend);
// }

//  Сумма всех элементов массива
// const cart = [54, 28, 105, 70, 92, 17, 120];
// console.table(cart);
// // let total = 0;
// //  перебрать массив
// // for (let i = 0; i < cart.length; i += 1) {
// //   console.log(cart[i]);
// //   total += cart[i];
// // }

// // метод for of
// // for(const value of cart) {
// //   total += value;
// // }

// //  сделать total до цикла
// //  каждый элемент приплюсовать к total
// // console.log('Total:', total);

// // Добавить такс
// for(let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[1] * 1.1);
// }
// console.table(cart);


// Посчитать сумму всех четных чисел в массиве
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// // перебрать массив
// // сделать total до цикла
// // проверить на каждой итерации четное или нет
// // каждый четный элемент приплюсовать к total
// // for(const number of numbers) {
// //   console.log(number);
// //   if(number % 2 === 0) {
// //     console.log('Четное!!!');
// //     total += number;
// //   }
// // }

// for(const number of numbers) {
//     console.log(number);
//     if(number % 2 !== 0) {
//       console.log('Эту итерацию нужно пропустить', number);
//       continue;
//     }
//     console.log(`${number} - четное`);
//   }
// console.log('Total:', total);

// Напиши скрипт поиска логина три способа 

// Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
// Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'

// через for
// const logins = ['m4ngoDobe', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден!!!`;

// for(let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
  

//   if(login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден!!!`;
//     break;
//   }
//   message = `Пользователь ${loginToFind} не найден!!!`;

// }
// console.log(message);

// for(const login of logins) {
//   console.log(('login:', login));
//   console.log(`${login} === ${loginToFind}:` , login === loginToFind);
//   if(login === loginToFind) {
//     message = `Пользователь ${loginToFind}  найден!!!`
//     break;
//   }
// }

// console.log(message);

//   Приминение includes()

// console.log(logins.includes(loginToFind));

// Решение тернарным оператором

const logins = ['m4ngoDobe', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind}  найден!!!` : `Пользователь ${loginToFind} не найден!!!`;
console.log(message);




// Напиши код поиска самого маленького числа в массиве,
// числа уникальные

// const numbers = [51, 18, 13, 24, 7, 85, 19, 3];
// // let smallestNumber = numbers[0];

// // for(const number of numbers) {
// //   console.log(number);
// //   if(number < smallestNumber) {
// //     smallestNumber = number;
// //   }
// // }
// // console.log('smallestNumber:', smallestNumber);

// //  Самое большое число
// let biggestNumber = numbers[0];

// for(const number of numbers) {
//   console.log(number);

//   if(number > biggestNumber)
//   biggestNumber = number;
// }
// console.log('biggestNumber:', biggestNumber);


// Напиши скрипт, который обьединяет все элементы массива в одно строковое
// значение.
// Элементов может быть произвольное кол-во.
// Эл-ты будут разделены запятой.
// Сначала for join

// const friends = ['Mapgo', 'Poly', 'Kiwi', 'Ajax'];
// const string = friends.join(', ')

// console.log(string);

// let string = '';

// for(const friend of friends) {
//   string += friend + ',';

// }
// string = string.slice(0, string.length-1);
// console.log(string);


// ИНВЕРСИЯ
// Напиши скрипт который заменяер регистр каждого символа
// в строке на противоположный

// const string = 'JavaScript';
// // toLowerCase() toUpperCase()
// // 1 разбиваю строку на массив
// const letters = string.split('');
// console.log(letters);
// let invertedString = '';

// for(const letter of letters) {
//   console.log(letter)
//   // if(letter === letter.toLowerCase()) {
//   //   console.log('Эта буква в нижнем регистре -', letter);
//   //   invertedString += letter.toUpperCase();
//   // } else {
//   //   console.log('Эта буква в верхнем регистре -', letter);
//   //   invertedString += letter.toLowerCase();
//   // }

//   invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(invertedString);


// Делаем slug и URL из названия строки
// Заголовок состоит из букв и пробелов
// Нормализуем строку
// Разбиваем по словам
// Сшиваем строку с разделителями

// const title = 'Top 10 benefits of framework';
// const normalizedTital = title.toLowerCase();
// const world = normalizedTital.split(' ');


// console.log(world);

// const slug = world.join('-')

// console.log(slug);

// // Запись в цепочку вызова ченинг

// const slug1 = title.toLowerCase().split(' ').join('-');
// // декларативный код

// console.log(slug1);

// Напиши скрипт который считает сумму двух массивов

// const array1 = [5,10,15,20];
// const array2 = [10,20, 30];

// const newArray = array1.concat(array2);
// console.log(newArray);

// const newArray1 = array2.concat(array1);
// console.log(newArray1);

// let total = 0;

// for(const value of newArray) {
//   total += value;
// }

// console.log('Total: ', total);

// Работаем с коллекцией карточек в trello
// Metod splice, удалить, добавить, обновить

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];
console.table(cards);

// удаление по индексу
// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 1);
// console.table(cards);

// добавление по индексу
// const cardToInsert = 'Карточка-6';
// const index = 3;
// cards.splice(3, 0, cardToInsert);
// console.table(cards);

// обновление по индексу
const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);
console.log(index);
cards.splice(index, 1, 'Новая карточка-4');
console.table(cards);


// const deletedCard = cards.splice(2, 1);
// console.log(deletedCard);
// console.log(cards);




