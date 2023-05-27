// ======== Прототип об'єкта =========

// const objC = {
//   z: 5,
// }

// const objB = Object.create(objC);
// objB.y = 2;

// console.log(objC);
// // console.log(objC.hasOwnProperty('z'));

// console.log(objB);

// console.log(objB.y);
// console.log(objB.z);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA);

// console.log(objA.z);
// objA.z = 1000;

// console.log(objA);
// console.log(objC);

// --------------

// const dummuObj = Object.create({ message: 'Это свойство обьекта прототипа'});

// console.log(dummuObj.message);

// ==============Конструктор класу=======

// const Car = function ({brand, model, price} = {}){
//   // console.log(this);
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   // this.changePrice = function (newPrice){
//   //   this.price = newPrice;
//   // }

// };

// Car.prototype.sayHi = function(){
//   console.log('Car prototupe.sayHi -> this', this);
//   console.log('Hello :)');
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// console.log(Car.prototype);

// const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 35000});
// console.log(myCar);

// myCar.sayHi();

// const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000});
// console.log(myCar2);

// myCar2.sayHi();

// const myCar3 = new Car({brand: 'Audi', model: 'A6', price: 65000});
// console.log(myCar3);

// myCar3.sayHi();

// =======================

const User =function({email, password} = {}) {
  this.email = email;
  this.password = password;
};

User.prototype.changeEmail = function(newMail){
  this.email = newMail;
}

const mango = new User({email:'mango@mail.com',password:'1111111'});

mango.changeEmail('new-mango@mail.com');
console.log(mango);




