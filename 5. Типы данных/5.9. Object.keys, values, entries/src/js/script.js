//=========================================================
// А что если...
//=========================================================


//=========================================================
// Задание №1
//=========================================================

// function sumSalaries(salaries) {
//     return Object.entries(salaries).reduce((sum, [key, value]) => sum + value, 0);
// }

// function sumSalaries(salaries) {
//     let sum = 0;

//     for (let salary of Object.values(salaries)) {
//         sum += salary;
//     }

//     return sum;
// }

let salaries = {
    'John': 100,
    'Pete': 300,
    'Mary': 250,
};

let keys = Object.keys(Object.fromEntries(Object.entries(salaries)));

// for (let key of keys) {
//     alert(key)
// }
// alert(keys.length);

// alert(sumSalaries(salaries));

//=========================================================
// Задание №2
//=========================================================
function count(object) {и
    return Object.keys(object).length;
}

let user = {
    name: 'John',
    age: 30
};

alert(count(user)); 