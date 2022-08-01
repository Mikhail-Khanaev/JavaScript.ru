// "use strict"

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user1 = new User("Богдан");

// alert(user1.name)

// function Example() {
//     alert(new.target);
// }

// Example();
// new Example();

// function User(name) {
//     this.name = name;

//     this.sayHi = function () {
//         alert(`Меня зовут ${this.name}`);
//     };
// }

// let Bogdan = new User("Богдан");
// Bogdan.sayHi();

function Calculator() {
    this.read = function read() {
        this.a = +prompt("a: ", 0);
        this.b = +prompt("b: ", 0);
    };
    this.sum = function sum() {
        return this.a + this.b;
    };
    this.mul = function sum() {
        return this.a * this.b;
    };
};

let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('Сколько нужно добавить?', 0);
    };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);