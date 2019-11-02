interface NamedPerson {
    name: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function greet(person: NamedPerson): any {
    console.log('Hello, ' + person.name)
}

function changeName(person: NamedPerson): any {
    person.name = 'Anna'
}

// Object Type

const person: {name: string, age: number, hobbies: string[], greet: (lastName: string) => void} = {
    name: 'Sean',
    age: 35,
    hobbies: ['cooking', 'sports'],
    greet(lastName: string) {
        console.log('Hi, my surname is: ', lastName)
    }
}
greet(person);
changeName(person);
greet(person);
person.greet('Murphy');


// Class Based Type

class MyPerson implements NamedPerson {
    public name!: string;
    public lastName!: string;
    greet(lastName: string): void {console.log(`Class Log: ${this.name} ${lastName}`)}
}

const myPerson = new MyPerson();
myPerson.name = 'Sean';
myPerson.lastName = 'Murphy';
greet(myPerson)
myPerson.greet(myPerson.lastName)


// Function Types

interface DoubleValueFunc {
    (number1: number, number2: number) : number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = (number1: number, number2: number): number => {
    return (number1 + number2) * 2
}   
const result = myDoubleFunction(2,3);
console.log(result);


// Interface Inheritence

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 35,
    name: 'Sean',
    greet: (lastName: string): void => {
        console.log(`Wahey, you are ${name}`)
    }
}

console.log(oldPerson)
