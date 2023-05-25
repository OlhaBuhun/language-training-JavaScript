// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//   }
// };

// // user.showTag();

// const foo = function() {
//   console.log('foo -> this', this);
// };

// foo();


// ===================

// const showTag = function (){
//   console.log('showTag -> this', this);
//   console.log('showTag -> this.tag', this.tag);
// };

// const user = {
//   tag: 'Mango',
// };

// user.showTag = showTag;
// console.log('user', user);

// user.showTag();

// =================== Вызов без контекста, но обьявлена как метод обьекта

// const user = {
//   tag: 'Mango',
//   showTag() {
//       console.log('showTag -> this', this);
//       console.log('showTag -> this.tag', this.tag);
//   },
// };

// user.showTag();
// const outerShowTag = user.showTag;
// outerShowTag();

// ==========Контест в callback-ф-ях

// const user = {
//   tag: 'Mango',
//   showTag() {
//       console.log('showTag -> this', this);
//       console.log('showTag -> this.tag', this.tag);
//   },
// };

// const invokeAction = function(action) {
//   console.log(action);

//   action();
// };

// invokeAction(user.showTag);

// ==================

// const fn = function (){
//   console.log('fn -> this', this);
// }
// fn();  

// ==============

// const book = {
//   title: 'React for biginnes',
//   showThis() {
//     console.log('showThis -> this', this);
//   },
//   showTitle() {
//     console.log('showTitle -> this.title', this.title);
//   },
// };

// // book.showThis();
// // book.showTitle();

// const outerShowTitle = book.showTitle;
// outerShowTitle();

// =====================

// const makeChangeColor = function () {
//   const changColor = function(color) {
//     console.log('changColor -> this', this);

//   };

//   return changColor;
// };

// const updateColor = makeChangeColor();
// // updateColor('yellow');

// const hat = {
//   color: 'blue',
//   updateColor,
// }

// hat.updateColor('orange');

// =============================

// const counter = {
//   value: 0,
//   increment(value){
//     console.log('increment -> this', this);
//     this.value += value;
//   },

//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   }
// };

// const updateCounter = function(value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

// ==================Метод call()=================

// const showThis = function(...args) {
//   console.log(args);
//   console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };
// // Метод call()
// showThis.call(objA, 10, 20, 30, 40, 50);
// // Метод apply
// showThis.apply(objA, [1, 2, 3, 4, 5]);



// const changeColor = function(color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// const sweater = {
//   color: 'green',
// };

// changeColor.call(hat, 'orange');
// console.log(hat);

// changeColor.call(sweater, 'blue');
// console.log(sweater);

// ==================Метод bind()===========

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// // changeColor();
// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor('orange');
// console.log(sweater);

// =============

const counter = {
  value: 0,
  increment(value){
    console.log('increment -> this', this);
    this.value += value;
  },

  decrement(value) {
    console.log('decrement -> this', this);
    this.value -= value;
  }
};

const updateCounter = function(value, operation) {
  operation(value);
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));

console.log(counter);
