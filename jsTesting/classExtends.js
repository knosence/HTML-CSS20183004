class Car{
    constructor(make, model, mpg, topSpeed){
        this.make = make;
        this.model;
        this.mpg;
        this.topSpeed;
    }

    start(){
        console.log("Vroom vroom");
    }
}

class ElectricCar extends Car{
    constructor(make, model, maxDistance, topSpeed){
        // Before anything else happens in a suvclass contruction we have to call the parent constructor via super

        this.maxDistance = maxDistance;
        super(make, model, null, topSpeed);
    }
    start(){
        console.log(`... ... ...`)
}
}

const tobysCar = new ElectricCar(`Tesla`, `Model S`,`200 miles`, 180);
console.log(tobysCar);