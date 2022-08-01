"use strict"

let number = 7.35e9;
// alert(number);

let ms = 1e-5;
// alert(ms);

let a = 0b11111111; // бинарная форма записи числа 255
let b = 0o377; // восьмеричная форма записи числа 255

// alert(a == b); // true, с двух сторон число 255


let num = 255;
// alert(num.toString(16));
// alert(num.toString(2));
// alert(num.toString(5));

// alert(123456..toString(36)); // Внимание! Две точки в 123456..toString(36) это не опечатка.

// alert(0.1 + 0.2 == 0.3);
// alert(0.1 + 0.2);

// alert(parseInt("100px"));
// alert(parseInt("1em"));
// alert(parseFloat('12.3.4'));

// let num1 = +prompt("Число №1: ", "");
// let num2 = +prompt("Число №2: ", "");
// alert(num1 + num2);

// alert(Math.round(6.35 * 10) / 10);

// let readNumber = function () {
//     let userNumber = prompt("Введите число: ", "");

//     if (userNumber == +userNumber) {
//         return userNumber;
//     } else if (userNumber == null) {
//         return false;
//     } else {
//         readNumber();
//     }
// };

// readNumber();

// function readNumber() {
//     let num;

//     do {
//         num = prompt("Введите число", 0);
//     } while (!isFinite(num));

//     if (num === null || num === '') return null;

//     return +num;
// }

// alert(`Число: ${readNumber()}`);

// function random(min, max) {
//     return Math.trunc(min + Math.random() * (max - min));
// }
// alert(random(1, 5)); // 1.2345623452
// alert(random(1, 5)); // 3.7894332423
// alert(random(1, 5)); // 4.3435234525