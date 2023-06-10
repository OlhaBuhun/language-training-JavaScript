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

// const User =function({email, password} = {}) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeEmail = function(newMail){
//   this.email = newMail;
// }

// const mango = new User({email:'mango@mail.com',password:'1111111'});

// mango.changeEmail('new-mango@mail.com');
// console.log(mango);

// ==============================================

// class Car {
//   static description = 'Класс описывающий автомобиль';

//   static loginInfo (carObj) {
//     console.log('Car.logInfo -> carObj', carObj);
//   };

//   // #test = 'test';

//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this._model = model;
//     this._price = price;

//   }

//   changePrice(newPrice){
//     this.price = newPrice;
//   }


//   get model (){
//     return this._model;
//   }

//   set model (newModel){
//     return this._model = newModel;
//   }
//   // updateModel(newModel){
//   //   this.model = newModel;
//   // }
//   get price (){
//     return this._price;
//   }

//   set price (newPrice){
//     return this._price = newPrice;
//   }
// }

// console.dir(Car);
// console.log(Car.description);

// const carInstance = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// })

// console.log(carInstance);

// // Car.loginInfo(carInstance);

// // carInstance.changePrice(50000);

// console.log(carInstance.model);
// // get
// carInstance.model = 'Q6';
// // set 
// console.log(carInstance.model);
// // get

// console.log(carInstance.price);
// // get
// carInstance.price = 70000;
// // set
// console.log(carInstance.price);
// // get

// =========Наслідування класів===========
// -------extends----------
// -------super(аргументи)----------

class Hero {
  constructor({name = 'hero', xp = 0} = {}){
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount){
    console.log(`${this.name} получает ${amount} опыта`);
  }
}

class Warrior extends Hero {
  constructor({weapon, ...restProps} = {}){
    super(restProps);

    this.weapon = weapon;
  }

  attack(){
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}

class Berserk extends Warrior {
  constructor({warcry, ...restProps} = {}) {
    super(restProps);

    this.warcry = warcry;
  }

  babyRage() {
    console.log(this.warcry);
  }
}
const ajax = new Berserk({
  name:'ajax', 
  xp: 1300, 
  weapon: 'axe', 
  warcry: 'WAA'});

console.log(ajax);

ajax.babyRage();
ajax.attack();
ajax.gainXp(200);

class Mage extends Hero {
  constructor({spells, ...restProps} = {}) {
    super(restProps);

    this.spells = spells;
  }

  cast() {
    console.log(`${this.name} что-то там кастует `);
  }
}

// const mango = new Warrior ({name: 'mango', xp: 1000, weapon: 'алебарда'});
// console.log(mango);
// mango.attack();
// mango.gainXp(100);

// const poly = new Mage ({name: 'poly', xp: 2000, spells: ['фаербол', 'e', 'h']});
// console.log(poly);
// poly.cast();
// poly.gainXp(200);



// console.log(mango.__proto__ === Warrior.prototype);
// console.log(Object.getPrototypeOf(mango) === Warrior.prototype);

// console.log('Warrior.prototype', Warrior.prototype);

// console.log('Hero.prototype', Hero.prototype);

// mango.gainXp(1000);
