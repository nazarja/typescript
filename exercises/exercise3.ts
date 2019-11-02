// Exercise 1 - How was your TypeScript Class?
class Car {
    constructor(public name: string, public acceleration: number) {}

    public honk = (): void => console.log('Toooooooooot!');

    public accelerate = (speed: number): void => {
        this.acceleration = this.acceleration + speed;
    };
};
const car = new Car('bmw', 30);
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
 
// Exercise 2 - Two objects, based on each other ...
class BaseObject {
    public width: number = 0;
    public length: number = 0;

    constructor(width: number, length: number) {
        this.width = width;
        this.length = length;
    }

    public calcSize(): number {
        return this.width * this.length;
    }
}

class Rectangle extends BaseObject {
    constructor(width: number, length: number) {
        super(width, length);
    };
};

const rectangle = new Rectangle(5,2);
console.log(rectangle)
console.log(rectangle.calcSize());
 
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person2 {
    private _firstName: string = '';

    public get firstName(): string {
        return this._firstName;
    }; 

    public set firstName(name: string) {
        this._firstName = name;
    }; 
};

const person2 = new Person2();
console.log(person2.firstName);
person2.firstName = "Ma";
console.log(person2.firstName);
person2.firstName = "Maximilian";
console.log(person2.firstName);