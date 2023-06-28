package Es3;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		StringBuilder result = new StringBuilder();

		System.out.println("Inserire stringa (digitare \":q\" per terminare): ");
		String input = scanner.nextLine();

		while (!input.equals(":q")) {
			for (int i = 0; i < input.length(); i++) {
				char c = input.charAt(i);
				result.append(c).append(",");
			}


			System.out.println("Inserire stringa (digitare \":q\" per terminare): ");
			input = scanner.nextLine();
			System.out.println("Stringa inserita: " + result.toString());
		}

		System.out.println("Programma terminato!");
	}
}