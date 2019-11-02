"use strict";
// Simple Generic
function echo(data) {
    return data;
}
;
const echo1 = echo('Sean');
console.log(echo1);
// better generic
function betterEcho(data) {
    return data;
}
const betterEcho1 = betterEcho('string');
const betterEcho2 = betterEcho('string').length;
console.log(betterEcho1);
console.log(betterEcho2);
// built in generics
const testResult = [1.94, 2.33];
testResult.push(15);
// Arrays
function printAll(args) {
    args.forEach(el => console.log(el));
}
printAll(['ball', 'bat']);
// Generic Types
const echo2 = echo;
console.log(echo2('data'));
// Generic Classes
class SimpleMath {
    calculate() {
        return +this.baseValue * +this.multiplyValue;
    }
}
const simpleMath = new SimpleMath();
simpleMath.baseValue = '5';
simpleMath.multiplyValue = 5;
console.log(simpleMath.calculate());
