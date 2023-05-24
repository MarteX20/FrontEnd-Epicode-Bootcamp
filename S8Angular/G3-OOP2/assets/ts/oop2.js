class App {
    constructor(_ral, _codredd) {
        this.codredd = _codredd;
        this.ral = _ral;
        this.tasseinps = 0.2623;
        this.tasseirpef = 0.15;
    }
    getUtileTasse() {
        return this.ral * this.codredd;
    }
    getTasselnps() {
        return this.getUtileTasse() * this.tasseinps;
    }
    getTasselrpef() {
        return this.getUtileTasse() * this.tasseirpef;
    }
    getRedditoAnnuoNetto() {
        return this.ral - this.getTasselnps() - this.getTasselrpef();
    }
}
class Persona extends App {
    constructor(_codredd, _ral) {
        super(_codredd, _ral);
    }
}
const Lav1 = new Persona(20000, 0.67);
console.log('Lavoratore 1 guadagna al netto', Lav1.getRedditoAnnuoNetto());
const Lav2 = new Persona(25000, 0.67);
console.log('Lavoratore 2 guadagna al netto', Lav2.getRedditoAnnuoNetto());
const Lav3 = new Persona(30000, 0.67);
console.log('Lavoratore 3 guadagna al netto', Lav3.getRedditoAnnuoNetto());
