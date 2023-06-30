package Principale;

public class Video extends Elements implements Playable {
    private int volume;
    private int durata;
    private int luminosita;

    public Video(String _titolo, int _durata, int _volume, int _luminosita) {
        super(_titolo);
        this.luminosita = _luminosita;
        this.durata = _durata;
        this.volume = _volume;
    }

    public void play() {
        for (int i = 0; i < durata; i++) {
            String escl = "!".repeat(volume);
            String aste = "*".repeat(luminosita);
            System.out.println(titolo + escl + aste);
        }
    }

    public int getDurata() {
        return durata;
    }

    //Alzare luminosita
    public void aumentaLuminosita() {
        luminosita++;
    }

    //Abassare luminosita
    public void abassaLuminosita() {
        if (luminosita > 0)
            luminosita--;
        else
            System.out.println("Qui è buio, non si vede nulla!");
    }


}
