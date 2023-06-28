package Es3;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.println("Inserire stringa (digitare \":q\" per terminare): ");
		String input = scanner.nextLine();

		while (!input.equals(":q")) {
			// System.out.println(input);
			System.out.println("Inserire stringa (digitare \":q\" per terminare): ");
			input = scanner.nextLine();
			System.out.println("Stringa inserita: " + input);
		}

		System.out.println("Programma terminato!");
	}
}