//=========================================================
// А что если...
//=========================================================

// let obj = {
//     name: 'Bogdan',
//     age: 18,
// };

// let map = new Map(Object.entries(obj));
// // alert(map.get('name'));

// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4],
//     [1, 'gav'],
//     ["1", "meow"]
// ]);

// // prices = { banana: 1, orange: 2, meat: 4 }

// for (let key in prices) {
//     // alert(prices[key])
//     alert(key)
// }
// alert(prices[1]);

// let set = new Set(["апельсин", "яблоко", "банан"]);

// // set.add("апельсин");

// for (let value of set) {
//     alert(value)
// }

//=========================================================
// Задание №1
//=========================================================

// function unique(arr) {
//     let set = new Set();

//     for (let key of arr) {
//         if (!set.has(key)) {
//             set.add(key);
//         }
//     }

//     return set;
// }

function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// alert(unique(values));

//=========================================================
// Задание №2 
//=========================================================

function aclean(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].toLowerCase().split("").sort().join("") === arr[j].toLowerCase().split("").sort().join("")) {
                arr.splice(j, 1);
            }
        }
    }
    return arr;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));