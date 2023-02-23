//    EXAMPLE 1
// Створить масив genres з єлементами Jazz i Bluez
// Додайте "Rock' n 'roll" в кінець
// Виведете в консоль першій елемент масиву
// Виведете в консоль останній елемент масиву.(вільна довжіна)
// Видаліть перший елемент та виведіть в консоль
// Вставте "Country" та "Reggae" на початок масиву

// const genres = ['Jazz', 'Bluez'];
// console.log(genres);
// genres.push('Rock', ' n ', 'roll');
// console.log(genres);
// const firstGenres = genres[0];
// console.log(firstGenres);
// const lastGenres = genres[genres.length - 1];
// console.log(lastGenres);
// const deletedGenres = genres.splice(0, 1);
// console.log(deletedGenres);
// console.log(genres);
// const newGenres = genres.unshift("Country", "Reggae")
// console.log(genres);
// const deleted = genres.shift();
// console.log(deleted);
// console.log(genres);
// const insert = genres.splice(genres.length, 0, 'Jazz')
// console.table(genres);

// //    EXAMPLE 2

// Напиши скрипт для обчіслення площі прямокутніка зі сторонами, знaчення яких
// зберігаються в змінной величині у вигляді рядка. Значення гарантовано
// розділені пробілом. Метод split

// const values = '8 11';
// const array = values.split(" ");
// console.log(array);
// const square = Number(array[0]) * Number(array[1]);
// console.log('Square: ',square);

// //    EXAMPLE 3

// // Напиши скрипт для перебору масиву fruits циклом for. Для кожного елементу масиву
// // виведіть у консоль рядок у форматі номер_елемент: значення_елемента.
// // Нумерація елементів має починатися з першого.

// const fruits = ['apple', 'strawberry', 'cherry', 'cranberries', 'lemon'];
// console.table(fruits);

// // for (const fruit of fruits) {
// //   console.log(fruits.indexOf(fruit) + 1, fruit);
// // }

// // for (let i = 0; i < fruits.length; i += 1) {
// //   console.log(i + 1, fruits[i]);
// // }

// for (let i = 0, num = 1; i < fruits.length; i += 1, num += 1) {
//   console.log(num, fruits[i]);
// }

//    EXAMPLE 4

// Напиши скрипт, який виводить у консоль ім'я та телефон
// користовича у змінних names i phones зберегаються рядки
// імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказує
// на відповідність. Кількість імен та телефонів однакова.
//    Метод split
// 1.  заменяю в строках "," на "пробел"
// 2. преобразую строки в массивы
// 3. делаем перебор элементов одного массива с помощью for,
// //    вывадя в консоль одновременно элементы обоих массивов равными " i"
// const names = 'Jacob,William,Solomon,Kate';
// // const namesSpace = names.replaceAll(',', ' ');
// // console.log(namesSpace);
// const phones = '13456784567,32436576869,09560294173,45013298451';
// // const phonesSpace = phones.replaceAll(',', ' ');
// // console.log(phonesSpace);
// const arrayNames = names.split(',');
// const arrayPhones = phones.split(',');
// console.log(arrayNames);
// console.log(arrayPhones);

// for (let i = 0; i < arrayNames.length, i < arrayPhones.length; i += 1) {
//   console.log(arrayNames[i], arrayPhones[i]);
// }
// console.log(arrayPhones[0])

// console.log(arrayNames[0], arrayPhones[0]);
// console.log(arrayNames[1], arrayPhones[1]);
// console.log(arrayNames[2], arrayPhones[2]);

//   EXAMPLE 5

// Напиши скрипт, який виводить у консоль усі слова рядка крім першого та останнього
// Результуючий рядок не повинен почінатіся або закінчуватіся пробілом.
// Скрипт повинен працювати для будь якого рядка. splice pop shift

// 1. Преобразуем рядок в масив
// 2. Убераем первое и последнее слово
// 3.

// const string = 'Welcome to the future';
// // const arrString = string.split(' ').slice(1, - 1).join(' ');
// const arrString = string.split(' ');
// // console.log(arrString);
// // arrString.splice(0, 1)
// // console.log(arrString);
// // arrString.splice(-1);
// // let a = arrString.join(' ')
// // console.log(a);
// console.log(arrString);
// arrString.shift();
// console.log(arrString);
// arrString.pop();
// console.log(arrString);
// const str = arrString.join(' ');
// console.log(str);

//   EXAMPLE 6

// Напиши скрипт якій развертає рядок (зворотній порядок літер)
// і його в консоль.
// Методи split revers join

// const string = 'Welcome to the future';
// // const arr = string.split('');
// // console.log(arr);
// // const rev = arr.reverse();
// // console.log(arr);
// // const result = arr.join('');
// // console.log(result);
// const arr = string.split(' ');
// console.log(arr);
// const rev = arr.reverse();
// console.log(arr);
// const result = arr.join(' ');
// console.log(result);

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length-1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

// Завдання 9/32

// Напиши функцію getExtremeElements(array), яка приймає один параметр
// array - масив елементів довільної довжини.
// Функція повинна повертати масив з двох елементів - першого і останнього елемента
// параметра array.

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]
//  Алгоритм
// 1. Создаем переменную array1
// 2. Ищем метод в доках, который вернет на 1 и последний элемент изначального массива
// 3. Считаю что оптимально применить метод splice(). Вырезаем из исходного массива середину
// используя метод Length - 2 и оставляя первый элемент. Таким образо мы изменим исходный
// массив который примет результат решении задачи


// function getExtremeElements(array) {
//   // Change code below this line
//   let array1 = []
//   // array1 = array.splice(1, array.length -2);
//     array1 = array.slice(0, 1) 
//     array1 = array.slice(-1)
//   // array1 = [array.shift(), array.pop()];
//   return array1;


//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);

//   // Change code above this line
//   return words;
// };

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let total;
//   total = message.split(' ').length * pricePerWord;

//   return total
//   // Change code above this line
// };

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
// };

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// function slugify(title) {
//   // Change code below this line
//   let slug;

//   slug = title.toLowerCase().split(' ').join('-');

//   return slug;
//   // Change code above this line
// };

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice( -3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);

// 1. Обьединяем два массива в один
// 2. 

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let newArray;

//   newArray = firstArray.concat(secondArray);
//   // console.log(newArray);

//   if(newArray.length > maxLength) {
//     newArray = newArray.slice(0, maxLength);
//     return newArray;
//   }
//   return newArray;


//   // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// function calculateTotal(number) {
//   // Change code below this line
//     const min = 1;
//     const max = number;
//     let total = 0;

//     for (let i = min; i <= max; i += 1) {
//       // console.log(i);
     
//       total += i;
      
//     }
//     return total;
 
//    // Change code above this line
//  }

//  console.log(calculateTotal(1));
//  console.log(calculateTotal(3));
//  console.log(calculateTotal(7));
//  console.log(calculateTotal(18));
//  console.log(calculateTotal(24));
//  console.log(calculateTotal(112));

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([16, 5, 19, 70]));


// 1. Сделаю из строки массив
// 1.1 делаем переменную word
// 2. Обьявляю цикл номерной для перебора элементов массива
// 3. в теле цикла оператор if  сравниваю кол-во символов в переменной word (word.length) с кол-во символов элемента массива и если он больше тогда перезаписываем переменную word этим элементом, если ложно возращаемся к перебору
//  - определяю колличество знаков в элемете массива
//  - 

// function findLongestWord(string) {
//   // Change code below this line
//   const arrString = string.split(' ');
//   let word = '';

//   for (let i = 0; i < arrString.length; i += 1) {
//     if (word.length < arrString[i].length) {
//       word = arrString[i];
//     }
    
  
//   }

//   return word;
//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));
// console.log(findLongestWord("Hello Jo"));

// 

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
  
//       for (let i = min; i <= max; i += 1) {
        
//         numbers.push(i);
//       }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers(15, 21));

// 1. 

// function filterArray(numbers, value) {
//   // Change code below this line
//   const newNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
   
//     if (numbers[i] > value) {
//       newNumbers.push(numbers[i]);
//     }

//   }

//   return newNumbers;

//  // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([10, 11, 12, 13, 14], 13));

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit);// Change this line
// }

// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));
// console.log(checkFruit("apPle"));

// 1. Обьявляю константу нового массива array3
// 2. Делаю циклом перебор элементов массива array1
// 3. Выполняем сравнения (оператором if) элемента массива array1[i] с элементами array2 с помощью  array2.includes(array1[i])
// 4. с помошью push добавляем в новый массив элемент array3.push(array1[i])

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const array3 = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     console.log(i);

//     if (array2.includes(array1[i])) {
//       array3.push(array1[i])
//     }
//   }


//   return array3
//  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements([16, 12, 3], [12, 4]));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const value of order) {
//     total += value;
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));
// console.log(calculateTotalPrice([234, 15, 317, 4]));

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([15, 4, 35, 9], 5));


// Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// 1. Обьявляем переменную arrayEvenNumbers[]
// 2. С пошью цикла перебираем от start до end и если число четное то добавляем в arrayEvenNumbers с помощью push

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const arrayEvenNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if ( i % 2 === 0) {
//       arrayEvenNumbers.push(i);
//     }
//   }
//   return arrayEvenNumbers;

//    // Change code above this line
//  }

//  console.log(getEvenNumbers(2, 5));
//  console.log(getEvenNumbers(3, 11));
//  console.log(getEvenNumbers(6, 12));
//  console.log(getEvenNumbers(8, 8));
//  console.log(getEvenNumbers(7, 7));
//  console.log(getEvenNumbers(7, 15));

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
//  console.log(number);


// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }

//   // return number;
//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

// 1. Обьявляем переменную coincided
// 2. Делаем цикл перебора элементов массива array
// 3. спомощью if сравниваем элементы массива с value
// 4. если есть совпадение ставим true

function includes(array, value) {
  // Change code below this line
  let coincided;

  for ( let i = 0; i < array.length; i += 1) {

    if ( array[i] === value) {
      coincided = true;
      
      return coincided;
    } 
     
  }
  coincided = false;
  return coincided
  // Change code above this line
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
console.log(includes([16, 5, 19, 70], 52));