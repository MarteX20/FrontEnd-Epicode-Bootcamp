package Es3;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		StringBuilder exit = new StringBuilder();
		String input = "";
		do {
			System.out.println("Inserire stringa (digitare \":q\" per terminare): ");
			input = scanner.nextLine();
			
			for (int i = 0; i < input.length(); i++) {
				char c = input.charAt(i);
				exit.append(c).append(",");
			}
			System.out.println(exit);
			exit.setLength(0);
		}while (!input.equals(":q")); 
			


		System.out.println("Programma terminato!");
	}
}