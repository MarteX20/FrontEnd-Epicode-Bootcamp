class App {
    codredd: number;
    ral: number;
    tasseinps: number;
    tasseirpef: number;

    constructor(_ral: number,_codredd: number ) {
        this.codredd = _codredd;
        this.ral = _ral;
        this.tasseinps = 0.2623;
        this.tasseirpef = 0.15;
    }

    getUtileTasse(): number {
        return this.ral * this.codredd;
    }
    getTasselnps(): number {
        return this.getUtileTasse() * this.tasseinps;
    }
    getTasselrpef(): number {
        return this.getUtileTasse() * this.tasseirpef;
    }
    getRedditoAnnuoNetto(): number {
        return this.ral - this.getTasselnps() - this.getTasselrpef();
    }
}

class Persona extends App {
    constructor(_codredd: number, _ral: number) {
        super(_codredd, _ral);
    }
}

const Lav1 = new Persona(20000, 0.67)

console.log('Lavoratore 1 guadagna al netto', Lav1.getRedditoAnnuoNetto());

const Lav2 = new Persona(25000, 0.67)

console.log('Lavoratore 2 guadagna al netto', Lav2.getRedditoAnnuoNetto());

const Lav3 = new Persona(30000, 0.67)

console.log('Lavoratore 3 guadagna al netto', Lav3.getRedditoAnnuoNetto());