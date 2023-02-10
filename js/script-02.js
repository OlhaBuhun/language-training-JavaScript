// Віведіть на екран загальну кількість яблук і вінограду. Різницю яблук та віногрвду

// const apples = 56;
// const grapes = 146;
// const total = apples + grapes;

// console.log(total)

// const diff = grapes - apples;

// console.log(diff);

// // Заміни вираз перевизначення комбіновании оператором +=

// let students = 100;
// students += 50;
// console.log(students);

// // Розбери пріоритет операторів в інструкції надання значення зміної result

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// // Напиши скрипт, який виводить у консоль заокруглені 
// // вгору/вниз т.д. Значення змінної value.
// // Використовуй методи Math.floor(), Math.ceil(), Math.round().
// // що буде в консолі при значенняз 27.3 і 27.9

// // const value = 27.5

// // console.log(Math.floor(value));
// // console.log(Math.ceil(value));
// // console.log(Math.round(value));

// const value = Math.floor(27.5);
// console.log(value);

// Склади речення за допомогою шаблонных рядків  A has B bots in stock,
// де A i B зьшррш вставлені в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 150;
// const massage = `${companyName} has ${repairBots + defenceBots } bots in stock `;
// console.log(massage);


// Методи рядків та чейнінг- Number(parseFloat(wigth)
// Напиши скрипт, який разраховує індекс маси тіла людини. 
// Для цого необхідно розділити вагу в кг на квадрат висоти людини за метри.
// Вага та висота зберігаються в змінних wigth i heigth, але в вигляді рядків.
// Нецілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
// частини може бути кома.

// // Індекс маси тела округлити до одншєї цифрі після коми;

// let wigth = '88,3';
// let heigth = '1.75';
// wigth = Number(wigth.replace(',','.'));
// heigth = Number(heigth);

// const bmi = wigth / Math.pow(heigth,2);

// console.log(bmi.toFixed(1));

// // parseFloat - кому в точку
// // другий вариант wigth = wigth.replace(',','.');
// // pow -  степень;

// // Используя конструкцию if else и  prompt, напиши код который запросит
// // вопрос "Какое официальное название JawaScript?".
// // Если пользователь вводит ECMAScript виводи alert с надписью "Вірно!".
// // Иначе "Не знаєте? - ECMAScript!".

// //  const inPrompt = prompt ("Какое официальное название JawaScript?");
// //  console.log(inPrompt);

// // if (inPrompt.toUpperCase() === 'ECMAScript'.toUpperCase()) {
// //   alert('Вірно');
// // } else {
// //   alert("Не знаєте? - ECMAScript!");
// // }

// // Напиши скрипт, який виводить у консоль рядок 
// // 'Це позитивне число', якшо в prompt користувач ввів
// // число більше за нуль. Якшо було введено нуль
// //  виводить у консоль - 'Це нуль'
// // Якшо передалі від'ємне число - 'Це від'ємне число' .

// let numberEntry = prompt ('Введи число');
// numberEntry = Number(numberEntry);
// console.log(numberEntry);

// if (numberEntry > 0) {
//   console.log('Це позитивне число');
// } else if (numberEntry === 0) {
//   console.log('Це нуль');
// } else if (numberEntry < 0) {
//   console.log("Це від'ємне число");
// } else {
//   console.log('Це не число');
// }



// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`



//   // Change code above this line
//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (customerCredits >= totalPrice) {
//     customerCredits -= totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   } else {
//     message = "Insufficient funds!";
//   }
//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (ADMIN_PASSWORD === password) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if(available < ordered) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you"
//   }

//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));


// Напиши скрипт який перевіряє чи закінчується значення
// змінної link сімволом /. Якщо ні, додай до кінця
// значення link цей символ (endWith())


// 1. Найди link
// 2. Якщо link з / 
// 3. Якщо link без / додаем /

let link = 'https://somesaite.com/about';

// if (link.endsWith('/') ==! 'true') {
//   link += '/';
//   console.log(link );
  
// } else {
//   console.log('Ok');

// }
// console.log(link.slice(link.length-1) === '/');
// console.log(link.endsWith('/'));

// if ( !link.endsWith('/') ) {
//   link += '/';
  // link = '${linr}/';
  // link = link + '/';
// }ґ
// console.log(link);
// інверсія !;

// Напиши скрипт для відображення часу дедлайн здачі проєкту.
// Використовуй if else.
// Якщо дедлайн 0 днів - виведи 'Сьогодні'
// Якщо дедлайн 1 день - виведи 'Завтра'
// Якщо дедлайн 2 день - виведи 'Післязавтра'
// Якщо дедлайн 3+ дні - виведи 'Дата в майбутньому'

// const deadlineWork = 2;
// const deadlineWork = Number(prompt("Enter days"))
// if (deadlineWork === 0) {
//   console.log('Сьогодні');
// } else if(deadlineWork === 1) {
//   console.log('Завтра');
// } else if(deadlineWork === 2) {
//   console.log('Післязавтра');
// } else if(deadlineWork >= 3) {
//   console.log('Дата в майбутньому');
// } else {
//   console.log('Ви запізнилися');
// }

// let cost;

// switch(deadlineWork) {
//   case 0:
//     console.log('Сьогодні');
//   break;

//   case 1:
//     console.log('Завтра');
//   break;

//   case 2:
//     console.log('Післязавтра');
//   break;
  
//   default:
//     console.log('Дата в майбутньому');

// }
// console.log(deadlineWork);

// Напиши цикл for который выводит в консоль числа
// по увеличению от min до max,
// но только числа кратные 5

// const max = 100;
// const min = 20;
//  for ( let i = min; i <= max; i += 1) {
//   if (i%5 === 0) {
//     console.log(i);
//   }
//  }

// / - оператор діленя
// % - оператор залишку від ділення

// Створи світофор
// const color = prompt('Enter color').toLowerCase();

// switch(color) {
//   case 'red':
//     alert("Stop!!!");
//     break;
//     case 'yellow':
//       alert("Ready!!!");
//       break;
//       case 'green':
//         alert("Go!!! || Run!!!");
//         break;
//    default:
//     alert("Be carefull")           
// }
// console.log(color);

// Для призначення дефолтного значення потрібно

// const color = prompt('Enter color');
// console.log(color);
// const test = color || 'DONT WORK';
// console.log(test);

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if(totalSpent < 5000) {
//     discount =  BASE_DISCOUNT;
//   } else if(totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if(totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else {
//     discount = GOLD_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   // if (ordered > available) {
//   //   message = "Not enough goods in stock!";
//   // } else {
//   //   message = "The order is accepted, our manager will contact you";
//   // }

//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
  message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
  // Change code above this line
  return message;
}

console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("angul4r1sl1f3"));
console.log(checkPassword("r3actsux"));





