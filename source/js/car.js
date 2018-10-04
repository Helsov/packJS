export default class newCar {
    constructor(year, kolesa, color){
        this.year = year;
        this.kolesa = kolesa;
        this.color = color;
    }

    getChar(){
        console.log(`Год выпуска - ${this.year}; Кол-во колёс - ${this.kolesa}; Цвет - ${this.color}`);
    };

    getKolesa(){
        console.log(`4 kolesa`);
    };
}