package Es2;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        float km;
        float litri;

        while (true) {
            try {
                System.out.println("Inserire i km percorsi (Per terminare inserire 0): ");
                km = scanner.nextFloat();

                if (km == 0)
                    break;

                System.out.println("Inserire i litri di carburante consumati: ");
                litri = scanner.nextFloat();

                if (litri == 0) {
                    throw new ArithmeticException("Divisione per zero!");
                }

                float consumo = km / litri;
                System.out.println("Hai percorso " + consumo + " km con 1 litro di carburante");
            } catch (ArithmeticException e) {
                System.out.println("Errore: " + e.getMessage());
            }
        }

        System.out.println("Programma terminato");
    }
}