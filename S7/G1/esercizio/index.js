class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
}

const user1 = new User("Jessie", "Pinkman", 25, "Albucherque");
console.log(user1);

const user2 = new User("Walter", "White", 51, "Albucherque");
console.log(user2);

confronta = () => {
    let eta1 = user1.age
    let eta2 = user2.age
    if (eta1 > eta2) {
        console.log(`${user1.firstName} è più grande di ${user2.firstName}`);
    } else if (eta1 === eta2) {
        console.log(`${user1.firstName} e ${user2.firstName} hanno la stessa età`);
    } else {
        console.log(`${user2.firstName} è più grande di ${user1.firstName}`);
    }
}
confronta()

// !ESERCIZIO 2

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName
        this.ownerName = ownerName
        this.species = species
        this.breed = breed
    }
}

const invia = document.getElementById('invia')
const section = document.getElementById('sezione')
const form = document.getElementById('nuovoForm')
const aggiungiPet = []

invia.addEventListener('click', (e) => {
    const nomeAnimale = document.getElementById('petName').value
    const padrone = document.getElementById('ownerName').value
    const specie = document.getElementById('species').value
    const razza = document.getElementById('breed').value
    aggiungiPet.push(new Pet(this.nomeAnimale, this.padrone, this.specie, this.razza))
    section.innerHTML = `
    <h2>Nome Animale:</h2> <p>${nomeAnimale}</p>
    <h2>Nome Padrone:</h2> <p>${padrone}</p>
    <h2>Specie:</h2> <p>${specie}</p>
    <h2>Razza:</h2> <p>${razza}</p>
    `
    e.preventDefault()
    form.reset()
})