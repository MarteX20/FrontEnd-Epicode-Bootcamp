package es2;

public class Main {
	public static void main(String[] args) {
        SIM sim = new SIM("1234567890");

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
}
