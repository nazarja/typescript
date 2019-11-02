"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyMath;
(function (MyMath) {
    let Circle;
    (function (Circle) {
        const PI = 3.14;
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
        ;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath = exports.MyMath || (exports.MyMath = {}));
