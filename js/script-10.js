//  Домашне завдання Модуль 4

//  1

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// console.log(result);

// const pointer = makePizza;
// console.log(pointer);

// 2

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {

//   callback(pizzaName);

//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

// 3

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese",  function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// 4

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
    
//     for (const pizza of this.pizzas) {
//       // console.log(pizza);
//       if(pizza === pizzaName) {
//         // console.log(onSuccess(pizza));
//         return onSuccess(pizza);
//       }
//     }
//     // console.log(onError(pizzaName));
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// // console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// // pizzaPalace.order("Four meats", makePizza, onOrderError);
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// // pizzaPalace.order("Vienna", makePizza, onOrderError);

// 5

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
//   orderedItems.forEach(function(el) {
//     totalPrice += el;
//   })

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 6

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach(function(el, index, arr) {
//     if(el > value) {
//       filteredNumbers.push(el);
//     }
//   })

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// 7

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   firstArray.forEach(function(el, index) {

//     if(secondArray.includes(el)) {
//       commonElements.push(el);
//     }
//   })

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

//  8

// const calculateTotalPrice = (quantity, pricePerItem)=> {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// 9

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
  
// // Change code above this line

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));

// 10

// Change code below this line
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => totalPrice += item );

//   return totalPrice;
// }
// // Change code above this line

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 11

// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([6, 12, 8, 3, 17], 3));

// 12

// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements([12, 21, 32], [12, 4]));

// 13

function changeEven(numbers, value) {
  // Change code below this line
  const newNumbers = [];

  numbers.forEach(element => {
    if(element %2 === 0) {
      element += value
    }
    newNumbers.push(element);
  })
  return newNumbers;
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] % 2 === 0) {
  //     numbers[i] = numbers[i] + value;
  //   }
  // }
  // Change code above this line
}

console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
