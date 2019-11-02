// Simple Generic

function echo(data: any): any {
    return data;
};
const echo1 = echo('Sean');
console.log(echo1);


// better generic

function betterEcho<T>(data: T) {
    return data;
}

const betterEcho1 = betterEcho<string>('string');
const betterEcho2 = betterEcho('string').length;
console.log(betterEcho1)
console.log(betterEcho2)


// built in generics
const testResult: Array<number> = [1.94, 2.33];
testResult.push(15);

// Arrays
function printAll<T>(args: T[]) {
    args.forEach(el => console.log(el));
}

printAll<string>(['ball', 'bat'])


// Generic Types
const echo2: <T>(data: T) => T = echo;
console.log(echo2('data'))


// Generic Classes
class SimpleMath <T extends number | string, U extends number | string> {
    public baseValue: T;
    public multiplyValue: U;
    public calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = '5';
simpleMath.multiplyValue = 5;
console.log(simpleMath.calculate())