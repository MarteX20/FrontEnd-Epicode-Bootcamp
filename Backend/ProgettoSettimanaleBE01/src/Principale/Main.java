package Principale;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Elements[] elementi = new Elements[5];

        for (int i = 0; i < elementi.length; i++) {
            System.out.println("Inserire il tipo di elemento \n ---------- \n 1. Registrazione Audio \n 2. Video \n 3. Immagine \n ----------");
            int tipo = scanner.nextInt();
            scanner.nextLine();

            //Dato che il titolo è presente in ogni elemento lo possiamo chiedere di default e dopo con switch ogni elemento avrà le sue cose
            System.out.println("Inserire il titolo desiderato:");
            String titolo = scanner.nextLine();

            switch (tipo) {
                case 1: //Audio
                    System.out.println("Inserire la durata:");
                    int durataAud = scanner.nextInt();
                    scanner.nextLine();

                    System.out.println("Che volume vuoi settare?");
                    int volumeAud = scanner.nextInt();
                    scanner.nextLine();


                    elementi[i] = new regAudio(titolo, durataAud, volumeAud);
                    break;
                case 2: //Video
                    System.out.println("Inserire la durata:");
                    int durataVid = scanner.nextInt();
                    scanner.nextLine();

                    System.out.println("Che volume vuoi settare?");
                    int volumeVid = scanner.nextInt();
                    scanner.nextLine();

                    System.out.println("Inserire luminosità desiderata (in %): ");
                    int luminositaVid = scanner.nextInt();

                    elementi[i] = new Video(titolo, durataVid, volumeVid, luminositaVid);
                    break;
                case 3:
                    System.out.println("Inserire luminosita immagine (in %): ");
                    int luminositaImg = scanner.nextInt();
                    scanner.nextLine();

                    elementi[i] = new Immagine(titolo, luminositaImg);
                    break;
                default:
                    System.out.println("Commando inesistente!");
            }
        }

        int eseguibile;
        do {
            System.out.println("Scegliere l'elemento da eseguire (1-5, 0 per uscire): ");
            eseguibile = scanner.nextInt();

            if (eseguibile >= 1 && eseguibile <= 5) {
                Elements el = elementi[eseguibile - 1];

                if (el instanceof Playable) {
                    Playable playable = (Playable) el;
                    playable.play();
                } else if (el instanceof Immagine) {
                    Immagine img = (Immagine) el;
                    img.show();
                }
            }
        } while (eseguibile != 0);

        System.out.println("Programma chiusa con successo! =)");
    }
}