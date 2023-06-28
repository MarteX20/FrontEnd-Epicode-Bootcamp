package Es1;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Inserisci una stringa: ");
		String input = scanner.nextLine();

		boolean pari = stringaPariDispari(input);

		System.out.println(pari);
		
		
		System.out.println("Inserisci un anno: ");
		String inputAnno = scanner.nextLine();

		// int size = 10;

		// for (int i = 1; i <= size; i++) {

		// for (int j = 1; j <= size; j++) {
		// int prodotto = i * j;
		// System.out.printf("%d \t", prodotto);
		// }
		// System.out.println();

		// }

	}

	public static boolean stringaPariDispari(String input) {
		return input.length() % 2 == 0;
	}
	
//	public static boolean annoBisestile(int inputAnno) {
//		
//	}
}
