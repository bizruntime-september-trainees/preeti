"use strict";
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
var op = { program: "test",
    command: "hello"
};
console.log(op.command);
//array
var op = { program: "test",
    command: ["Hello", "World"] };
// console.log(op.command[0]);
// console.log(op.command[1])
op = { program: "test1", command: function () { return "**Hello World**"; } };
var fn = op.command;
console.log(fn);
var singer = {};
singer.age = 21;
singer.instrument = "guitar";
console.log("Age:" + singer.age);
console.log("instrument " + singer.instrument);
var empObject = {};
empObject.name = "Abhishek";
empObject.age = 25;
empObject.gender = "Male";
empObject.empCode = 43;
console.log("Name: " + empObject.name);
console.log("Employee Code: " + empObject.empCode);
//interface in class
//  interface Person{
//      name:string,
//      age:
//      fullName();
//      getAge();
//  }
//  //impleminting
//  class Emp implements Person{
//     firstName: string;  
//     lastName: string;  
//     age:number;  
//     FullName() {  
//         return this.firstName + ' ' + this.lastName;  
//     }  
//     GetAge() {  
//         return this.age;  }
//         constructor(firstN: string, lastN: string, getAge: number) {  
//             this.firstName = firstN;  
//             this.lastName = lastN;  
//             this.age = getAge;  
//  }}
//  // using the class that implements interface  
// let myEmployee = new Emp('Abhishek', 'Mishra', 25);  
// let fullName = myEmployee.FullName();  
// let Age = myEmployee.GetAge();  
// console.log("Name of Person: " +fullName + '\nAge: ' + Age);  
