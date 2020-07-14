// let name = "Zahid";
// let surname = "Qasimli";
// let age = 20;

// let name1 = "Seynur";
// let surname1 = "Memmedov";
// let age1 = 18;

// let name2 = "Sunal";
// let surname2 = "Cebili";
// let age2 = 20;

// let stu1 = {
//     id: 1,
//     name: "Zahid",
//     surname: "Qasimli",
//     age: 20,
//     Fullname: function () {
//         return `${this.name} ${this.surname}`
//     },
//     AllInfo: function () {
//         return `${this.Fullname()} ${this.age}`
//     }
// }

// let stu2 = {
//     id: 2,
//     name: "Seynur",
//     surname: "Memmedov",
//     age: 18,
//     "father name": "Seymur",
//     Fullname: function () {
//         return `${this.name} ${this.surname}`
//     },
//     AllInfo: function () {
//         return `${this.Fullname()} ${this.age}`
//     }
// }

class Student {
    constructor(id, name, surname) {
        this.name = name;
        this.surname = surname;
        this.id = id;
    }
    Fullname() {
        return `${this.name} ${this.surname}`
    }
}

let stu1 = new Student(1, "Zahid", "Qasimli");
let stu2 = new Student(2, "Seynur", "Memmedov");

let p314 = {
    name: "P314",
    maxStuCount: 12,
    students: [],
    AddStudent: function (newStu) {
        if (this.students.length < this.maxStuCount)
            if (this.students.find(s => s.id == newStu.id) === undefined) {
                this.students.push(newStu)
            } else {
                console.log("Bu telebe Movcuddur-" + newStu.name)
            }
    }
}

// p314.AddStudent(stu1);
// p314.AddStudent(stu1);
// p314.AddStudent(stu2);

// stu1.age=31
// console.log(stu1.age)
// console.log(stu2.age)
// console.log(stu2["father name"])

// let arr=new Array(1,2,3,4);

// class CustomArray {
//     constructor() {

//         this.Length = 0;
//         this.arr = arguments;
//         for (let i = 1; i < Infinity; i++) {
//             this.Length++;
//             if (arguments[i] == null)
//                 break;
//         }
//     }
//     static x = 10;
//     Find(callback) {
//         for (let i = 0; i < this.Length; i++) {
//             if (callback(this.arr[i]))
//                 return this.arr[i];
//         }
//         return undefined;
//     }

// }

// class Person { }

// class Man extends Person { }

// let arr = new CustomArray(1, 2, 3, 4, 5, 6, 7)
// // console.log(arr.Find(n => n > 9))
// console.log(CustomArray.x)

// console.log(arr.Length)

function Person(name,surname){
    this.name=name;
    this.surname=surname;
    this.getFullName = function(){
        return this.name + " " + this.surname;
    }
}

let p=new Person("Kamran","Jabiyev")
console.log(p.getFullName())

