"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("../modules/circle");
const rectangle_1 = require("../modules/rectangle");
const rectangleMath_1 = require("../namespaces/rectangleMath");
const circleMath_1 = require("../namespaces/circleMath");
console.log(circle_1.calculateCircumference(10), rectangle_1.calculateRectangle(10, 20));
console.log(rectangleMath_1.MyMath.calculateRectangle(10, 20), circleMath_1.MyMath.Circle.calculateCircumference(10));
