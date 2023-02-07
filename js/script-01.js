// let totalSpent = 5000;
// let payment = 500;
// let discount = 0;

// if (totalSpent < 100) {
//   console.log(`не партнер, скидка 0%`);
//   discount = 0;
// } else if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log(`Бронзовый партнер, скидка 2%`);
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log(`Серебрянный партнер, скидка 5%`);
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log(`Золотой партнер, скидка 10%`);
//   discount = 0.1;
// }

// payment -= payment * discount;
// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);
// totalSpent += payment;
// console.log(`Сумма ваших покупок в нашем магазине составляет ${totalSpent}`);

// Інструкція SWITCH

//  Напиши скрипт выбора стоимости отеля по кол-ву звезд.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
//  Если в переменной stars что-то кроме 1-5, вивесті строку ' Такого кол-ва звезд нет'

// const stars = "5";
// let price;


// switch (stars) {
//   case "1":
//     price = 20;
//     break

//   case "2":
//    price = 30;
//     break 
    
//   case "3":
//       price = 50;
//       break 
      
//    case "4":
//     price = 70;
//     break

//     case "5":
//     price = 120;
//     break

//     default:
//       console.log(' Такого кол-ва звезд нет');
// }

// console.log(`Стоимость отеля ${stars} звезда  ${price} долларов`);

// 1,2 - 20$, 3,4 - 30$,  5 - 120$


const stars = "2";
let price;


switch (stars) {
  case "1":
  case "2":
    price = 20;
    break
    
  case "3":
  case "4":
      price = 30;
      break 

  case "5":
    price = 120;
    break

  default:
    console.log(' Такого кол-ва звезд нет');
}

console.log(`Стоимость отеля ${stars} звезда  ${price} долларов`);


// Напиши скрипт выбора опции доставки товара
// Опция храниться в переменной Option:
// 1 -  Самовывоз
// 2 - Курьер
// 3 - Почта
// В переменную message записать сообщение в зависимости от опции доставки
// "Вы сможите забрать товар, завтра с 12:00 в нашем офисе"
// "Курьер доставит заказ, завтра с 9:00 до 18:00"
// "Посылка будет отправлкна сегодня"
// "Вам перезвонит менеджер"

const option = 3
let message = '';

switch (option) {
  case 1:
    message = "Вы сможите забрать товар, завтра с 12:00 в нашем офисе"
    break;

    case 2:
      message = "Курьер доставит заказ, завтра с 9:00 до 18:00"
      break;

      case 3:
        message = "Посылка будет отправлена сегодня"
        break      

  default:
    message = "Вам перезвонит менеджер";
}
console.log(message);


// Цикл for;

// for (let i = 100; i >= 16; i -= 8) {
//   console.log(i);
// }

// console.log('werty');


// Напиши скрипт который подсчитывает общую сумму зарплат работников,
// Кол-во работников храниться в переменной employees
// зп каждого работніка это случайное число от 500 до 5000
// Записать сумму в переменную totalSalary и вывести в консоль


// 1.Задать переменные 
// 2.Перебрать работников в цикле
// 3. Генерить случайную зп
// 4. Прибавить зп к тоталу
// 5. Вывести консоль totalSalary


// let totalSalary = 0;
// const employees = 5;
// let personeSalary;

// for (let i = 1; i <= employees; i += 1) {
//   // console.log(i);
//   personeSalary = Math.round(Math.random() * (5000 - 500) + 500);
//   console.log(`ЗП работника ${i} - ${personeSalary}`)
//   totalSalary = totalSalary + personeSalary;
  
  
// }
// console.log('totalSalary' , totalSalary);


// Напиши скрипт который подсчитывает общую сумму всех четных чисел,
// которые входят в диапазон в переменных от min до max
// Например, если мин=0 а мах=5, 

// 1. Задать переменные
// 2. Перебрать четные числа в цикле
// 3. перебираем с помощью if
// 4. total всех четных чисел
// 5. Вывечти консоль total

const min = 6;
const max = 13;
let total = 0;

// for (let i = min; i <= max; i += 1) {

//   if (i % 2 === 0) {
//     console.log(i);
//     total += i;
//   }
  
// }
// console.log('Сумма четных чисел' , total);

for (let i = min; i <= max; i += 1) {

  if (i % 2 !== 0) {
    console.log('не четное число', i);
    continue;

  }
  console.log('четное число', i);
  total += i;
  
}
console.log('Сумма четных чисел' , total);

// Напиши скрипт обработки покупки в магазине.
// - Баланс пользователя хранится в переменной balance
// - Сумма покупки хранится в переменной  payment
// Перед проверкой вывести сообщуние
// `Общая стоимость заказа ${payment} кредитов. Проверяем колличество доступных средств на счету.`
// Если сумма покупки не привышает баланс,
// Вычесть из баланса сумму покупки
// Вывести сообщение `На счету осталось ${balance} кредитов.`
// Если сумма покупки превышает баланс
// Вывести сообщение 'На счету недостаточно средств для проведение операции!'
// В конце вывести сообщение 'Операция завершена'

let balance = 12000;
const payment = 2000;

console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем колличество доступных средств на счету.`);

if (balance >= payment) {
  balance -= payment;
  console.log(`На счету осталось ${balance} кредитов.`);
  
} else {
  console.log('На счету недостаточно средств для проведение операции!');
  
}

console.log('Операция завершена');






