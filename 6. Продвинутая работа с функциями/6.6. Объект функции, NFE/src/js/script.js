//=========================================================
// А что если...
//=========================================================
// let sayHi = function func(who) {
//     if (who) {
//         alert(`Hello, ${who}`);
//     } else {
//         sayHi("Guest"); // использует func, чтобы снова вызвать себя же
//     }
// };

// sayHi();

//=========================================================
// Задание №1
//=========================================================

// function makeCounter() {
//     function counter() {
//         counter.set = function (value) {
//             return counter.count = value;
//         }

//         counter.decrease = function () {
//             return counter.count--
//         }

//         return counter.count++;
//     };

//     counter.count = 0;

//     return counter;
// }

// let counter = makeCounter();
// alert(counter()); // 0
// alert(counter()); // 1
// counter.set(10);
// alert(counter());
// alert(counter());
// counter.decrease();
// counter.decrease();
// counter.decrease();
// alert(counter());


//=========================================================
// Codewars
//=========================================================
