package Es4;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Inserire un numero:");
		int input = scanner.nextInt();
		
		for (int i = input; i >= 0; i--) {
			System.out.println(i);
		}
	}
}
