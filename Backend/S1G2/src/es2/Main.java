package es2;

import es2.Sim.Chiamata;

public class Main {
    public static void main(String[] args) {
        Sim sim = new Sim("1234567890");

        // Aggiungi alcune chiamate di esempio
        sim.aggiungiChiamata(new Chiamata("9876543210", 5));
        sim.aggiungiChiamata(new Chiamata("1111111111", 10));
        sim.aggiungiChiamata(new Chiamata("2222222222", 7));

        // Aggiungi un credito di esempio
        sim.aggiungiCredito(20);

        // Stampa i dati della SIM
        sim.stampaDatiSIM();
    }
}