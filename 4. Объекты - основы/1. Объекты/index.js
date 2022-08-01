// Есть два способа создания объектов:
let user1 = new Object(); // Синтаксис "конструктор объекта"
let user2 = {}; // Синтаксис "литерал объекта" или "литеральная нотация"

// Мы создали объект с использованием литерального синтаксиса, поэтому мы сразу можем поместить в наш объект свойства
let person = {
    name: "Bogan",
    age: 18,
};

// Мы можем обращаться к свойствам через точку
console.log(person.name);
console.log(person.age);

// Добавляем новое свойство
person.isAdmin = true;
console.log(person.isAdmin);

// И так же можем удалить любое свойство
delete person.age;
console.log(person.age);

let exampleWithManyWords = {
    name: "Mikhail",
    age: 18,
    "like dogs": true,
};
console.log(exampleWithManyWords["like dogs"]);

// Удаление / Добавление свойств происходит точно так же, только ключ пишется в квадратных скобках
delete exampleWithManyWords["like dogs"];
console.log(exampleWithManyWords["like dogs"]);

// Вычисляемые свойства
// let fruit = prompt("Какие фрукты возьмём?", "apples");
let bag = {};

// bag[fruit] = 5;
// console.log(bag[fruit]);

// Свойство из переменной

function makeUser(name, age) {
    return {
        name, // запись эквивалента name: name
        age, // age: age
    };
}

// let user = makeUser("Bogdan", 18);
// alert(user["name"]);

// нет никаких ограничений к именам свойств.
// for (let key in user) {
// alert(key);
// alert(user[key]);
// }



// ============================================================================
// Задания
// ============================================================================

// #1 ========================================================================
// let user = new Object();

// user.name = "John";
// user.surname = "Smith"

// user.name = "Pete";
// console.log(user.name);
// delete user.name;
// console.log(user.name);
// ============================================================================

// #2 ========================================================================
let isEmpty = function (object) {
    for (let key in object) {
        return false;
    }
    return true;
};

let schedule = {};
// alert(isEmpty(schedule));

schedule["8:30"] = "get up";

// alert(isEmpty(schedule));
// ============================================================================

// #3 ========================================================================
function calcSalariesSum(object) {
    let sum = 0;
    for (let key in object) {
        sum += object[key];
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

// alert(calcSalariesSum(salaries));
// ============================================================================

function multiplyNumeric(object) {
    for (let key in object) {
        if (object[key] === Number(object[key])) {
            object[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

alert(menu.width);
alert(menu.height);
