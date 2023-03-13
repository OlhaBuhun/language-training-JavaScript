// Операция spread - распыление
// Array.prototype.concat() и аналог через  spreat

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// console.log(numbers);

// const numbers = [...[0,6,7,],...[1,2,3],4,5, ...[34,89]];

// console.log(numbers);
// _______________________________________________

// Поиск самой маленькой и самой большой температуры

// const temps = [18, 14, 21, 31, 15, 27,24];

// console.log(Math.min(...temps));
// console.log(Math.max(...temps));
// _________________________________________________

// const a = [1, 2 ,3];
// const b = [ ...a];

// console.log(a === b);
// console.log(a);
// console.log(b);

// const a = [{ x: 1,}, {y: 2}, {z: 3}];
// const b = [ ...a];

// console.log(a === b);
// console.log(a[0] === b[0]);
// console.log(a);
// console.log(b);

// a[0].x = 1000;
// console.log(a);
// console.log(b);



// Сшиваем несколько массивов в один через concat() i spread

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const temps = lastWeekTemps.concat(currentTemps, nextWeekTemps)
// const allTemps = [ ...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

// ___________________________________

// Распыление обьектов
// Object.prototype.assign() i spread

// const a = { x: 1, y: 2};
// const b = { x: 0, z: 3};

// const c = Object.assign({}, a, b);
// console.log(c);

// const z = {
//   ...a,
//   x: 12,
//   ...b,
//   y:34,
// }

// console.log(z);

// _________________________________________

// Деструктуризация обьекта

// const playList = {
//   name: 'Мой плейлист',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// }

// const { rating, name: nameOfUser, tracks, trackCount} = playList;
// tracks.push('qwerty');

// console.log(rating, nameOfUser, tracks, trackCount);
// console.log(name);
// console.log(tracks);
// console.log(trackCount);
// ____________________________________________


//  Глубокая деструктуризация

// const proFile = {
//   name: 'Jacgues Gluke',
//   tag: 'jgluke',
//   location: 'Jamaica',
//   avatar: 'https://',
//   stats: {
//     followers: 4567,
//     views: 3426,
//     likes: 342,
//   }
// };

// const { 
//   name, 
//   tag, 
//   location, 
//   avatar, 
//   stats: {followers, views, likes}
// } = proFile;

// console.log(name,avatar,tag, followers, views, likes);

// ____________________________________

// деструктуризация массивов

// const rgb = [255, 312, 100];

// const [red, , blue] = rgb;

// console.log(red, blue);
// _____________________________________

//  Операция rest

// const proFile = {
//   name: 'Jacgues Gluke',
//   tag: 'jgluke',
//   location: 'Jamaica',
//   avatar: 'https://',
//   stats: {
//     followers: 4567,
//     views: 3426,
//     likes: 342,
//   }
// };

// const { name, tag, location, ...restProps} = proFile;

// console.log(name, tag, location);
// console.log(restProps);

// _____________________________________

//  Патерн Обьект настроек

// const showProfileInfo = function (userProfile) {
//   const { 
//   name, 
//   tag, 
//   location, 
//   avatar, 
//   stats: {followers, views, likes}
// } = userProfile;

// console.log(name,avatar,tag, followers, views, likes);
// }

// const proFile = {
//     name: 'Jacgues Gluke',
//     tag: 'jgluke',
//     location: 'Jamaica',
//     avatar: 'https://',
//     stats: {
//       followers: 4567,
//       views: 3426,
//       likes: 342,
//     }
//   };

// showProfileInfo(proFile);

const myArray = [1, 2, 3, 23];
console.log(myArray);

myArray.forEach(el => console.log(el * 2))

console.log(myArray);

// const newArray =myArray.map(el => el * 3);
const newArray =myArray.map(function(el) {
  return el * 3;
})

console.log(newArray);
console.log(myArray);