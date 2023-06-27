package es2;

public class Sim {
    private String numeroTelefono;
    private double credito;
    private Chiamata[] ultimeChiamate;
    private int indiceUltimaChiamata;

    public Sim(String numeroTelefono) {
        this.numeroTelefono = numeroTelefono;
        this.credito = 0;
        this.ultimeChiamate = new Chiamata[5];
        this.indiceUltimaChiamata = 0;
    }

    public void aggiungiCredito(int creditoAggiunto){
        this.credito += creditoAggiunto;
    }

    public void aggiungiChiamata(Chiamata chiamata) {
        ultimeChiamate[indiceUltimaChiamata] = chiamata;
        indiceUltimaChiamata = (indiceUltimaChiamata + 1) % 5;
    }

    public void stampaDatiSIM() {
        System.out.println("Numero di telefono: " + numeroTelefono);
        System.out.println("Credito disponibile: " + credito + " euro");

        System.out.println("Ultime chiamate effettuate:");
        for (Chiamata chiamata : ultimeChiamate) {
            if (chiamata != null) {
                System.out.println("- Numero chiamato: " + chiamata.getNumeroChiamato());
                System.out.println("  Durata: " + chiamata.getDurata() + " minuti");
            }
        }
    }

    public static class Chiamata {
        private String numeroChiamato;
        private int durata;

        public Chiamata(String numeroChiamato, int durata) {
            this.numeroChiamato = numeroChiamato;
            this.durata = durata;
        }

        public String getNumeroChiamato() {
            return numeroChiamato;
        }

        public int getDurata() {
            return durata;
        }
    }
}
