"use strict";
function greet(person) {
    console.log('Hello, ' + person.name);
}
function changeName(person) {
    person.name = 'Anna';
}
// Object Type
const person = {
    name: 'Sean',
    age: 35,
    hobbies: ['cooking', 'sports'],
    greet(lastName) {
        console.log('Hi, my surname is: ', lastName);
    }
};
greet(person);
changeName(person);
greet(person);
person.greet('Murphy');
// Class Based Type
class MyPerson {
    greet(lastName) { console.log(`Class Log: ${this.name} ${lastName}`); }
}
const myPerson = new MyPerson();
myPerson.name = 'Sean';
myPerson.lastName = 'Murphy';
greet(myPerson);
myPerson.greet(myPerson.lastName);
let myDoubleFunction;
myDoubleFunction = (number1, number2) => {
    return (number1 + number2) * 2;
};
const result = myDoubleFunction(2, 3);
console.log(result);
const oldPerson = {
    age: 35,
    name: 'Sean',
    greet: (lastName) => {
        console.log(`Wahey, you are ${name}`);
    }
};
console.log(oldPerson);
