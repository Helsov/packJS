import newCar from './car.js';

var vol = new newCar(2018, 4, 'red');
vol.getChar();

class Car {
    constructor(color, year, manufacturer, engine) {
        this.color = color;
        this.year = year;
        this.manufacturer = manufacturer;
        this.engine = engine;
    };

    startEngine() {
        this.engine.on();
    };

    setColor(color) {
        if (typeof (color) == "string") {
            this.color = color;
        } else {
            console.log('Ne stroka');
        }
    };

    getColor() {
        return this.color;
    };
}

class Engine {
    on() {
        console.log('Двигатель включен');
    }

    off() {
        console.log('Двигатель выключен');
    }
}

let engine = new Engine();

let myCar = new Car('white', 2015, 'Mersedes', engine);
myCar.setColor('BLack');
myCar.startEngine();