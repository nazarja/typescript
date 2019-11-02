
class Person {
    public name: string;
    protected age: number = 0;
    private type: string = '';

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge():void {
        console.log(this.age)
    }

    setAge(age: number): void {
        this.age = age;
        this.setType('Old Guy');
    }

    private setType(type: string):void {
        this.type = type;
    }
}

// const person =  new Person('Paul', 'superpaul');
// person.setAge(35);
// person.printAge()
// console.log(person);

// inheritance
class Sean extends Person {
    constructor(name: string, username: string) {
        super(name, username);
    }
}

// const sean = new Sean('Sean', 'nazarja');
// sean.setAge(27);
// console.log(sean);

// GETTERS & SETTERS
class Plant {
    private _species: string = 'Default';

    set species(value: string) {
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
    static PI: number = 3.14;

    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

// console.log(2 * Helpers.PI);
// console.log(2 * Helpers.calcCircumference(3));

// Abstract Classes
abstract class Project {
    public projectName: string = '';
    public budget: number = 0;

    abstract changeProjectName(name: string): void;

    calcBudget(): number {
        return this.budget * 2;
    }
}

class ITProject extends Project {

    changeProjectName(name: string): void {
        this.projectName = name;
    }
}

// const itproject = new ITProject();
// itproject.changeProjectName('hello');
// console.log(itproject);

// Private Constructors and Singletons
// read only properties
class OnlyOne {
    private static instance: OnlyOne;
    public readonly greet: string = 'Hello';

    private constructor(public readonly name: string) {}
    
    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one!');
        }    
        return OnlyOne.instance;
    }
};

// let wrong = new OnlyOne('The Only One!');
let right = OnlyOne.getInstance();
// right.name = 'Something else';
console.log(right);

