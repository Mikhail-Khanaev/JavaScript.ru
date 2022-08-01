// "use strict"
// Сложная тема, к которой придётся не раз вернуться, так как она довольно важная и нужная
// let user = {
//     name: "Богдан",
//     age: 18,
//     studing: "BFU",
// };

// ================================================
// Можно использовать функциональное выражение
// ================================================
// user.sayHi = function () {
//     alert("Привет!");
// };

// user.sayHi();
// ================================================

// ================================================
// А можно заранее объявить функцию, а уже потом добавить её как метод для объекта
// ================================================
/*
function sayHi() {
    alert("Привет!");
}

user.sayHi = sayHi;
user.sayHi();
*/
// ================================================

// ================================================
// А можно записывать функции сразу в литерале объекта
// ================================================
user = {
    sayHi: function () {
        alert("Привет!");
    },
};

// Или можно использовать сокращённую запись
user = {
    sayHi() {
        alert("Привет!");
    },
};
// Однако они не эквивалентны друг другу, но об этих отличиях мне ещё не рассказали...


// А теперь то же самое, но с this
user = {
    name: "Богдан",
    age: 18,
    studing: "BFU",
    sayHi() {
        alert(`Привет, ${this.name}!`);
    },
};
// user.sayHi();
// this не является "фиксированным". Оно вычисляется во время выполнения программы
let userNew = {
    firstName: "Илья",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    },
};

// userNew.sayHi();

let calculator = {
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    },

    read: function () {
        this.a = +prompt("a: ", 0);
        this.b = +prompt("b: ", 0);
    }
};

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
        return this;
    }
};
ladder.up().up().down().showStep();