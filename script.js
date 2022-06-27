"use strict"

// Свойства-акцессоры

// Свойства обьекта делятся на две категории - свойства-данные и свойства-акцессоры

// Свойства акцессоры делятся на две большие группы:ГЕТТЕРЫ И СЕТТЕРЫ

const persone = {
    name:"Alex",
    age: 25,

    get userAge(){
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
};

console.log(persone.userAge = 30);
console.log(persone.userAge);