class Persona {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    saluta() {
        console.log(`Ciao, sono ${this.nome} ${this.cognome}.`);
    }
}
