interface Smartphone {
    carica: number;
    numeroChiamate: number;

    ricarica(unaRicarica: number): void;
    chiamata(minutiDurata: number): void;
    saldoResiduo(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}

// *Mi salvo le varibili contenenti parte della stringa da mettere nel console.log per non riscriverle ogni volta 
const logNChiamate: string = 'totale delle chiamate fatte:'
const logsaldoResiduo: string = 'saldo residuo:'

class Utente implements Smartphone {

    carica: number = 0
    numeroChiamate: number = 0

    saldoResiduo(): number {
        return this.carica
    }

    ricarica(unaRicarica: number): void {
        this.carica += unaRicarica
    }

    numero404(): number {
        return this.carica
    }

// *Aggiungo una condizione qualora il saldo non fosse sufficente e lo stapo in console.log
    chiamata(minutiDurata: number): void {
        const costoChiamata: number = 0.20 * minutiDurata;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        } else {
            console.log("Saldo insufficiente per effettuare la chiamata.");
        }
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
    }
}

const firstUser = new Utente()
const secondUser = new Utente()
const thirdUser = new Utente()

console.log('----------', 'firstUser', '----------');
firstUser.ricarica(10)
console.log('-----', logsaldoResiduo, firstUser.saldoResiduo(), '-----');

console.log('-----', logNChiamate, firstUser.getNumeroChiamate(), '-----');
firstUser.chiamata(5)
console.log(firstUser.numero404())

//!----------------------------------------------------------------

console.log('----------', 'secondUser', '----------');
firstUser.ricarica(15)
console.log('-----', logsaldoResiduo, secondUser.saldoResiduo(), '-----');

console.log('-----', logNChiamate,  secondUser.getNumeroChiamate(), '-----');
firstUser.chiamata(10)
console.log(secondUser.numero404())

//!----------------------------------------------------------------

console.log('----------', 'thirdUser', '----------');
firstUser.ricarica(15)
console.log('-----', logsaldoResiduo, thirdUser.saldoResiduo(), '-----');

console.log('-----', logNChiamate, thirdUser.getNumeroChiamate(), '-----');
firstUser.chiamata(25)
console.log(thirdUser.numero404())