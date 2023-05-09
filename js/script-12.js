// Метод map()

// const numbers = [5, 10, 15, 20, 25];

// const doubledNumbers = numbers.map(number => {
//   console.log(number);

//   return number * 2;
// })

// console.log(doubledNumbers);
// console.log(numbers);

// ---------------

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//   { id: 'player-2', name: 'Poly', timePlayed: 456, points: 48, online: true},
//   { id: 'player-3', name: 'Kiwi', timePlayed: 127, points: 97, online: false},
//   { id: 'player-4', name: 'Ajax', timePlayed: 615, points: 65, online: true},
//   { id: 'player-5', name: 'Chelsy', timePlayed: 254, points: 48, online: true},
// ];

// const playerNames = players.map(player => {
//   console.log(player);

//   return player.name;
// });

// console.log(playerNames);

// const playerIds = players.map(player => player.id);
// console.log(playerIds);

// const res = players.map(({name, online}) => ({ name, online}));
// console.log(res);

// const upadetPlayers = players.map(player => ({
//     ...player,
//     points: player.points * 1.1,
//   }));

// console.log(upadetPlayers);
// console.table(upadetPlayers);


// const playerIdUpdate = 'player-3';

// const updatedPlayers = players.map(player => {

//   console.log(player.id);

//   if(playerIdUpdate === player.id) {

//     return {
//       ...player,
//       timePlayed:player.timePlayed + 100,
//     };
//   }
//   return player;
  
// });

// // тернарник

// // const updatedPlayers = players.map(player => 
// //   playerIdUpdate === player.id
// //   ? {...player, timePlayed: player.timePlayed + 100}
// //   : player);

// console.table(updatedPlayers);

// метод  filter()

// const numbers = [5, 10, 15, 20, 25];

// const filterNumbers = numbers.filter(number => number < 10 || number > 20);
//  console.log(filterNumbers);

//  const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//   { id: 'player-2', name: 'Poly', timePlayed: 456, points: 48, online: true},
//   { id: 'player-3', name: 'Kiwi', timePlayed: 127, points: 97, online: false},
//   { id: 'player-4', name: 'Ajax', timePlayed: 615, points: 65, online: true},
//   { id: 'player-5', name: 'Chelsy', timePlayed: 254, points: 48, online: true},
// ];

// const onlinePlayers = players.filter(player => player.online);
// console.table(onlinePlayers);

// const oflinePlayers = players.filter(player =>!player.online);
// console.table(oflinePlayers);

// const hardcorePlayers = players.filter(player => player.timePlayed > 250);
// console.table(hardcorePlayers);

// метод find()

// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find(number => number > 10);

// console.log(number);

//  const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//   { id: 'player-2', name: 'Poly', timePlayed: 456, points: 48, online: true},
//   { id: 'player-3', name: 'Kiwi', timePlayed: 127, points: 97, online: false},
//   { id: 'player-4', name: 'Ajax', timePlayed: 615, points: 65, online: true},
//   { id: 'player-5', name: 'Chelsy', timePlayed: 254, points: 48, online: true},
// ];

// const playerIdFind = 'player-2';

// const playerWithId = players.find(({id}) => id === playerIdFind);
// console.log(playerWithId);

// const finPlayerById = (allplayer, playerId) => {
//   return allplayer.find(player => player.id ===playerId);
// }
// console.log(finPlayerById(players, 'player-1'));
// console.log(finPlayerById(players, 'player-5'));


// const playerNameToFinde = 'Kiwi';

// const playerWithName = players.find( player => player.name === playerNameToFinde);

// console.log(playerWithName);

// метод every

//  метод some

//  Метод reduce()

// const numbers = [5, 10, 15, 20 ,25];

// const total = numbers.reduce((acc, number) => {
//   console.log('number', number);
//   console.log('acc', acc);
//   return acc + number;
// }, 0);

// console.log(total);

// -----------------------

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//    0,
//    );

// console.log(totalSalary);

// -----------------------------

//  const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//   { id: 'player-2', name: 'Poly', timePlayed: 456, points: 48, online: true},
//   { id: 'player-3', name: 'Kiwi', timePlayed: 127, points: 97, online: false},
//   { id: 'player-4', name: 'Ajax', timePlayed: 615, points: 65, online: true},
//   { id: 'player-5', name: 'Chelsy', timePlayed: 254, points: 48, online: true},
// ];

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,0);

// console.log(totalTimePlayed);
// --------------------------------

// const cart = [
//   {label: 'Appies', price: 100, quantity: 2},
//   {label: 'Bananas', price: 120, quantity: 3},
//   {label: 'Lemons', price: 70, quantity: 4},
// ];

// const totalAmount = cart.reduce(
//   (total, item) => total + item.price * item.quantity, 0);

//   console.log(totalAmount);

// ---------------------------------------------------

const tweets = [
  {id: '000', likes: 5, tags: ['js', 'nodejs']},
  {id: '001', likes: 3, tags: ['html', 'css']},
  {id: '002', likes: 15, tags: ['html','js', 'nodejs']},
  {id: '003', likes: 8, tags: ['css', 'react']},
  {id: '004', likes: 0, tags: ['js', 'nodejs', 'react']},
];

const allTags = tweets.reduce((tags, tweet) => {
  // tags.push(...tweet.tags);

  // return tags;

  return [...tags, ...tweet.tags];
}, []);

console.log(allTags);

// Стастика тегов

// const tagsStats = allTags.reduce((acc,tag) => {
//   console.log(acc);

//   if(acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }
//   acc[tag] = 1;

//   return acc;
// }, {});

// console.log(tagsStats);

// если свойство с ключом tag есть - увеличить значение на 1
// если свойства нет, то записую 1


// то же имутабельность
const tagsStats = allTags.reduce((acc,tag) => {
  // console.log(acc);

  // if(acc[tag]) {
  //   return {
  //     ...acc,
  //     [tag]: acc.tag + 1,
  //   };
  // }
  // acc[tag] = 1;

  // return {
  //   ...acc,
  //   [tag]: 1,
  // };

  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  }
}, {});

console.log(tagsStats);
