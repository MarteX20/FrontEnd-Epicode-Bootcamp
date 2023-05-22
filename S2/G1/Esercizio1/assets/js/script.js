
document.getElementById('saluto').innerHTML = 'CIAO';
document.getleme

window.alert('questo è un alert');
alert('Secondo alert');

console.log('questo testo si vede in console');

var valore = 25;
console.log(valore);
console.log(valore * 5);


var altroTesto = 'numero 7';
document.getElementById('altroTesto').innerHTML = altroTesto;

function riassegna(){
    altroTesto = 'Testo scambiato';
    document.getElementById('altroTesto').innerHTML = altroTesto;
}

var nome = 'Boh';

if (nome === undefined){
    document.getElementById('errore').innerHTML = 'Variabile non trovata';

} else{
    document.getElementById('errore').innerHTML = 'Il valore della variabile è ' + nome;
}

function clicca() {
    document.write('😜') 
}