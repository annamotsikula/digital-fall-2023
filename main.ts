// var a = 16;
// var b = 18;
// ES6  let & const 

let x: number = 20; //explicit
x = 33;

const y = 123; // implicit
// y = 34;
let myString : string = 'TypeScript Introduction';
let isCompleted: boolean = false;

const nums: number[] = [1,2,3,4,5,34,23,423,4]
const nums2: Array<string> = ['10', '20', '30', '40']

// let myObj : any; 
// myObj = 13;
// myObj.map(i=> i*2)
// myObj = 'I am an object'
// myObj = [123,345]

// let nothing : unknown;
interface Student {
    name: string;
    lastName: string;
    age: number;
    isStudent?: boolean
    degree: Degree
}

const student: Student = {
    name: 'John',
    lastName: 'Doe',
    isStudent: true,
    age: 21,
    degree: "Bachelor"
}

type Degree = 'Bachelor' | 'Master' | 'Doctor'
type CourseType = 'Angular' | "React" | 'VueJS'
console.log(student);

class Course {
    name: string;
    id: number | null;
    type: CourseType

    constructor(name: string, type: CourseType) {
        this.name = name;
        this.type = type
        this.id = this.getCourseId()
    }

    getCourseId(): number | null {
        switch(this.type) {
            case "Angular":
                return 103;
            case "React":
                return 104;
            case "VueJS":
                return 105
            default:
                return null
        }
    }
}

const myCourse = new Course('Typescript lecture for entry level', "Angular")

console.log(myCourse);

interface Shape {
  color: string
}

class Rectangle {
    w: number;
    h: number;

    constructor(width: number, height: number) {
        this.w = width;
        this.h = height
    }

    area(): number {
        return this.w * this.h
    }

    perimeter(): number {
        return 2 * (this.w + this.h)
    }
}

const rec = new Rectangle(4,5);
let resultText = 'The surface area of rectangle is ' + rec.area();
console.log(resultText)

console.log(`The surface area of rectangle is ${rec.area()}`)

class Square extends Rectangle implements Shape{
    color: string;
    a: number;

    constructor(side: number, color: string) {
        super(side, side);
        this.a = side;
        this.color = color;
    }
}

const sq = new Square(9, 'blue');

console.log(`The surface area of square is ${sq.area()}`)
console.log(`The perimeter of square is ${sq.perimeter()}`)


interface Car {
    model: string,
    year: number,
    color: string,
}

const myCar : Car = {
    model: 'Mercedes',
    year: 2021,
    color: 'black'
}


