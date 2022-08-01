"use strict"

// alert("Hello\n".length);

// let str = "Bogdan";

// alert(str[0]);
// alert(str.charAt(0));
// alert(str.charAt(str.length - 1)); // Последний символ

// alert(str[1000]); // undefined
// alert(str.charAt(1000)); // '' (пустая строка)


// for (let char of str) {
//     // alert(char);
//     console.log(char);
// }


// let exampleOfLowerAndUpperCase = "exampleOfLowerAndUpperCase";
// alert(exampleOfLowerAndUpperCase.toLowerCase());
// alert(exampleOfLowerAndUpperCase.toUpperCase());

// let someString = 'Widget with id';
// alert(someString.indexOf('Widget')); // 0, потому что подстрока 'Widget' найдена в начале
// alert(someString.indexOf('widget')); // -1, совпадений нет, поиск чувствителен к регистру

// alert(someString.indexOf("id")); // 1, подстрока "id" найдена на позиции 1 (..idget with id)
// alert(someString.indexOf("id", 2)); // 1, подстрока "id" найдена на позиции 1 (..idget with id)

// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = "Иа";

// // let pos = 0;
// // while (true) {
// //     let foundPos = str.indexOf(target, pos);
// //     if (foundPos == -1) break;


// //     alert(`Найдено тут: ${foundPos}`);
// //     pos = foundPos + 1; // продолжаем со следующей позиции
// // }
// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//     alert(pos);
// }

// let str = "stringify";
// // 'strin', символы от 0 до 5 (не включая 5)
// alert(str.slice(0, 5));
// // 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
// alert(str.slice(0, 1));

// let str = '';

// for (let i = 65; i <= 220; i++) {
//     str += String.fromCodePoint(i);
// }
// alert(str);

// alert('𝒳'[0]); // странные символы…
// alert('𝒳'[1]);

// let ucFirst = function (str) {
//     return str[0].toUpperCase() + str.slice(1);
// };

// alert(ucFirst("вася"));

let checkSpam = (str) => str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx");

// alert(checkSpam('buy ViAgRA now'));
// alert(checkSpam('free xxxxx'));
// alert(checkSpam("innocent rabbit"));

let truncate = function (str, maxLength) {
    if (str.length < maxLength) return str;
    else return (str.slice(0, maxLength - 1) + "...");
};

// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// alert(truncate("Всем привет!", 20));

let extractCurrencyValue = (str) => +str.slice(1);
// alert(extractCurrencyValue('$120') === 120);