"use strict"
//=========================================================
// А что если...
//=========================================================

let range = {
    from: 1,
    to: 5,
};

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        value: this.to,

        // теперь пропишем метод next(), который объяснит циклу for..of как нам перебирать наш объект range

        next() {
            if (this.current <= this.value) {
                return { done: false, value: this.current++ }
            } else {
                return { done: true }
            }
        }
    };
};

// for (let num of range) {
//     alert(num);
// }


// let arrayLike = {
//     0: "hello",
//     1: "world",
//     length: 2,
// }

// // let arr = Array.from(arrayLike);
// // let arr = Array.from(range);
// let arr = Array.from(range, (num) => num ** 2);
// alert(arr);

function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
}

let str = '𝒳😂𩷶';

alert(slice(str, 1, 3)); // 😂𩷶

// а вот встроенный метод не поддерживает суррогатные пары
alert(str.slice(1, 3));
//=========================================================
// Задание №1
//=========================================================
