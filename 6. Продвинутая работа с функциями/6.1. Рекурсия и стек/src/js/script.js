//=========================================================
// А что если...
//=========================================================
// let company = { // тот же самый объект, сжатый для краткости
//     sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
//     development: {
//         sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
//         internals: [{ name: 'Jack', salary: 1300 }]
//     }
// };

// function sumSalaries(department) {
//     if (Array.isArray(department)) {
//         return department.reduce((prev, current) => prev + current.salary, 0)
//     } else {
//         let sum = 0;
//         for (let subdep of Object.values(department)) {
//             sum += sumSalaries(subdep);
//         }
//         return sum;
//     }
// }

// alert(sumSalaries(company));

//=========================================================
// Задание №1
//=========================================================

function sumTo(n) {
    if (n == 1) {
        return n
    } else {
        return n + sumTo(n - 1);
    }
}

alert(sumTo(100));

//=========================================================
// Задание №2
//=========================================================

function fac(n) {
    if (n == 1) return n
    return n * fac(n - 1);
}

alert(fac(5));

//=========================================================
// Задание №3
//=========================================================

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

alert(fib(5));


//=========================================================
// Codewars
//=========================================================
