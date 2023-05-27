// ====== this ======

// const obj = {
//   name : 'my name',
//   sayHello(){
//     console.log('sayHello',this.name);

//     // function boo(){
//     //   console.log('boo',this);
//     // }
//     // boo.call(this);

//     const boo = () => {
//       console.log('boo',this);
//     };
//     return boo;
//   }

// };

// obj.sayHello()();

// ----------------------

// 'use strict'

// Example 1 - Майстерня коштовностей
// Напишить метод calcTotalPrice(stoneName), який пріймає назву каменю та розраховує та повертає загальнк вартість каменів з такім ім'ям, ціною та кількістю із властивості stones

// const chopShop = {
//   stones: [
//     {
//       name : 'Emerald',
//       price: 1300,
//       quantity: 3,
//     },
//     {
//       name : 'Diamond',
//       price: 2700,
//       quantity: 3,
//     },
//     {
//       name : 'Sapphire',
//       price: 1400,
//       quantity: 7,
//     },
//     {
//       name : 'Ruby',
//       price: 800,
//       quantity: 2,
//     },
//   ],
//   calcTotalPrice(stoneName) {
//     // console.log(this.stones);
//   //  return this.stones.reduce((acc, {name, price, quantity}) => 
//   //  name === stoneName ? acc = price * quantity : acc, 0);

//     const {price, quantity} = this.stones.find(item => item.name === stoneName);
//     return price * quantity;
//   },
// };
// console.log(chopShop.calcTotalPrice('Emerald'));
// console.log(chopShop.calcTotalPrice('Ruby'));

// ===== Example 2 - Телефонна книга ===========
// Віконайте рефакторирг методів об'єкта phonebook щоб код запрацював

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: phonebook.generateId(),
//       createdAt: phonebook.getDate(),
//     };
//     this.contacts.push(newContact);
//     return this.contacts;
//   },
//   generateId(){
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends'
// }));

// console.log(phonebook.add({
//   name: 'Poly',
//   email: 'poli@mail.com',
//   list: 'friends'
// }));

// const newPhonebook = {
//   contacts: [],
// };
// console.log(phonebook.add.call(newPhonebook, {
//   name: 'Mark',
//   email: 'mark@mail.com',
//   list: 'friends'
// }));


// ======== Example 3 - Калькулятор =======

// Створіть щбєєкт calculator із трьома методами
// read(a,b) - приймає два значення тa збуругає їх ял властівості об'єкта
// add() - повертає сумму збереженних значень
// mult() - перемножує збережені значення та повертає результат

// const calculator = {
//   // a: 0,
//   // b: 0,
//   creat(c, d) {
//     this.a = c;
//     this.b = d;
//   },
//   add(){
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   }

// };

// console.log(calculator);
// calculator.creat(5,2);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

// ==========================

// function foo() {
//   console.log(this);
// }
// foo();

// const boo = function(){
//   console.log(this);
// }
// boo();

// const arrow = () => {
//   console.log(this);
// }
// arrow();

// const user = {
//   name: 'User name',
//   skills: {
//     myskill: 'html',
//     nickName(){
//       console.log(this);
//     }
//   }
// }

// user.skills.nickName();

// const user = {
//   name: 'User name',
//   nickName:()=>{
//     console.log(this);
//   }
// }

// user.nickName();

// const user = {
//   name: 'User name',
//   skills: {
//     myskill: 'html',
//     someValue: {
//       value: 10,
//       nickName(){
//         console.log(this);
//       }
//     }
//   }
// }

// user.skills.someValue.nickName();

// const userA = {
//   name: 'User name',
//   skills: {
//     mySkill: 'html',
//     someValue: {
//       value: 10,
//       foo() {
//         const  nickName = ()=>{
//           console.log(this);
//         }
//         nickName()
//       }
//     }
//   }
// }

// userA.skills.someValue.foo();

// ============
// const objA = {
//   age: 22,
//   myAge(){
//     console.log(this);
//   }
// }

// objA.myAge();

// const objA = {
//   age: 22,
//   myAge:() => {
//     console.log(this);
//   }
// }

// objA.myAge();

// const objA = {
//   age: 22,
//   myAge:() => {
//     const test = () => {
//       console.log(this);
//     }
//     test();
//   }
// }

// objA.myAge();

// const objA = {
//   age: 22,
//   myAge() {
//     const test = () => {
//       console.log(this);
//     }
//     test();
//   }
// }

// objA.myAge();

// const objA = {
//   age: 22,
//   myAge() {
//     function test() {
//       console.log(this);
//     }
//     test();
//   }
// }

// objA.myAge();

// const objA = {
//   age: 22,
//   skills: {
//     skill: ['html', 'css'],
//     foo(){
//       const boo = () => {
//         console.log(this);
//       }
//       boo();
//     }
//   }
// }

// objA.skills.foo();

// const objA = {
//   age: 22,
//   myAge() {
//     const test = () => {
//       console.log(this);
//     }
//     test();
//   }
// }

// const objB = {
//   age: 12,
//   someFunction: objA.myAge
// }

// const objC = {
//   age: 15,
//   someCrazy: objB.someFunction
// }


// ===== Методи функцій 
// === Метод call() ===

// const objA = {
//   name: 'A',
//   age: 22,
//   myAge(a, b) {
//     console.log(this, a, b);
//   }
// }
// objA.myAge(22, 44);

// const objB = {
//   name: 'B',
//   age: 23,
// }

// objA.myAge.call(objB, 1, 2);

// ====== Метод apply===

// const objA = {
//   name: 'A',
//   age: 22,
//   myAge(a, b) {
//     console.log(this, a, b);
//   }
// }
// objA.myAge(22, 44);

// const objB = {
//   name: 'B',
//   age: 23,
// }

// objA.myAge.apply(objB, [1, 2]);

// ======= Метод bind() =============

// const objA = {
//   name: 'A',
//   age: 22,
//   myAge(a, b) {
//     console.log(this, a, b);
//     return 'Some value'
//   }
// }

// const objB = {
//   name: 'B'
// }
// const result = objA.myAge.bind(objB);
// result(34, 66);
// result(12, 66);
// result(2, 6);
// objA.myAge(23,17);

// ============
// const arr = [1, 2, 3]
// const str = 'hello word';
// console.dir(typeof str);

// String.prototype.sayTest = function(name){
//   console.log(`Hello from prototype ${name}`);
// }

// str.sayTest('Olha')

const arr = [1,2,3,4,5];

Array.prototype.customEach = function (arr){
  for (let i = 0; i < arr.length; i ++){
    const element = arr[i];
    console.log(element);
  }
  console.log('Magic!!!');
}
// так робити не можно

arr.customEach(arr)