package Principale;

public class Immagine extends Elements {
    private int luminosita;

    public Immagine(String _titolo, int _luminosita){
        super(_titolo);
        this.luminosita = _luminosita;
    }

    public void show(){
        for (int i = 0; i < luminosita; i++){
            String aster = "*".repeat(luminosita);
            System.out.println(titolo + " " + aster);
        }
    }
}
