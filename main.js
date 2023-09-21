// var a = 16;
// var b = 18;
// ES6  let & const 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x = 20; //explicit
x = 33;
var y = 123; // implicit
// y = 34;
var myString = 'TypeScript Introduction';
var isCompleted = false;
var nums = [1, 2, 3, 4, 5, 34, 23, 423, 4];
var nums2 = ['10', '20', '30', '40'];
var student = {
    name: 'John',
    lastName: 'Doe',
    isStudent: true,
    age: 21,
    degree: "Bachelor"
};
console.log(student);
var Course = /** @class */ (function () {
    function Course(name, type) {
        this.name = name;
        this.type = type;
        this.id = this.getCourseId();
    }
    Course.prototype.getCourseId = function () {
        switch (this.type) {
            case "Angular":
                return 103;
            case "React":
                return 104;
            case "VueJS":
                return 105;
            default:
                return null;
        }
    };
    return Course;
}());
var myCourse = new Course('Typescript lecture for entry level', "Angular");
console.log(myCourse);
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.w = width;
        this.h = height;
    }
    Rectangle.prototype.area = function () {
        return this.w * this.h;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.w + this.h);
    };
    return Rectangle;
}());
var rec = new Rectangle(4, 5);
var resultText = 'The surface area of rectangle is ' + rec.area();
console.log(resultText);
console.log("The surface area of rectangle is ".concat(rec.area()));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side, color) {
        var _this = _super.call(this, side, side) || this;
        _this.a = side;
        _this.color = color;
        return _this;
    }
    return Square;
}(Rectangle));
var sq = new Square(9, 'blue');
console.log("The surface area of square is ".concat(sq.area()));
console.log("The perimeter of square is ".concat(sq.perimeter()));
var myCar = {
    model: 'Mercedes',
    year: 2021,
    color: 'black'
};
