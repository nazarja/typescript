// string, number, boolean
const myName: string = 'Sean';
const myNumber: number = 10;
const myBool: boolean = false;

// array
let hobbies: string[] = ['cooking', 'sports'];

// any
let cars: any = 'BMW';

// tuples
let address: [string, number] = ['Superstreet', 99];

// enums
enum Color {
    Gray, 
    Green = 100,
    Blue,
}
let myColor: Color = Color.Gray;

// functions
function returnMyName(name: string): string {
    return name;
}

// void function
function sayHello(): void {
    console.log('Hi There')
}

// function arguments
function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

// function types
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
myMultiply(5,6);

// objects
let data:{ name: string, age: number} = {
    name: 'Sean',
    age: 35
}

// complex objects
let complex: { data: number[], output: (all: boolean) => number[]} = {
    data: [100,3.19,10],
    output: (all: boolean): number[] => {
        return complex.data;
    }
}

// type alias
type Complex = { data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100,3.19,10],
    output: (all: boolean): number[] => {
        return complex2.data;
    }
};

// union types
let myRealAge: number | string = 27;
myRealAge = '35';

// never type
function neverReturns(): never {
    throw new Error('An Error')
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;

let canThisBeAny = null;
canThisBeAny = 'Sean';