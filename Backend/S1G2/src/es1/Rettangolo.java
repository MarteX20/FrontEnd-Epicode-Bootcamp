package es1;

public class Rettangolo {
	public double altezza;
	public double larghezza;
	
	public Rettangolo(double altezza, double larghezza) {
		this.altezza = altezza;
		this.larghezza = larghezza;
	}
	
	public double Area() {
		return altezza * larghezza;
	}
	
	public double Perimetro() {
		return 2 * (larghezza + altezza);
	}
}	

