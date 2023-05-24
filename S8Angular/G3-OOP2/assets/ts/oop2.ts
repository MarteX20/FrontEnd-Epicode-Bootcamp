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


const Lav1 = new App(20000, 0.67)

console.log('Lavoratore 1 guadagna al netto', Lav1.getRedditoAnnuoNetto());

const Lav2 = new App(25000, 0.67)

console.log('Lavoratore 2 guadagna al netto', Lav2.getRedditoAnnuoNetto());

const Lav3 = new App(30000, 0.67)

console.log('Lavoratore 3 guadagna al netto', Lav3.getRedditoAnnuoNetto());