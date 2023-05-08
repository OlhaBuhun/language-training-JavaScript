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

const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number => number > 10);

console.log(number);

 const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
  { id: 'player-2', name: 'Poly', timePlayed: 456, points: 48, online: true},
  { id: 'player-3', name: 'Kiwi', timePlayed: 127, points: 97, online: false},
  { id: 'player-4', name: 'Ajax', timePlayed: 615, points: 65, online: true},
  { id: 'player-5', name: 'Chelsy', timePlayed: 254, points: 48, online: true},
];

const playerIdFind = 'player-2';

const playerWithId = players.find(({id}) => id === playerIdFind);
console.log(playerWithId);

const finPlayerById = (allplayer, playerId) => {
  return allplayer.find(player => player.id ===playerId);
}
console.log(finPlayerById(players, 'player-1'));
console.log(finPlayerById(players, 'player-5'));


const playerNameToFinde = 'Kiwi';

const playerWithName = players.find( player => player.name === playerNameToFinde);

console.log(playerWithName);

