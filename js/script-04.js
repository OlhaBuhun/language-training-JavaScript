//    EXAMPLE 1
// Створить масив genres з єлементами Jazz i Bluez
// Додайте "Rock' n 'roll" в кінець
// Виведете в консоль першій елемент масиву
// Виведете в консоль останній елемент масиву.(вільна довжіна)
// Видаліть перший елемент та виведіть в консоль
// Вставте "Country" та "Reggae" на початок масиву

const genres = ['Jazz', 'Bluez'];
console.log(genres);
genres.push('Rock', ' n ', 'roll');
console.log(genres);
const firstGenres = genres[0];
console.log(firstGenres);
const lastGenres = genres[genres.length - 1];
console.log(lastGenres);
const deletedGenres = genres.splice(0, 1);
console.log(deletedGenres);
console.log(genres);
const newGenres = genres.unshift("Country", "Reggae")
console.log(genres);
const deleted = genres.shift();
console.log(deleted);
console.log(genres);
const insert = genres.splice(0, 0, 'Jazz')
console.table(genres);