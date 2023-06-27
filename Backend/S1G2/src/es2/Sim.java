package es2;

import java.util.ArrayList;
import java.util.List;

public class Sim {
    public String numeroTelefono;
    public double credito;
    public List<Chiamata> ultimeChiamate;

    public Sim(String numeroTelefono) {
        this.numeroTelefono = numeroTelefono;
        this.credito = 0;
        this.ultimeChiamate = new ArrayList<>();
    }

    public void stampaDatiSIM() {
        System.out.println("Numero di telefono: " + numeroTelefono);
        System.out.println("Credito disponibile: " + credito + " euro");

        System.out.println("Ultime chiamate effettuate:");
        for (Chiamata chiamata : ultimeChiamate) {
            System.out.println("- Numero chiamato: " + chiamata.getNumeroChiamato());
            System.out.println("  Durata: " + chiamata.getDurata() + " minuti");
        }
    }
}
