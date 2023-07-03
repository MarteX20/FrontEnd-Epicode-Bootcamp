package Es2;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        float km;
        float litri;

        do {
            try {
                System.out.println("Inserire i km percorsi (Per chiudere inserire -1): ");
                km = scanner.nextFloat();

                System.out.println("Inserire i litri di carburante consumati (Per chiudere proseguire avanti): ");
                litri = scanner.nextFloat();

                calcolo(litri, km);

                if (litri == 0 && km == 0) {
                    System.out.println("Ops, non ti sei prorpio spostato da nessuna parte ;) (Non si divide per lo zero)");
                    throw new ArithmeticException("Divisione per zero!");
                }

                if (km == -1)
                    break;
            } catch (ArithmeticException e) {
                System.out.println("Errore: " + e.getMessage());
            }
        } while (true);

        System.out.println("Calcolo finito");
    }

    public static void calcolo(float litri, float km){
        float consumo = litri / km;
        System.out.println("Hai consumato " + consumo + " litri facendo " + km);
    }
}
