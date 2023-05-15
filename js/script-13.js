// Перебираючі методи масиву

const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true
  },
  {
    make: 'Honda',
    model: 'accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 12,
    price: 22120,
    onSale: false
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true
  },
];

// const getModels = arr => arr.map(({model}) => model);

// console.log(getModels(cars));

// const makeCarsWithDiscount = (cars, discount) => cars.map((car) => {
//   car.price -= car.price / 100 * discount;
//   return car;
// })


// console.log(makeCarsWithDiscount(cars, 6));

// const filterByPrice = (cars, threshold) => cars.filter(({price}) => price < threshold);
// console.log(filterByPrice(cars, 30000));
// -------------------
// onSale - false

// const getCarsWithDiscount = cars => cars.filter(car => !car.onSale);

// console.log(getCarsWithDiscount(cars));

// ================================

// const getCarsWithType = (cars, type) => cars.filter(({type: carType}) => carType === type);

// console.table(getCarsWithType(cars, 'suv'));

// ==========================

// Метод find()

// const getCarByModel = (cars, model) => cars.find(car => car.model === model);

// console.log(getCarByModel(cars, 'Fusion'));

// =============================

//   Метод sort()

// const sortByAscendingAmount = cars => cars.sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

// ========================

// const sortByModel = (cars, order) => cars.sort((a, b) => a.model.localeCompare(b.model));

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// ============================

//      Метод reduce()

// сумма всіх машин

// const getModelIsSale = cars => {
//   const result = cars.reduce((acc, car) => {
//     return acc + car.amount;
//   },0);
//   return result;
// }

// console.log(getModelIsSale(cars));

// ===============================

//    Ланцюжки методів

// моделі що є onSale

// const getAvilableCarNames = cars => {
//   const result = cars.filter(car => car.onSale).map(({model}) => model);
//   return result;
// };

// console.log(getAvilableCarNames(cars));



// ======================================

// Нехай ф-ія getSortedCarOnSale повертає список (марка, модель та ціна)

// const getSortedCarOnSale = cars => {
//   const result =cars.filter(({onSale}) => onSale).sort((a, b) => a.price - b.price);
//   return result.reduce((acc, car, idx) => {
//     return acc + `${idx + 1}. ${car.make} ${car.model} ціна ${car.price}\n`
//   }, `Кількість автомобілів ${result.length}:\n`)
// };
// console.log(getSortedCarOnSale(cars));

// ====================================

// Потрібно повернути об'єле де ключом є назва літери а значенням та кількість раз скільки ця літера зустрічаеться в рядку

const str = 'weeegfhjjjvbbxggnDAss';
const str1 = 'nnvgggddsuCFghjksERtyuiIYTR';

const foo = str => {
  str = str.split('');
  // console.log(str);

  return str.reduce((acc, el) => {
    if(acc.hasOwnProperty(el)){
      acc[el] += 1;
    }else {
      acc[el] = 1;
    }
    return acc
  }, {})
}

console.log(foo(str));
console.log(foo(str1));

