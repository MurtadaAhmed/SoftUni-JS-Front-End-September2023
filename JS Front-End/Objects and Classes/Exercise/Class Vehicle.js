class Vehicle{
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.power * parts.engine,
        };
        this.fuel = fuel;

    }

    drive(input) {
        this.fuel -= input
    }


}




let parts = {engine: 9, power: 500};

let vehicle = new Vehicle('l', 'k', parts, 840);

vehicle.drive(20);

console.log(vehicle.fuel);