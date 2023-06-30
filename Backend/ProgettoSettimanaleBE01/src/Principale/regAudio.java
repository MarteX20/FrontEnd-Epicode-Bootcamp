package Principale;

public class regAudio extends Elements implements Playable {
    private int durata;
    private int volume;

    public regAudio(String _titolo, int _durata, int _volume) {
        super(_titolo);
        this.durata = _durata;
        this.volume = _volume;
    }

    public void play() {
        for (int i = 0; i < durata; i++) {
            String escl = "!".repeat(volume); //Con la classe .repeat() di string, si può stampare i volte la stringa
            System.out.println(titolo + " " + escl);
        }
    }

    //ALZARE VOLUME
    public void alzaVolume() {
        volume++;
    }

    //ABASSA VOLUME SE MAGGIORE DI 0
    public void abassaVolume() {
        if (volume > 0)
            volume--;
        else
            System.out.println("Volume non può essere negativo");
    }

    //GETTER DURATA
    public int getDurata() {
        return durata;
    }
}