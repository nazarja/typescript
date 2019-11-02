"use strict";
// Exercise 1 - How was your TypeScript Class?
class Car {
    constructor(name, acceleration) {
        this.name = name;
        this.acceleration = acceleration;
        this.honk = () => console.log('Toooooooooot!');
        this.accelerate = (speed) => {
            this.acceleration = this.acceleration + speed;
        };
    }
}
;
const car = new Car('bmw', 30);
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2 - Two objects, based on each other ...
class BaseObject {
    constructor(width, length) {
        this.width = 0;
        this.length = 0;
        this.width = width;
        this.length = length;
    }
    calcSize() {
        return this.width * this.length;
    }
}
class Rectangle extends BaseObject {
    constructor(width, length) {
        super(width, length);
    }
    ;
}
;
const rectangle = new Rectangle(5, 2);
console.log(rectangle);
console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person2 {
    constructor() {
        this._firstName = '';
    }
    get firstName() {
        return this._firstName;
    }
    ;
    set firstName(name) {
        this._firstName = name;
    }
    ;
}
;
const person2 = new Person2();
console.log(person2.firstName);
person2.firstName = "Ma";
console.log(person2.firstName);
person2.firstName = "Maximilian";
console.log(person2.firstName);
