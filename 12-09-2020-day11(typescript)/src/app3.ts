//INTERFACES
interface IPerson { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string 
} 

var customer:IPerson = { 
   firstName:"Tom",
   lastName:"Hanks", 
   sayHi: ():string =>{return "Hi there"} 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  

var employee:IPerson = { 
   firstName:"Jim",
   lastName:"Blakes", 
   sayHi: ():string =>{return "Hello!!!"} 
} 
  
console.log("Employee  Object ") 
console.log(employee.firstName);
console.log(employee.lastName);

/**UNION TYPE and INTERFACE */
interface Run{
    program: string;
    command: string[]|string| (()=>string)
}
var  op:Run ={program:"test",
                command:"hello"
            }
console.log(op.command)

//array
var  op:Run ={program:"test",
                command:["Hello","World"] }
// console.log(op.command[0]);
// console.log(op.command[1])
op = {program:"test1",command:()=>
    {return "**Hello World**";}}; 
var fn:any=op.command;
console.log(fn);

//interfaces and inheritances
interface Person{
    age:number
}
interface Musician extends Person{
    instrument:string
}

var singer = <Musician>{};
singer.age=21;
singer.instrument="guitar"
console.log("Age:"+singer.age)
console.log("instrument "+singer.instrument)

//multiple extends
interface Person {   
    name:string    
 }  
 interface PersonDetail {   
     age:number  
     gender:string  
 }  
 interface Employee extends Person, PersonDetail {   
     empCode:number  
 }  
 let empObject = <Employee>{};   
 empObject.name = "Abhishek"  
 empObject.age = 25   
 empObject.gender = "Male"  
 empObject.empCode = 43  
 console.log("Name: "+empObject.name);  
 console.log("Employee Code: "+empObject.empCode);  

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