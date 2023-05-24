export class App {
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