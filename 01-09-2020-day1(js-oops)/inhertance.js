class Car{
    setName(name){
        this.name=name;

    }
    startEngine(){
        console.log("Engine started for "+this.name);
    }

    stopEngine(){
        console.log("Engine stoped for "+this.name)

    }
}

class Mercedes extends Car{
    topSpeed(speed){
        console.log("Top Speed for "+this.name+" is "+speed);
    }
}
let myCar =  new Mercedes();
myCar.setName(" mercedes-benz s-class ");
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(200);
