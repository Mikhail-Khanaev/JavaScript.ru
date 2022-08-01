// =========================================================
// А что если...
// =========================================================
console.log("Прототипное наследование");


// let animal = {
//     eats: true,

//     walk() {
//         alert("animal walk")
//     }
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;

// // rabbit.getPrototypeOf(animal);

// rabbit.walk();

// let user = {
//     name: "John",
//     surname: "Smith",

//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     }
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true
// };

// alert(admin.fullName); // John Smith (*)

// // срабатывает сеттер!
// admin.fullName = "Alice Cooper"; // (**)
// alert(admin.name); // Alice
// alert(admin.surname);

// =========================================================
// Задание №1
// =========================================================

// =========================================================
// Задание №2 Алгоритм поиска
// =========================================================
let head = {
  glasses: 1
};

let table = {
  __proto__: head,
    pen: 3
};

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

// alert(pockets.pen);


// =========================================================
// Задание №4 Почему наедаются оба хомяка
// =========================================================

let hamster = {
  eat(food) {
    this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple
// =========================================================
// Codewars
// =========================================================
