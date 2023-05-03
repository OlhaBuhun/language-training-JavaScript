// Коллбек функції

// const arr = [3, 10];

// function foo(arr, callback) {
//   const first = arr[0];
//   const second = arr[1];
//   const result = callback(first, second);
//   console.log(result);

// }

// foo(arr, add);
// foo (arr, logger );


// function add(a,b) {
//   return a + b;
// }

// console.log(add(1,2));
// console.log(add);

// function logger(a,b) {
//   alert(`Функція логгер ${a}`);
//   alert(`Функція логгер ${b}`);
// }


// --------------------------------

// напишіть такі ф-ії

// creatProduct(obj, callback) - пріймає об'єкт товару без ID, а також коллбек. Ф-ія створює об'єкт товару, додаючі йому унікальній ідентифікатор як id і викликає колбек передаючі йому створений об'єкт
// logProdukt(produrt) - колбек, що пріймає об'єкт продукту і логує його в консоль
// logTotalPrice(produrt) - колбек, що пріймає об'єкт продукту і логує загальну вартість товару в консоль 
// let i = 0;
// function creatProduct(partiaProduct, callback) {
//   i += 1;
//   const obj = {
    
//     id: i,
//     ...partiaProduct,
//   }
//   callback(obj);
// }

// function logProdukt(produrt) {
//   console.log(produrt);
// }

// function logTotalPrice(produrt) {
//   console.log(produrt.price * produrt.quantity);
//   return produrt.price * produrt.quantity;
// }

// creatProduct({
//   name: 'limon',
//   price: 20,
//   quantity: 5,
// }, logProdukt);

// creatProduct({
//   name: 'limon',
//   price: 20,
//   quantity: 5,
// }, logTotalPrice);

// creatProduct({
//   name: 'apple',
//   price: 10,
//   quantity: 6,
// }, logProdukt);

// creatProduct({
//   name: 'apple',
//   price: 10,
//   quantity: 6,
// }, logTotalPrice);

// -----------------------------------

// Додайте об'єкту account методи записиом
// withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError) де першій параметр це сумма операціїБ а другий і третій - колбекі.
// Метод withdraw віклікпє onError якщо amount більше TRANSACTION_LIMIT або this.balance та onSuccess в іншому випадку.
// Метод deposit віклікпє onError якщо amount більше TRANSACTION_LIMIT або мінше або дорівнює нулю, та onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Poly',
//   balance: 3400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > this.balance) {
//       onError('Мало коштів!');
//     }else if(amount > TRANSACTION_LIMIT) {
//       onError('Превишен ліміт');
//     }else{
//       this.balance -= amount;
//       onSuccess(`Cписано ${amount}, залишок ${this.balance}`)
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if(amount <= 0) {
//       onError('Значення має бути більше нуля')
//     }else if(amount > TRANSACTION_LIMIT){
//       onError('Превишен ліміт');
//     }else{
//       this.balance += amount;
//       onSuccess(`Додано ${amount}, залишок ${this.balance}`)
//     }
//   }
// };

// function handleSuccess(message) {
//   console.log(`Success - ${message}`);
// };

// function handleError(message) {
//   console.log(`Error - ${message}`);
// };

// account.withdraw(2000, handleSuccess, handleError );
// account.withdraw(200, handleSuccess, handleError );
// account.withdraw(600, handleSuccess, handleError );
// account.deposit(200, handleSuccess, handleError );
// account.deposit(-600, handleSuccess, handleError );
// account.deposit(2000, handleSuccess, handleError );
// account.deposit(0, handleSuccess, handleError );


// -----------------------------

// Напишіть ф-шю each(array, callback), ф-ія застосовуется до кожного єлементаю  масіву. Ф-ія each повинна повернуті новій масівб елементамми якого будуть результати виклику колбека

function each(array, callback) {
  for(const element of array){
    console.log(callback(element));
  }
}

// console.log(each([54, 49, 36, 25, 16], function(value) {
//   return value *2;
// }),
// );
// console.log(each([54, 49, 36, 25, 16], function(value) {
//   return value - 10 ;
// }),);
// console.log(each([54.9, 49, 36, 25, 16], function(value) {
//   return Math.ceil(value) ;
// }),);
// console.log(each([54, 49, 36, 25, 16], function(value) {
//   return Math.sqrt(value) ;
// }),);
console.log(each([54.8, 49.7, 36.2, 25.56, 16], function(value) {
  return Math.floor(value) ;
}),);




