//=========================================================
// А что если...
//=========================================================
// function sayHi() {
//     alert("Привет")
// }

// let timerID = setTimeout(sayHi, 1000);
// clearTimeout(timerID);
// alert(timerID);


// let func = setInterval(() => alert('Привет'), 1000)


// setTimeout(() => clearInterval(func), 5000);
//=========================================================
// Задание №1
//=========================================================

// function printNumbers(from, to) {
//     let current = from;

//     let timerId = setInterval(function () {
//         alert(current);
//         if (current == to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000)
// };

// function printNumbers(from, to) {
//     let current = from;

//     let timerId = setTimeout(function go() {
//         alert(current);

//         if (current < to) {
//             setTimeout(go, 1000);
//         }
//         current++;
//     }, 1000)
// };


// printNumbers(1, 5);

//=========================================================
// Codewars
//=========================================================
