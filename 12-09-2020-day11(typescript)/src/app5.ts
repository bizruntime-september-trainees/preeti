//single
class Shape {   
    Area:number   
    constructor(area:number) {   
       this.Area = area  
    }   
 }   
 class Circle extends Shape {   
    display():void {   
       console.log("Area of the circle: "+this.Area)   
    }   
 }  
 var object = new Circle(320);   
 object.display()  


//multilevel inheritance
class Animal{
    eat():void{
        console.log("Eating")
    }
}

class Dog extends Animal{
    bark():void{
        console.log("Barking")
    }
}
class Cat extends Dog{
    fear():void{
        console.log("cat afraid of dog")
    }
}
let obj2= new Cat();
obj2.eat();
obj2.bark();
obj2.fear();