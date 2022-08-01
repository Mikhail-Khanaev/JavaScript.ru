"use strict"
let id1 = Symbol("id"); // Создали новый тип данных "символ" с помощью одноимённой функции с описанием "id"
let id2 = Symbol("id"); // Символы с одинаковым описание не равны друг другу

// alert(id1 == id2); // false

let id = Symbol("Пример того, как преобразовывать символы в строки");
// alert(id.toString());
// alert(id.description); // А так мы выведем описание 

let user = {
    name: "Петя",
};

user[id] = 1;
// alert(user[id]);

// Если же мы хотим использовать символы при литеральном объявлении свойств, то нужно заключить символ в квадратные скобки
let bogdan = {
    name: "Богдан",
    [id]: 123, // Вот так
};

for (let key in bogdan) {
    //    alert(key); // Мы видим, что цикл игнорирует свойства с ключом-символом
}

let clone = Object.assign({}, bogdan);
// alert(clone[id]); // Object.assign копирует все свойства объекта, в том числе и символьные

let idExample = Symbol.for("id");
let idAgain = Symbol.for("id");

// alert(idAgain === idExample); // Как мы видим, это один и тот же символ. Это глобальные символы, они содержатся в реестре 

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// получаем имя по символу
// alert(Symbol.keyFor(idExample)); // name
// alert(Symbol.keyFor(sym)); // id

let localSymbol = Symbol();
// alert(Symbol.keyFor(localSymbol)); // возращает undefined 