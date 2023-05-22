/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets[0])
console.log(pets[1])
console.log(pets[2])
console.log(pets[3])

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets" e stampa l'array ordinato in console.
*/

console.log(pets.sort())

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log(pets.reverse())

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione e stampa l'array in console.
*/

let cuted = pets.shift()

pets.push(cuted)

console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta e stampa l'array in console.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'ET450MA';
}

console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto e stampa l'array in console.
*/

cars.push({ brand: 'Volkswagen', model: 'UpGTI', licensePlate: 'GT145IS', color: 'Red', trims: ['GTI'] })

console.log(cars)

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop()
}

console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito e stampa in console l'array justTrims così popolato.
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}

console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === 'b') {
    console.log('Fizz')
  } else {
    console.log('Buzz')
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32 escluso.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let j = 0
while (numericArray[j] !== 32) {
  console.log(numericArray[j])
  j++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['q', 'n', 'u', 'z', 'z']

const narray = []

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case 'a':
      narray.push(1);
      break;
    case 'b':
      narray.push(2);
      break;
    case 'c':
      narray.push(3);
      break;
    case 'e':
      narray.push(4);
      break;
    case 'e':
      narray.push(5);
      break;
    case 'f':
      narray.push(6);
      break;
    case 'g':
      narray.push(7);
      break;
    case 'h':
      narray.push(8);
      break;
    case 'i':
      narray.push(9);
      break;
    case 'l':
      narray.push(10);
      break;
    case 'm':
      narray.push(11);
      break;
    case 'n':
      narray.push(12);
      break;
    case 'o':
      narray.push(13);
      break;
    case 'p':
      narray.push(14);
      break;
    case 'q':
      narray.push(15);
      break;
    case 'r':
      narray.push(16);
      break;
    case 's':
      narray.push(17);
      break;
    case 't':
      narray.push(18);
      break;
    case 'u':
      narray.push(19);
      break;
    case 'v':
      narray.push(20);
      break;
    case 'z':
      narray.push(21);
      break;
  }
}

console.log(narray)