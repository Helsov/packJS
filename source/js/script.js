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

engine = new Engine();

myCar = new Car('white', 2015, 'Mersedes', engine);
myCar.setColor('BLack');
myCar.startEngine();