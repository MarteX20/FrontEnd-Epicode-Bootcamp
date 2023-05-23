const estratto: number = Math.floor(Math.random() * 100 + 1);
console.log(estratto);

const p1: number = Math.floor(Math.random() * 100 + 1)
console.log('Il numero del Giocatore 1 è ', p1);

const p2: number = Math.floor(Math.random() * 100 + 1)
console.log('Il numero del Giocatore 2 è ', p2);

switch (true) {
    case p1 === estratto:
        console.log('Il giocatore 1 ha indovinato!');
        break;

    case p2 === estratto:
        console.log('Il giocatore 2 ha indovinato!');
        break;

    case Math.abs(estratto - p1) < Math.abs(estratto - p2):
        console.log('Nessuno ha vinto ma il giocatore 1 si è avvicinato di più');
        break;

    case Math.abs(estratto - p2) < Math.abs(estratto - p1):
        console.log('Nessuno ha vinto ma il giocatore 2 si è avvicinato di più');
        break;

    default:
        console.log('Pareggio!');
        break;
}