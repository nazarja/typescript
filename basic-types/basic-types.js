"use strict";
// string, number, boolean
const myName = 'Sean';
const myNumber = 10;
const myBool = false;
// array
let hobbies = ['cooking', 'sports'];
// any
let cars = 'BMW';
// tuples
let address = ['Superstreet', 99];
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Gray;
// functions
function returnMyName(name) {
    return name;
}
// void function
function sayHello() {
    console.log('Hi There');
}
// function arguments
function multiply(num1, num2) {
    return num1 * num2;
}
// function types
let myMultiply;
myMultiply = multiply;
myMultiply(5, 6);
// objects
let data = {
    name: 'Sean',
    age: 35
};
// complex objects
let complex = {
    data: [100, 3.19, 10],
    output: (all) => {
        return complex.data;
    }
};
let complex2 = {
    data: [100, 3.19, 10],
    output: (all) => {
        return complex2.data;
    }
};
// union types
let myRealAge = 27;
myRealAge = '35';
// never type
function neverReturns() {
    throw new Error('An Error');
}
// nullable types
let canBeNull = 12;
canBeNull = null;
let canThisBeAny = null;
canThisBeAny = 'Sean';
