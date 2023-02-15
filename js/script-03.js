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

// Напиши скрипт поиска логина

// Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
// Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'

// через for
const logins = ['m4ngoDobe', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';

for(let i = 0; i < logins.length; i += 1) {
  const login = logins[i];
  console.table(login);

}

