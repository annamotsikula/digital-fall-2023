// var a = 16;
// var b = 18;
// ES6  let & const 
var x = 20; //explicit
x = 33;
var y = 123; // implicit
// y = 34;
var myString = 'TypeScript Introduction';
var isCompleted = false;
var nums = [1, 2, 3, 4, 5, 34, 23, 423, 4];
var nums2 = ['10', '20', '30', '40'];
var myObj;
myObj = 13;
myObj.map(function (i) { return i * 2; });
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
