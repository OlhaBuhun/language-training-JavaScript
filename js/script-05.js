
//   ОБ'ЄКТИ !!!!!!   

// const playlist = {
// name: 'Herman',
// rating: 5,
// traks: ['track-1', 'track-2', 'track-3'],
// trackCount: 3
// };

// playlist.qwe = 15;
// playlist.rating = 4;
// console.log(playlist);

// console.log(playlist.name);
// console.log(playlist.rating);
// console.log(playlist['rating']);
// console.log(playlist.traks);
// console.log(playlist.trackCount);


// const username = 'Mango';
// const email = 'mango@mail.com';

// // const signupData = {
// //   username: username,
// //   email: email,
// // };

// // console.log(signupData);

// const signupData = {
//   username,
//   email,
// };

// console.log(signupData);

// <input= 'color' value = 'tomato'

// const inputName = 'color';
// const inputValue = 'tomato';
// const colorPickerData = {
//   // color: 'tomato'
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);


// console.log({ a: 1} === { a: 1} );

// console.log([] === []);

// const a = { x: 1, y: 2};
// const b = a;

// console.log(b === a);

// a.c = 100;
// b.c = 150;
// console.log(a);
// console.log(b);


// const playlist = {
//   name: 'Herman',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   // trackCount: 3,
//   // getName: function()
//   // getName(){
//   //   console.log('Hi getName :)');
//   // },
//   changeName(newName) {
//     console.log('this внутри changeName');

//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updataRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount(){
//     return this.tracks.length;
//   },
//   };

//   playlist.changeName('new name');
//   console.log(playlist);
//   // console.log(playlist.getName);
//   playlist.addTrack('New track');
//   playlist.updataRating(4);
//   console.log(playlist.getTrackCount());
//   console.log(playlist);

  // метод
  // playlist.getName();


  //  Методи перебора об'єкта

  const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
  }

  let totalFeedback = 0;

  const keys = Object.keys(feedback);

  console.log(keys);

  for (const key of keys) {
    console.log(key);
    console.log(feedback[key]);
    

    totalFeedback += feedback[key];
  }

  console.log(totalFeedback);

  const values = Object.values(feedback);

  console.log(values);

  for (const value of values) {
    console.log(value);

    totalFeedback += value;
  }

  console.log('totalFeedback:', totalFeedback);

  // ________________________________

//     Масив об'єктив

  // const friends = [
  //   { name: 'Mango', online: false},
  //   { name: 'Kiwi', online: true},
  //   { name: 'Poly', online: true},
  //   { name: 'Ajax', online: false}
  // ];

  // console.table(friends);

  // for ( const friend of friends) {
  //   console.log(friend.name);

  //   friend.werty = 555;
  // }

  // console.table(friends);
  // _________________________________________

  // Найти друга по имени

  // const friends = [
  //   { name: 'Mango', online: false},
  //   { name: 'Kiwi', online: true},
  //   { name: 'Poly', online: true},
  //   { name: 'Ajax', online: false}
  // ];

  // console.table(friends);

  // const findFriendByName = function (allFriends, friendName) {


  //   for (const friend of friends) {
  //     console.log(friend);
  //     console.log(friend.name);

  //     if (friend.name === friendName) {
  //       return 'Нашли ура!!!'
  //     }
  //   }

  //   return 'Не нашли :('
  // }

  // console.log(findFriendByName(friends, 'Poly'));
  // console.log(findFriendByName(friends, 'Chelsy'));

  // _______________________________________

  // Получить все имена с массива

  // const friends = [
  //   { name: 'Mango', online: false},
  //   { name: 'Kiwi', online: true},
  //   { name: 'Poly', online: true},
  //   { name: 'Ajax', online: false}
  // ];

  // console.table(friends);

  // const getAllName = function (allFriends, friendName) {

  //   const names = [];

  //   for (const friend of friends) {
  //     console.log(friend.name);

  //     names.push(friend.name);
  //   }

  //   return names;
  // }

  // console.log(getAllName(friends));
  // ______________________________________

  //  Получаем имена друзей которые онлайн

  // const friends = [
  //   { name: 'Mango', online: false},
  //   { name: 'Kiwi', online: true},
  //   { name: 'Poly', online: true},
  //   { name: 'Ajax', online: false}
  // ];

  // console.table(friends);

  // const getOnlineName = function (allFriends) {

  //   const onlineFriends = [];

  //   for (const friend of allFriends) {
  //     console.log(friend);
  //     console.log(friend.online);

  //     if (friend.online) {
  //       onlineFriends.push(friend);
  //     }
      
  //   }

  //   return onlineFriends;

  // }

  // console.log(getOnlineName(friends));

  // ;
  
  // ______________________________________________


  // const friends = [
  //   { name: 'Mango', online: false},
  //   { name: 'Kiwi', online: true},
  //   { name: 'Poly', online: true},
  //   { name: 'Ajax', online: false}
  // ];

  // console.table(friends);

  // const getFriendsByOnlineStatus = function (allFriends) {

  //   const friendByStatus = {
  //     online: [],
  //     offline: [],
  //   };

  //   for (const friend of friends) {
  //    console.log(friend);

  //    if (friend.online) {

  //     friendByStatus.online.push(friend);
  //     continue;
  //    }
  //     friendByStatus.offline.push(friend)
  //   }

  //   return friendByStatus;
  // };

  // console.log(getFriendsByOnlineStatus(friends));

  // ____________________________________

  // Узнать кол-во св-в в обьекте

  // const x = {
  //   a: 1,
  //   b: 5,
  //   c: 30,
  //   d: 100,
  // }

  // console.log(Object.keys(x).length);

  // _____________________________________________

  // Работаем с коллекцией товаров в корзине
  // { name: 'apple', price: 50}
  // { name: 'grape', price: 70}
  // { name: 'lemon', price: 60}
  // { name: 'strawberry', price: 110}

  const cart = {
    items: [],
    getItems() {
     return this.items;
    },
    add(product) {
      console.table (this.items);

      for (const item of this.items) {
        console.log(item);

        if(item.name === product.name) {
          console.log('Такой продукт есть', product.name);
          item.quantity += 1;
          return;
        }
      }

      const newProduct = {
        ...product,
        quantity: 1,
      };

      this.items.push(newProduct);

    },
    remove(productName) {
      const { items } = this;

      for (let i = 0; i < items.length; i +=1 ) {
        const { name } = this.items[i];

        if (productName === name ) {
          console.log('Нашли этот продукт', productName);
          console.log('index',i);

          items.splice(i, 1);
        }
      }
    },
    clear() {
      this.items = [];
    },
    countTotalPrice() {
      const { items } = this;

      let total = 0;

      for(const { price, quantity} of items) {

        total += price * quantity;
      }
      return total;
    },
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
  };

  console.log(cart.getItems());

  cart.add({ name: 'apple', price: 50});
  cart.add({ name: 'grape', price: 70});
  cart.add({ name: 'lemon', price: 60});
  cart.add({ name: 'strawberry', price: 110});
  cart.add({ name: 'strawberry', price: 110});
  cart.add({ name: 'strawberry', price: 110});
  cart.add({ name: 'grape', price: 70});

  console.table(cart.getItems());

  cart.countTotalPrice();
  console.log('Total', cart.countTotalPrice());

  cart.remove('strawberry');

  console.table(cart.getItems());

  cart.clear();
  console.log(cart.getItems());
