class Persona {
    nome: string;
    cognome: string;

    constructor(nome: string, cognome: string) {
        this.nome = nome;
        this.cognome = cognome;
    }

    saluta() {
        console.log(`Ciao, sono ${this.nome} ${this.cognome}.`);
    }
}
