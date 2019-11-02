"use strict";
class Person {
    constructor(name, username) {
        this.username = username;
        this.age = 0;
        this.type = '';
        this.name = name;
    }
    printAge() {
        console.log(this.age);
    }
    setAge(age) {
        this.age = age;
        this.setType('Old Guy');
    }
    setType(type) {
        this.type = type;
    }
}
// const person =  new Person('Paul', 'superpaul');
// person.setAge(35);
// person.printAge()
// console.log(person);
// inheritance
class Sean extends Person {
    constructor(name, username) {
        super(name, username);
    }
}
// const sean = new Sean('Sean', 'nazarja');
// sean.setAge(27);
// console.log(sean);
// GETTERS & SETTERS
class Plant {
    constructor() {
        this._species = 'Default';
    }
    set species(value) {
        if (value.length >= 3) {
            this._species = value;
        }
        else {
            this.species = 'Default';
        }
    }
    get species() {
        return this._species;
    }
}
// let plant = new Plant();
// plant.species = 'ABC'
// console.log(plant.species);
// Static Properties && Methods
class Helpers {
    static calcCircumference(diameter) {
        return this.PI * diameter;
    }
}
Helpers.PI = 3.14;
// console.log(2 * Helpers.PI);
// console.log(2 * Helpers.calcCircumference(3));
// Abstract Classes
class Project {
    constructor() {
        this.projectName = '';
        this.budget = 0;
    }
    calcBudget() {
        return this.budget * 2;
    }
}
class ITProject extends Project {
    changeProjectName(name) {
        this.projectName = name;
    }
}
// const itproject = new ITProject();
// itproject.changeProjectName('hello');
// console.log(itproject);
// Private Constructors and Singletons
// read only properties
class OnlyOne {
    constructor(name) {
        this.name = name;
        this.greet = 'Hello';
    }
    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one!');
        }
        return OnlyOne.instance;
    }
}
;
// let wrong = new OnlyOne('The Only One!');
let right = OnlyOne.getInstance();
// right.name = 'Something else';
console.log(right);
