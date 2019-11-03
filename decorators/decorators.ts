
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person3 {
    constructor(
        public name: string
    ) {}
}

// Factory
function logging(value: boolean): any {
    return value ? logged : null
};

@logging(false)
class Car1 {

}

// Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this)
    }
}

@printable
@logging(true)
class Plant1 {
    public name: string = 'Green Plant';
}

const plant1 = new Plant1();
(<any>plant1).print();


// Method Decorator
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value
    }
}

// PropertyDecorator
function overwritable(value: boolean) {
    return function(target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value,
        }

        return newDescriptor;
    }
}

class Project2 {
    @overwritable(true)
    public projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(true)
    calcBudget() {
        console.log(1000)
    }
}

const project2 = new Project2('Super Project');
project2.calcBudget();
project2.calcBudget = function () {
    console.log(2000)
}
project2.calcBudget()

// Parameter Decorators
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log('Target', target)
    console.log('MethodName', methodName)
    console.log('paramIndex', paramIndex)
}

class Course {
    constructor(public name: string) {}

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(10000)
        }
        else {
            console.log(2000)
        }
    }
}

const course = new Course('Super Course');
course.printStudentNumbers('anything', true)