import { calculateCircumference } from '../modules/circle';
import { calculateRectangle } from '../modules/rectangle';
import { MyMath as rectangle } from '../namespaces/rectangleMath';
import { MyMath as circle} from '../namespaces/circleMath';


console.log(
    calculateCircumference(10),
    calculateRectangle(10,20)
)
console.log(
    rectangle.calculateRectangle(10,20),
    circle.Circle.calculateCircumference(10)
)