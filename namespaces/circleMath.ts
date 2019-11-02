export namespace MyMath {
    export namespace Circle {
        const PI: number = 3.14
        
        export function calculateCircumference(diameter: number): number {
            return diameter * PI;
        };
    }
}
