class Animal{

    constructor(name){
        this.name;
    }

    eat(){
        console.log(this.name+" eats food");

    }
}
class Alligator extends Animal{
   
    eat(){
        super.eat();
        console.log(this.name+" eats fish");

    }

}
let a = new Animal("cat");
a.eat();

var murphy = new Alligator('murphy');
murphy.eat();

