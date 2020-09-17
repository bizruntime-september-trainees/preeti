"use strict";
//class
//Defining a Student class.  
var Student = /** @class */ (function () {
    function Student() {
    }
    //creating method or function   
    Student.prototype.display = function () {
        console.log("Student ID is: " + this.id);
        console.log("Student ID is: " + this.name);
    };
    return Student;
}());
//Creating an object or instance     
var obj = new Student();
obj.id = 101;
obj.name = "Virat Kohli";
obj.display();
//Example with constructor, method and object:
//Defining a Student class.  
var Student1 = /** @class */ (function () {
    //defining constructor   
    function Student1(id, name) {
        this.id = id;
        this.name = name;
    }
    //creating method or function   
    Student1.prototype.display = function () {
        console.log("Function displays Student ID is: " + this.id);
        console.log("Function displays Student ID is: " + this.name);
    };
    return Student1;
}());
//Creating an object or instance     
var obj1 = new Student1(1011, "Vohli");
//access the field   
console.log("Reading attribute value of Student as: " + obj.id);
console.log("Reading attribute value of Student as: " + obj.name);
//access the method or function  
obj.display();
