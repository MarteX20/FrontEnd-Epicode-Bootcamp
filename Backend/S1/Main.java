import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Primo system output");

        String nome = "Boh";
        int num1 = 8;
        int num2 = 16;

        int molt = moltiplica(num1, num2);
        System.out.println("Il risultato della moltiplicazione e: " + molt);

        System.out.println(concat(10, nome));

        String[] arrayOriginale = { "primo", "secondo", "terzo", "quarto", "quinto" };
        String stringaIntrufolata = "Stringa intrufolata";

        String[] nuovoArray = inseriscilnArray(arrayOriginale, stringaIntrufolata);

        // Stampa il nuovo array con il for loop (anche se si poteva usare il
        // toString())
        for (String element : nuovoArray) {
            System.out.println(element);
        }

        System.out.println("Inserire il primo valore:");
        String inpt1 = scanner.nextLine();

        System.out.println("Inserire il primo valore:");
        String inpt2 = scanner.nextLine();

        System.out.println("Inserire il primo valore:");
        String inpt3 = scanner.nextLine();


        //Salvo le varibili per stamparle dopo già pronte
        String concatOrdinato = inpt1 + inpt2 + inpt3;
        String concatInverso = inpt3 + inpt2 + inpt1;
        
        System.out.println("Lista input ordinata: " + concatOrdinato);
        System.out.println("Lista input inversa: " + concatInverso);

        System.out.println(Math.abs(-55)); //prova
    }

    public static int moltiplica(int x, int y) {
        return x * y;
    }

    public static String concat(int a, String b) {
        return a + b;
    }

    public static String[] inseriscilnArray(String[] arrayOriginale, String stringaIntrufolata) {
        String[] nuovoArray = new String[6];

        // Copia gli elementi originali nelle posizioni corrette del nuovo array
        nuovoArray[0] = arrayOriginale[0];
        nuovoArray[1] = arrayOriginale[1];
        nuovoArray[2] = stringaIntrufolata;
        nuovoArray[3] = arrayOriginale[2];
        nuovoArray[4] = arrayOriginale[3];
        nuovoArray[5] = arrayOriginale[4];

        return nuovoArray;
    }
}
