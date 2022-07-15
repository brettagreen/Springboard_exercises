class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return 'Beep';
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!";
    }
}

class Garage {
    constructor(capacity) {
        if (!Number.isFinite(capacity)) {
            throw new Error("Please provide a positive number.");
        }
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(vehicle) {
        
        if (['Car','Motorcycle'].every(val => vehicle.constructor.name !== val)) {
            throw new Error("Only vehicles are allowed in here!");
        }
        if (this.capacity !== 0) {
            this.vehicles.push(vehicle);
            this.capacity--;
            return "Vehicle added!";
        } else {
            return "Sorry, we're full";
        }
    }
}

let garage = new Garage(2);
console.log(garage.vehicles); // []
console.log(garage.add(new Car("Hyundai", "Elantra", 2015))); // "Vehicle added!"
console.log(garage.vehicles); // [Car]
console.log(garage.add("Taco")); // "Only vehicles are allowed in here!"

console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000)));
// "Vehicle added!"
console.log(garage.vehicles); // [Car, Motorcycle]

console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2001)));
// "Sorry, we're full."

/*let myCar = new Car('toyota', 'camry', 2014);
console.log(myCar.honk());
console.log(myCar.toString());
console.log(myCar.numWheels);

let myMoto = new Motorcycle('suzuki', '???', 2019);
console.log(myMoto.honk());
console.log(myMoto.revEngine());
console.log(myMoto.numWheels);*/