// ====== Прототипне наслідування =========

// const obj = {
//   name: 'user',
// }

// console.log(obj);

// const arr = [1,2,3,4,5];

// console.log(arr);

// String.prototype.sayHello = function (name){
//   console.log(`Hello my name ${name}`);
// }

// const str = '1234545';
// str.sayHello('Olha');


// const arr = [1,2,3,4];

// arr.forEach(val => console.log(val));

// console.log(arr);

// const obj = {
//   name: 'user',
//   sayHello(){
//     return 'Hello';
//   }
// }

// // console.log(obj);

// const user = Object.create(obj);
// user.age = 11;
// console.log(user);
// // console.log(user.sayHello());

// const admin = Object.create(user);
// admin.sayHello = function(){
//   return 'Hello from admin';
// }
// console.log(admin);
// console.log(admin.sayHello());
// console.log(user.sayHello());

// ========Класи==========

class User {

  static role = {
    admin: 'Admin',
    user: 'User',
  };
  static total = 0;

  static counter(){
    User.total += 1;
    // console.log(User.total);
  };

  #password
  constructor(val1, val2, val3, val4){
    this.name = val1;
    this.email = val2;
    this.#password = val3;
    this.role = val4;
    User.counter()
  }

  get mail(){
    console.log(this.email);
  }

  set mail(newEmail) {
    this.email = newEmail;
  }

  get password(){
    console.log(this.#password);
  }
  set password(newPassword){
   this.#checkPassword(newPassword)
  }

  #checkPassword(newPassword){
    if(newPassword.length > 5){
      this.#password = newPassword;
    }else{
      console.log('Потрібно більше сімволів');
    }
  }
}

class Admin extends User {
  constructor(name,email,password,role,icon){
    super(name,email,password,role)
    this.icon = icon;
  }
}

const objD = new Admin ('Admin','admin@gmail.com','34251', User.role.admin, 'cool icon');
console.log(objD);

// const objA = new User('User','user@gmail.com','12345',User.role.user);
// const objB = new User('Admin','admin@gmail.com','34251', User.role.admin);
// const objC = new User('Gamer','gamer@gmail.com','56784',User.role.user);

// objB.password = '1234567';
// objA.password = '123';

// console.log(objA);
// console.log(objB);
// console.log(objC);

// // // objA.mail = 'test@gmail.com';
// // // objA.mail
// objB.mail
// console.log(objC.role);
// console.log(User.role);

// =========== Exampie1 - Блогер=======

// напиши клас Bloger 
// Напиши клас блогер для створення об'єкта з наступнімі властивостями
// email, age, numberOfPosts - кількість постів,topics - масив
// Додай метод getInfo(), якій у параметрі value приймає рядок:User ${email} is ${age} years old and has ${}
// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів

// class Bloger {
//   constructor({name,age,numberOfPosts,topics}){
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }
//   getInfo(){
//     return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCount(value){
//     this.numberOfPosts += value;
//   }

// }

// const mango = new Bloger({
//   name:'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking']
// })

// console.log(mango);
// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.getInfo());

// =========== Exampie2 ============

// Напиши клас Storage який створює об'єкти для управління складом товарів. При виклику отримувати один аргумент - початковий масив товарів, ш записуватиме його у властивість items

// Додай методи класу
// getItems() - повертає масив товарів
// addItem(item) - отримує новий товар та додає його до поточних
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

// class Storage {
//   constructor(arr){
//     this.items = arr
//   }

//   getItems(){
//     return this.items;
//   }
//   addItem(item){
//     this.items.push(item)
//   }

//   removeItem(item){
//     if(this.items.includes(item)){
//       const idx = this.items.indexOf(item);
//       this.items.splice(idx, 1)
//     }
//   }

// }

// const storage = new Storage (['apple', 'limon', 'grape', 'apricot']);
// console.log(storage);
// storage.addItem('banana');
// console.table(storage.items);
// storage.removeItem('apple');
// console.log(storage.items);

// ============= Exampie3 ===========

// Напиши клас Notes , який управляє колекцією нотаток ш властівості items. Нотака це об'єкт із властівостями text та priority. Додай класу статічну властивість Priority, у якій зберегатиьуться об'єкт із пріорітетами
// {
//   LOW: 'Low',
//   NORMAL: 'Normal',
//   HIGH: 'High'
// }

// Додай методи addNote(note), removeNote(text), updatePriority(text, newPriority)

// class Notes {

//   static Priority = {
//     LOW: 'Low',
//     NORMAL: 'Normal',
//     HIGH: 'High'
//   }
//   constructor(arr){
//     this.items = arr;
//   }
//   addNote(note){
//     this.items.push(note);
//   }

//   removeNote(text){
//     const idx = this.items.findIndex(({text: itemText}) => text === itemText);
//     if(!!~idx){
//       this.items.splice(idx,1)
//     }else{
//       console.log('Немає');
//     }    
//   }
//   updatePriority(text, newPriority){
//     const inArr = this.items.find(item => item.text === text);
//     if(inArr){
//       inArr.priority = newPriority;
//     }else{
//       console.log('No');
//     }
//   }

// }

// const myNotes = new Notes([])

// myNotes.addNote({text: 'Моя перша нотака', priority: Notes.Priority.LOW});
// myNotes.addNote({text: 'Моя друга нотака', priority: Notes.Priority.NORMAL});
// myNotes.addNote({text: 'Моя третя нотака', priority: Notes.Priority.HIGH});
// console.log(myNotes);
// myNotes.removeNote('Моя перша нотака1');
// console.log(myNotes);
// myNotes.updatePriority('Моя третя нотака',Notes.Priority.LOW)
// console.log(myNotes);



