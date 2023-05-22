const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]



/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log('===ESERCIZIO A===')
var sum = 10 + 20
console.log(sum)
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log('===ESERCIZIO B===')
var random = Math.floor(Math.random() * 21)
console.log(random)
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log('===ESERCIZIO C===')
var me = {
  "name": "Artem",
  "surname": "Asauliak",
  "age": 24
}
console.log(me)
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log('===ESERCIZIO D===')
delete me.age
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log('===ESERCIZIO E===')
me.skills = ["Python"]

console.log(me)
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log('===ESERCIZIO F===')
me.skills.push("C++")
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log('===ESERCIZIO G===')
me.skills.splice(-1, 1)
console.log(me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log('===ESERCIZIO 1 FUNZIONI===')
function dice () {
  return Math.floor(Math.random() * 7) + 1
}
console.log(dice())
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log('===ESERCIZIO 2 FUNZIONI===')
function whoIsBigger(num1, num2){
  return Math.max(num1, num2)
}
console.log(whoIsBigger(10,7))
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log('===ESERCIZIO 3 FUNZIONI===')
function splitMe(string){
  return string.split(" ")
}

console.log(splitMe("Stringa con delle parole"))
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log('===ESERCIZIO 4 FUNZIONI===')
function deleteOne(string1, bool){
  if (bool == true){
    return string1.slice(1)
  }else{
    return string1.slice(0, -1)
  }
}
console.log(deleteOne("stringa", false))
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log('===ESERCIZIO 5 FUNZIONI===')
function onlyLetters(noNumeri) {
  let nuovaStringa = '';
  for (let i = 0; i < noNumeri.length; i++) {
    if (isNaN(parseInt(noNumeri[i], 10))) {
      nuovaStringa += noNumeri[i];
    }
  }
  return nuovaStringa;
}
console.log(onlyLetters("I have 4 dogs"))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log('===ESERCIZIO 6 FUNZIONI===')
function isThisAnEmail(email){
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailReg.test(email);
}
console.log(isThisAnEmail("email@gmail.com"))
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log('===ESERCIZIO 7 FUNZIONI===')
function whatDayIsIt(){
  const giorniSettimana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const oggi = new Date();
  const giorni = oggi.getDay();
  return giorniSettimana[giorni];
}
console.log(whatDayIsIt())
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log('===ESERCIZIO 8 FUNZIONI===')

function rollTheDices(n){
  let values = []
  let sum = 0
  
  for (let i = 0; i < n; i++){
    let prov = dice()
    sum += prov
    values.push(prov)
  }
  return {sum, values}
}
console.log(rollTheDices(3))
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log('===ESERCIZIO 9 FUNZIONI===')
function howManyDays(data){
  const giornoRif = new Date()
  const giornoRifConv = giornoRif.getTime()
  const giornoint = new Date(data)
  const giornointConv = giornoint.getTime()
  let giorniPassati = (giornoRifConv - giornointConv) / 86400000
  
  return Math.round(giorniPassati) 
}
console.log(howManyDays('2020-05-10'))
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log('===ESERCIZIO 10 FUNZIONI===')

function isTodayMyBirthday(verifica){
  let ogi = new Date()
  return (ogi.getMonth() === verifica.getMonth() && ogi.getDate() === verifica.getDate())
}

console.log(isTodayMyBirthday(new Date('1998-05-15')))
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log('===ESERCIZIO 11 ARRAY & OGETTI===')
var ogeto = { nome: 'Artem', cognome: 'Cognome'}
function deleteProp(ogetto, strin){
  delete ogetto[strin]
  return ogetto
}
console.log(deleteProp(ogeto, 'cognome'))
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log('===ESERCIZIO 12 ARRAY & OGETTI===')
const newestMovie = (movie) => {
  let inde = movie[0]
  for (let i = 0; i < movies.length; i++){
    if (parseInt(movies[i].Year) > parseInt(inde.Year)){
      inde = movies[i]
    }
  }
  return `Il film più recente è ${inde.Title} ed è del (${inde.Year})`
}
console.log(newestMovie(movies))
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log('===ESERCIZIO 13 ARRAY & OGETTI===')

function countMovies(){
  return movies.length
}
console.log(countMovies())
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log('===ESERCIZIO 14 ARRAY & OGETTI===')

function onlyTheYears(){
  for (let i = 0; i < movies.lenght; i++){

  }
}
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log('===ESERCIZIO 15 ARRAY & OGETTI===')

function onlyInLastMillennium(){
  let res = []
  for (let i = 0; i < movies.length; i++){
    if (parseInt(movies[i].Year) < 2000){
      res.push(movies[i])
    }
  }
  return res
}
console.log(onlyInLastMillennium())
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log('===ESERCIZIO 16 ARRAY & OGETTI===')

const sumAllTheYears = () => {
  let count = 0
  for (let i = 0; i < movies.length; i++){
    count += parseInt(movies[i].Year)
  }
  return count
}
console.log(sumAllTheYears())
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log('===ESERCIZIO 17 ARRAY & OGETTI===')

function searchByTitle(nomeFilm) {
  let nom = []
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(nomeFilm)) {
      nom.push(movies[i])
    }
  }
  return nom
}
console.log(searchByTitle('Avengers'))
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log('===ESERCIZIO 18 ARRAY & OGETTI===')

function searchAndDivide(movieBoh) {
  let ogettto = {nonSo: [], bohSo: [],}
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(movieBoh)) {
      ogettto.nonSo.push(movies[i].Title);
    } else ogettto.bohSo.push(movies[i].Title)
  }
  return ogettto
}
console.log(searchAndDivide('Lord'))
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log('===ESERCIZIO 19 ARRAY & OGETTI===')

function removeIndex(indexNonSoCheNomeDare) {
  movies.splice(indexNonSoCheNomeDare, 1);
  return movies;
}

console.log(removeIndex(2));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log('===ESERCIZIO 20 DOM===')
function elementoId(){
  return getElementByID('container')
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log('===ESERCIZIO 21 DOM===')

function trovaTdBoh() {
  document.querySelectorAll("td");
}
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log('===ESERCIZIO 22 DOM===')

const funzione22 = () => {
  const unaEnnesimaVariabile = document.getElementsByTagName("td");
  for (let i = 0; i < unaEnnesimaVariabile.length; i++) {
    console.log(unaEnnesimaVariabile[i].textContent);
  }  
}
funzione22()
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log('===ESERCIZIO 23 DOM===')

function krasniySvet() {
  for (let link of document.querySelectorAll("a")) {
    link.style.backgroundColor = "red";
  }
}

krasniySvet(); 
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log('===ESERCIZIO 24 DOM===')

const unaListaBoh = document.createElement("li");
unaListaBoh.textContent = "cinque";

function aggiuntaElemento(spisok) {
  document.getElementById("myList").appendChild(spisok);
}

aggiuntaElemento(unaListaBoh);
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log('===ESERCIZIO 25 DOM===')

function pustoi() {
  document.getElementById('myList').innerHTML = '';
}

pustoi();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log('===ESERCIZIO 26 DOM===')

function dobavNovoe() {
  document.querySelectorAll("tr").forEach((elemnt) => elemnt.classList.add("test"));
}
dobavNovoe();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log('===ESERCIZIO 27 DOM===')

function halfTree(nomer){
  for (let i = 0; i < nomer; i++){
    console.log('*')
  }
}
console.log(halfTree(3)) 
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

