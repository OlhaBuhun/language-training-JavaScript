// Callback функції

// const fnA = function (message, callback) {
//   // function вищого порядку (higher order function) 
//   console.log(message);

//   console.log(callback);

//   callback(100);
// };

// const fnB = function(number) {
//   // callback function
//   console.log('Це лог виклика fnB', number);
// }

// fnA('Hello', fnB);

// ---------------------------------

// const doMath = function(a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// }

// const add = function (x, y) {
//   return x + y;
// }

// const sub = function (x, y) {
//   return x - y;
// }

// коротка запись - Інлайн колбеки
// doMath(2, 3, function (x, y) {
//     return x + y;
//   });
// doMath(23, 3, function (x, y) {
//     return x - y;
//   });
//   doMath(2, 31, function (x, y) {
//     return x * y;
//   });

  // -----------------------------

  // Регистрація кліків по button

  

  // const doMath = function(a, b, callback) {
  //   const result = callback(a, b);
  
  //   console.log(result);
  // };

  // const buttonRef = document.querySelector('.js-button');

  // const handleBtnClick = function() {
  //   console.log('Клік по кнопке');
  // };

  // buttonRef.addEvenListener('click', handleBtnClick);

  // ------------------------------

  // Геопазиция 

  // const onGetPositionSuccess = function (position) {
  //   console.log(' Це визов onGetPositionSuccess');
  //   console.log(position);
  // };

  // const onGetPositionError = function (error) {
  //   console.log(' Це визов onGetPositionError');
  //   console.log(error);
  // };

  // window.navigator.geolocation.getCurrentPosition(
  //   onGetPositionSuccess,
  //   onGetPositionError,
  // );

  // --------------------------------

  // const callback = function () {
  //   console.log('Через 2 секунды внутри колбека в таймауте');
  // };

  // console.log('Перед таймаутом');

  // setTimeout(callback, 2000);

  // console.log('После таймаута');





  // ------------------------------------
  // ------------------------------------

  // Фільтр

  // const filter = function (array, test) {
  //   const filterArray = [];

  //   for (const el of array) {
  //     console.log(el);
  //     // console.log(test(el));

  //     const passed = test(el);

  //     if(passed) {
  //       filterArray.push(el);
  //     }
  //   };

  //   return filterArray;
  // };

  // 1. Надо передать ф-ию
  // 2. ф-ия получает элемент массива
  // 3. Если элемент массива удовлетворяет условию массива вернет true
  // 4.  Если элемент массиване удовлетворяет условию массива вернет false

//   const callback1 = function (value) {
//     return value  >= 3;
//   };

//   const callback2 = function (value) {
//     return value  <= 4;
//   };

//   const r1 = filter([1,2,3,4,5], callback1);
//   console.log(r1);
//   const r2 = filter([1,2,3,4,5,6,7,8], callback2);
//   console.log(r2);

//   const fruits = [
//     { name: 'apples', quantuty: 200, isFresh: true},
//     { name: 'limon', quantuty: 150, isFresh: true},
//     { name: 'grapes', quantuty: 100, isFresh: false},  
//   ];

//   const getFruitWithQuantuty = function (fruit) {
//     return fruit.quantuty >= 120;
//   }

// const r3 = filter(fruits, getFruitWithQuantuty);
// console.table(r3);



// --------------------------------------
// --------------------------------------

// Замиканіє Абстрагування повторення

// const fnA = function (parametr) {
//   const innerVariable = 'Значение внутренней переменной функции fnA';

//   const innerFunction = function() {
//     console.log(parametr);
//     console.log(innerVariable);
//     console.log('Это вызов innerFunction');
//   }

//   return innerFunction;
// }
// const fnB = fnA(555);

// fnB();

// console.log(fnB);

// --------------------------------------

// Поваренок - Closure

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish('Poly', 'вареникі');
// makeDish('Poly', 'борщ');
// makeDish('Poly', 'зелений борщ');

// makeDish('Mango', 'каву');
// makeDish('Mango', 'чай');
// makeDish('Mango', 'какао');

// const makeSheff = function(name) {
//   const makeDish = function(dish) {
//     console.log(`${name} готовит ${dish}`);
//   };

//   return makeDish;
// };

// const mango = makeSheff('Mango');
// // console.log(mango);

// const poly = makeSheff('Poly');
// // console.log(poly);

// mango('каву');
// poly('борщ')
//  console.dir(mango);

//  ------------------------------

// Приклад округлятор

// const floatingPoint = 3.4456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// const rounder = function (places) {
//   return function(number) {
//     return Number(number.toFixed(places));
//   };
// }

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// // rounder2(floatingPoint);
// // rounder3(floatingPoint);

// console.log(rounder2(3.4567));
// console.log(rounder3(3.4567));
// console.log(rounder2(16.4567));

// ----------------------------------
// ----------------------------------

// Стрілочні функції

// Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   console.log(arguments);
//   return a + b + c;
// }


// console.log(classicAdd(11, 23, 34));

// // Те саме стрілочною функцією з явнім поверненням
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// console.log(arrowAdd(11, 23, 34));

// // називається неявне повернення (implicit return) -жодних додаткових інструкцій, крім повернення значення.

// const add = (a, b, c) => a + b + c;

// console.log(add(11, 23, 34));

// ----------------------------------

// const fnA = function () {
//   return {
//     a: 5,
//   }
// };
// console.log(fnA());

// const arrowFn = () => {
//   return {
//     arrowA: 5,
//   };
// };

// console.log(arrowFn());

// // коротка запись об
// const arrowFnA = () => ({ arrowA1: 5})

// console.log(arrowFnA());

// Геопазиция 

  // const onGetPositionSuccess =  (position) => {
  //   console.log(' Це визов onGetPositionSuccess');
  //   console.log(position);
  // };

  // const onGetPositionError = (error) => {
  //   console.log(' Це визов onGetPositionError');
  //   console.log(error);
  // };

  // window.navigator.geolocation.getCurrentPosition(
  //   onGetPositionSuccess,
  //   onGetPositionError,
  // );

  // -------------------------------------

  // Фільтр

  const filter = (array, test) => {
    const filterArray = [];

    for (const el of array) {
      console.log(el);
      // console.log(test(el));

      const passed = test(el);

      if(passed) {
        filterArray.push(el);
      }
    };

    return filterArray;
  };

  // 1. Надо передать ф-ию
  // 2. ф-ия получает элемент массива
  // 3. Если элемент массива удовлетворяет условию массива вернет true
  // 4.  Если элемент массиване удовлетворяет условию массива вернет false

  const callback1 = (value) => value  >= 3;

  const callback2 = (value) => value  <= 4;


  const r1 = filter([1,2,3,4,5], callback1);
  console.log(r1);
  const r2 = filter([1,2,3,4,5,6,7,8], callback2);
  console.log(r2);

  const fruits = [
    { name: 'apples', quantuty: 200, isFresh: true},
    { name: 'limon', quantuty: 150, isFresh: true},
    { name: 'grapes', quantuty: 100, isFresh: false},  
  ];

  // const getFruitWithQuantuty = (fruit) => fruit.quantuty >= 120;

const r3 = filter(fruits, fruit => fruit.quantuty >= 120);
console.table(r3);

