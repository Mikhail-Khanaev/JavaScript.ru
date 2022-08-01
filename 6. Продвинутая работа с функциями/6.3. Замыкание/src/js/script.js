//=========================================================
// А что если...
//=========================================================
// function MakeCounter() {
//     let count = 0;

//     return function () {
//         return count++;
//     }
// };

// let count = MakeCounter();



// alert(count());
// alert(count());
// alert(count());

//=========================================================
// Задание №1
//=========================================================

// function sum(a) {
//     return function (b) {
//         return a + b;
//     }
// }
// alert(sum(1)(2));

//=========================================================
// Задание №2
//=========================================================

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//     return function (x) {
//         if (x >= a && x <= b) return true
//     }
// }

// function inArray(args) {
//     return function (x) {
//         for (let arg of args) {
//             if (x == arg) return true
//         }
//     }
// }

// alert(arr.filter(inBetween(3, 6)));
// alert(arr.filter(inArray([1, 2, 10])));



//=========================================================
// Задание №3
//=========================================================
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(field) {
//     return (a, b) => a[field] > b[field] ? 1 : -1;
// }

// users.sort(byField('name'));
// users.sort(byField('age'));
// users.forEach(user => alert(user.name));


//=========================================================
// Задание №4
//=========================================================

function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function () { // функция shooter
            alert(i); // должна выводить порядковый номер
        };
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3..
//=========================================================
// Codewars
//=========================================================
