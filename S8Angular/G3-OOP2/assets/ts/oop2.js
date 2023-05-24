export class App {
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
