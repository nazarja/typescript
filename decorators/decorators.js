"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructorFn) {
    console.log(constructorFn);
}
let Person3 = class Person3 {
    constructor(name) {
        this.name = name;
    }
};
Person3 = __decorate([
    logged
], Person3);
// Factory
function logging(value) {
    return value ? logged : null;
}
;
let Car1 = class Car1 {
};
Car1 = __decorate([
    logging(false)
], Car1);
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
let Plant1 = class Plant1 {
    constructor() {
        this.name = 'Green Plant';
    }
};
Plant1 = __decorate([
    printable,
    logging(true)
], Plant1);
const plant1 = new Plant1();
plant1.print();
// Method Decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
// PropertyDecorator
function overwritable(value) {
    return function (target, propName) {
        const newDescriptor = {
            writable: value,
        };
        return newDescriptor;
    };
}
class Project2 {
    constructor(name) {
        this.projectName = name;
    }
    calcBudget() {
        console.log(1000);
    }
}
__decorate([
    overwritable(true)
], Project2.prototype, "projectName", void 0);
__decorate([
    editable(true)
], Project2.prototype, "calcBudget", null);
const project2 = new Project2('Super Project');
project2.calcBudget();
project2.calcBudget = function () {
    console.log(2000);
};
project2.calcBudget();
// Parameter Decorators
function printInfo(target, methodName, paramIndex) {
    console.log('Target', target);
    console.log('MethodName', methodName);
    console.log('paramIndex', paramIndex);
}
class Course {
    constructor(name) {
        this.name = name;
    }
    printStudentNumbers(mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    }
}
__decorate([
    __param(1, printInfo)
], Course.prototype, "printStudentNumbers", null);
const course = new Course('Super Course');
course.printStudentNumbers('anything', true);
