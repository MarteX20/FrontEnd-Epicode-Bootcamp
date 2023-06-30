package Dipendenti;

import Dipendenti.livello.Livello;

public class Main {
	public static void main(String[] args) {
		
		Dipendente manuel = new Dipendente(1, 1500, 45, Livello.IMPIEGATO, Dipartimento.VENDITE);
		manuel.stampaDatiDipendente();

		Dipendente luca = new Dipendente(2, 1500, 40, Livello.IMPIEGATO, Dipartimento.AMMINISTRAZIONE);
		luca.stampaDatiDipendente();

		Dipendente batman = new Dipendente(3, Dipartimento.VENDITE);
		batman.stampaDatiDipendente();
	}

	public class Dipendente {
		private static double stipendioBase = 1000;
		private int matricola;
		private double stipendio;
		private double importoOrarioStraordinario;
		private Livello livello;
		private Dipartimento dipartimento;

		public Dipendente(int matricola, Dipartimento dipartimento) {
			this.matricola = matricola;
			this.dipartimento = dipartimento;
			this.stipendio = stipendioBase;
			this.importoOrarioStraordinario = 30;
			this.livello = Livello.OPERAIO;
		}

		public Dipendente(int matricola, double stipendio, double importoOrarioStraordinario, Livello livello,
				Dipartimento dipartimento) {
			this.matricola = matricola;
			this.stipendio = stipendio;
			this.importoOrarioStraordinario = importoOrarioStraordinario;
			this.livello = livello;
			this.dipartimento = dipartimento;
		}

		public void setImportoOrarioStraordinario(double importoOrarioStraordinario) {
			this.importoOrarioStraordinario = importoOrarioStraordinario;
		}

		public void setDipartimento(Dipartimento dipartimento) {
			this.dipartimento = dipartimento;
		}

		public void stampaDatiDipendente() {
			System.out.println("Matricola: " + matricola);
			System.out.println("Stipendio: " + stipendio);
			System.out.println("Importo Orario Straordinario: " + importoOrarioStraordinario);
			System.out.println("Livello: " + livello);
			System.out.println("Dipartimento: " + dipartimento);
		}

		public Livello promuovi() {
			switch (livello) {
				case OPERAIO:
					livello = Livello.IMPIEGATO;
					stipendio = stipendioBase * 1.2;
					break;
				case IMPIEGATO:
					livello = Livello.QUADRO;
					stipendio = stipendioBase * 1.5;
					break;
				case QUADRO:
					livello = Livello.DIRIGENTE;
					stipendio = stipendioBase * 2;
					break;
				case DIRIGENTE:
					System.out.println("Impossibile promuovere un dirigente");
					break;
			}
			return livello;
		}

		public static double calcolaPaga(Dipendente dipendente) {
			return dipendente.stipendio;
		}

		public static double calcolaPaga(Dipendente dipendente, int oreStraordinario) {
			return dipendente.stipendio + (oreStraordinario * dipendente.importoOrarioStraordinario);
		}
	}

	enum Dipartimento {
		PRODUZIONE, AMMINISTRAZIONE, VENDITE
	}
}
