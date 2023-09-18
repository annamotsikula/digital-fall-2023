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

let myObj : any; 
myObj = 13;
myObj.map(i=> i*2)
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


