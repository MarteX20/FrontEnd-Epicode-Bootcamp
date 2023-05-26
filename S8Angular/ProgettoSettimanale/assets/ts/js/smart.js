"use strict";
// *Mi salvo le varibili contenenti parte della stringa da mettere nel console.log per non riscriverle ogni volta 
const logNChiamate = 'totale delle chiamate fatte:';
const logsaldoResiduo = 'saldo residuo:';
class Utente {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    saldoResiduo() {
        return this.carica;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    numero404() {
        return this.carica;
    }
    // *Aggiungo una condizione qualora il saldo non fosse sufficente e lo stapo in console.log
    chiamata(minutiDurata) {
        const costoChiamata = 0.20 * minutiDurata;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Saldo insufficiente per effettuare la chiamata.");
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
}
const firstUser = new Utente();
const secondUser = new Utente();
const thirdUser = new Utente();
console.log('----------', 'firstUser', '----------');
firstUser.ricarica(10);
console.log('-----', logsaldoResiduo, firstUser.saldoResiduo(), '-----');
console.log('-----', logNChiamate, firstUser.getNumeroChiamate(), '-----');
firstUser.chiamata(5);
console.log(firstUser.numero404());
console.log('----------', 'secondUser', '----------');
firstUser.ricarica(15);
console.log('-----', logsaldoResiduo, secondUser.saldoResiduo(), '-----');
console.log('-----', logNChiamate, secondUser.getNumeroChiamate(), '-----');
firstUser.chiamata(10);
console.log(secondUser.numero404());
console.log('----------', 'thirdUser', '----------');
firstUser.ricarica(15);
console.log('-----', logsaldoResiduo, thirdUser.saldoResiduo(), '-----');
console.log('-----', logNChiamate, thirdUser.getNumeroChiamate(), '-----');
firstUser.chiamata(25);
console.log(thirdUser.numero404());
