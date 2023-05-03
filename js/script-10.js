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

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],

  order(pizzaName, onSuccess, onError ) {
    // console.log(pizzaName);
    console.log(onSuccess);
    console.log(onError);
    for(const pizza of this.pizzas) {
      const a = pizzaName
      if(!a === pizza){
        console.log(a);
        console.log(pizza);
      console.log(pizzaName);
        onError(pizza)
        console.log(onError(`There is no pizza with a name ${pizzaName} in the assortment.`));
      }else{
        onSuccess(pizza)
        console.log(onSuccess(pizza));
      }
    }
    
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);
