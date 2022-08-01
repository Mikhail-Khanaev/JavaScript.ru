//=========================================================
// А что если...
//=========================================================

// let arr = ['t', 'e', 's', 't']

// let newArr = arr.slice();
// alert(newArr)

// let obj = {
//     age: 18,
//     name: "Bogdan",
//     address: {
//         city: "KLD",
//         street: "hren znaet",
//     }
// };

// let concatArr = newArr.concat([1, 2], [6, 2], obj.address.city);
// alert(concatArr);

// concatArr.forEach((item, index, array) => {
// alert(`${item} имеет позицию ${index} в ${array}`);
// });

// let users = [
//     { id: 1, name: "Вася" },
//     { id: 2, name: "Петя" },
//     { id: 3, name: "Маша" }
// ];

// let user = users.find(item => item.id == 1);
// alert(user.name);


// let lengths = ['Ксюша', 'Богдан', 'Бим'].map(item => item.length);
// // alert(lengths)

// let numbers = [2, 14, 19, 2312, 4];
// numbers.sort((a, b) => a - b);
// // alert(numbers);
// let result = numbers.reduce((sum, item) => sum + item, 0);
// alert(result)


//===============================
// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//         return user.age >= this.minAge && user.age < this.maxAge;
//     }
// };

// let users = [
//     { age: 16 },
//     { age: 20 },
//     { age: 23 },
//     { age: 30 }
// ];

// найти пользователей, для которых army.canJoin возвращает true
// let soldiers = users.filter(user => army.canJoin(user));

// alert(soldiers.length); // 2
// alert(soldiers[0].age); // 20
// alert(soldiers[1].age);


//=========================================================
// Задание №1
//=========================================================

function camelize(str) {
    str = str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
    alert(str);
}

// camelize("background-color");
// camelize("list-style-image");
// camelize("-webkit-transition");

//=========================================================
// Задание №2
//=========================================================

// функция принимает массив arr,
// ищет в нём элементы между 'a' и 'b' 
// и отдаёт массив этих элементов
// function filterRange(arr, a, b) {
//     // let arr = arr.slice();
//     let result = [];

//     arr.forEach(function (index) {
//         if (arr[index] >= a && arr[index] <= b) {
//             result.unshift(arr[index]);
//         }
//     });
//     return result;
// }

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b))
}

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert(filtered);
// alert(arr);


//=========================================================
// Задание №3
//=========================================================


function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];

        if (value < a || value > b) {
            arr.splice(i, 1);
        }
    }
}

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert(arr);

//=========================================================
// Задание №4
//=========================================================

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert(arr);

//=========================================================
// Задание №5
//=========================================================

// function copySorted(arr) {
//     return arr.slice().sort();
// }


// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (без изменений)


//=========================================================
// Задание №6
//=========================================================
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    };

    this.calculate = function (str) {
        let split = str.split(' ');

        a = split[0];
        op = split[1];
        b = split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
// alert(result);

//=========================================================
// Задание №7
//=========================================================

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = [];
// for (let i = 0; i < users.length; i++) {
//     names.push(users[i].name);
// }

// let names = users.map(item => item.name);

// alert(names);

//=========================================================
// Задание №8
//=========================================================

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// // let usersMapped = [];
// // for (let i = 0; i < users.length; i++) {
// //     usersMapped[i] = {
// //         id: users[i].id,
// //         fullName: `${users[i].name} ${users[i].surname}`,
// //     }
// // }

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));

// // let usersMapped = users.forEach(user => )


// alert(usersMapped[0].id) // 1
// alert(usersMapped[0].fullName)


//=========================================================
// Задание №9
//=========================================================
// function sortByAge(array) {
//     array = array.sort((a, b) => a.age - b.age)
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

//=========================================================
// Задание №10
//=========================================================

function shuffle(array) {
    alert(array.sort(() => Math.random() - 0.5));
}

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// arr = [3, 1, 2]

//=========================================================
// Задание №11
//=========================================================

// function getAverageAge(array) {
//     let result = 0;
//     for (let i = 0; i < array.length; i++) {
//         result += array[i].age;
//     }
//     return Math.floor(result / array.length);
// }
// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// alert(getAverageAge(arr));


//=========================================================
// Задание №12
//=========================================================
function unique(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); 