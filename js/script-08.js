// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   // поточний баланс рахуну
//   balance: 0,

//   // історія транзакцій
//   transactions: [],

//   // Метод створює та повертає об'єкт транзфаій. Приймає суму та тіп транзакціі
//   createTransaction(amount, type) {
//     const transaction = {
//       amount,
//       type,
//       id : Date.now(),
//     }
//     // console.log(transaction);
//     return transaction;
    
//   },
//   // Метод, що відповідає за додавання суми до балансу.
//   // Приймає суму транзакції
//   // Виклікає createTransaction для створення об'єкта транкзації
//   // після чого додає його в історію транзакції
//   deposit(amount) {
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//     this.balance += amount;
//     // console.log(deposit(amount));
//     // console.log(this.transactions);
//   },

//   // Метод, що відповідає за зняття суми з балансу.
//   //  Приймає суму транзакції
//   // Викликає createTransaction для створення об'єкта транкзації
//   // після чого додає його в історію транзакції

//   // ялщо amount > чем поточній баланс,
//   // виводе повідомлення 'Не достатньо коштів'

//   withdraw (amount) {
    
//     if (this.balance < amount) {
//       console.log('Не достатньо коштів');
//       return;
//     }
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW)
//     this.transactions.push(transaction);
//     this.balance -= amount;

//   },

//   // Метод повертае поточній баланс
//   getBalance() {
//     console.log(this.balance);
//   },

//   // Метод шукає та повертає об'єкт транзакціі по ID
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         console.log(transaction);
//       }

//     }
//   },

//   // Метод повертає кількьсть коштів
//   // певного типу з усіею історіі
//   getTransactionTotal (type) {
//     let total = 0;

//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   }
// };

// // account.createTransaction(1000, Transaction.DEPOSIT);
// // console.log(account.createTransaction(1000, Transaction.DEPOSIT));
// account.deposit(2000);
// account.deposit(2300);
// account.deposit(2100);
// account.deposit(200);
// account.withdraw(1000);
//   account.withdraw(500);
//   account.withdraw(100);
//   account.withdraw(2000);
// // account.getBalance();
// setTimeout(() => {
  
// }, 2000);
// // account.getTransactionTotal()
// console.log(account);
// // console.log(account.getBalance());
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));


// Task 2
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів 
//  function calcBMI({weight, height}) {
//     const nomericWeight = Number(weight.replace(',', '.'));
//     const nomericHeight = Number(height.replace(',', '.'));

//     return Number((nomericWeight / nomericHeight ** 2).toFixed(1));
//  }
//  console.log(calcBMI({
//     weight: '88,3',
//     height: '1.75',
//  }));
//  console.log(calcBMI({
//   weight: '68,3',
//   height: '1.65',
// }));
// console.log(calcBMI({
//   weight: '118,3',
//   height: '1.95',
// }));

// Task 3 Деструктуризація
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів 

// function printContactsInfo({names, phones}) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   for (let i = 0; i < nameList.length, i < phoneList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }

// }

// printContactsInfo({
//   names:  ' Jacob, William, Solomon, Artemis, Anna',
//   phones: ' 234567, 345345, 6758494, 3452335',
// });

// Task4 Глубока Деструктуризація
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів 

function getBotReport({componyName, bots : {repairBots, defenceBots}}) {
  return `${componyName} has ${repairBots + defenceBots} bots in stock`;
}

console.log(getBotReport({
  componyName: 'Cyberdyne Systems',
  bots: {
    repairBots: 150,
    defenceBots: 50,
  }
  
}));



