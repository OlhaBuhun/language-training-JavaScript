let totalSpent = 5000;
let payment = 500;
let discount = 0;

if (totalSpent < 100) {
  console.log(`не партнер, скидка 0%`);
  discount = 0;
} else if (totalSpent >= 100 && totalSpent < 1000) {
  console.log(`Бронзовый партнер, скидка 2%`);
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log(`Серебрянный партнер, скидка 5%`);
  discount = 0.05;
} else if (totalSpent >= 5000) {
  console.log(`Золотой партнер, скидка 10%`);
  discount = 0.1;
}

payment -= payment * discount;
console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);
totalSpent += payment;
console.log(`Сумма ваших покупок в нашем магазине составляет ${totalSpent}`);
