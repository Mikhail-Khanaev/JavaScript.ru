"use strict"

let MakeUser = function (name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.isAdmin = false;
};

let Bogdan = new MakeUser("Bogdan", 18, "KLD");
let num = +Bogdan; // NaN


let user = {
    name: "John",
    money: 1000,

    // [Symbol.toPrimitive](hint) {
    //     alert(`hint: ${hint}`);
    //     return hint == "string" ? `{name: "${this.name}"}` : this.money;
    // }

    toString() {
        // return `{name: "${this.name}"}`;
        return 200;
    },

    // для хинта равного "number" или "default"
    // valueOf() {
    //     return this.money;
    // }
    // Если valueOf убрать, то toString будет обрабатывать все возможные случаи
};

// демонстрация результатов преобразований:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500