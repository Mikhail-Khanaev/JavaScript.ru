//=========================================================
// А что если...
//=========================================================

// let array = [, 'Ксюша', 'Бим', 'Алексей'];

// let [...copy] = array;
// copy[0] = 'Алексей';

// // alert(array);


// let [name1 = "Миша", name2 = "Паша", ...nameOst] = array;

// alert(name1);
// alert(name2);
// alert(nameOst);

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };

// let { title: t, ...rest } = options;

// alert(Object.values(rest));

//=========================================================
// Задание №1
//=========================================================
let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user;

// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false


//=========================================================
// Задание №2
//=========================================================
function topSalary(salaries) {
    let max = 0;
    let name = "";
    let array = Object.entries(salaries);

    for (let [key, value] of array) {
        if (value > max) {
            max = value;
            name = key;
        }
    }

    return `${name} получает ${max}$`;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


// alert(topSalary(salaries));

//=========================================================
// Codewars
//=========================================================
function codewars(array) {
    let str = array.join('');
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) != (str.charCodeAt(i + 1) - 1)) {
            return String.fromCharCode(str.charCodeAt(i) + 1)
        }
    }
    return null;
}

alert(codewars(['O', 'Q', 'R', 'S']));
// alert(codewars("Welcome"));