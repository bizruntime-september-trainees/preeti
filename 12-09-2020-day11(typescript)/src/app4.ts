//class
//Defining a Student class.  
class Student {   
    //defining fields    
    id: number;  
    name:string;  
  
    //creating method or function   
    display():void {   
        console.log("Student ID is: "+this.id)   
        console.log("Student ID is: "+this.name)   
    }   
}   
  
//Creating an object or instance     
let obj = new Student();  
obj.id = 101;  
obj.name = "Virat Kohli";  
obj.display();  

//Example with constructor, method and object:

//Defining a Student class.  
class Student1 {   
    //defining fields    
    id: number;  
    name:string;  
     
    //defining constructor   
   constructor(id: number, name:string) {   
       this.id = id;  
       this.name = name;  
   }    
     
   //creating method or function   
   display():void {   
      console.log("Function displays Student ID is: "+this.id)   
      console.log("Function displays Student ID is: "+this.name)   
   }   
}   
  
//Creating an object or instance     
let obj1 = new Student1(1011, "Vohli")  
  
//access the field   
console.log("Reading attribute value of Student as: " +obj.id,)  
console.log("Reading attribute value of Student as: " +obj.name)  
  
//access the method or function  
obj.display()  