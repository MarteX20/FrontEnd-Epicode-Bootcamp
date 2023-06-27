package es1;

public class Main {
	public static void main(String[] args) {
        Rettangolo rettangolo10 = new Rettangolo(5, 10);
        Rettangolo rettangolo22 = new Rettangolo(3, 6);

        System.out.println("Rettangolo 1:");
        stampaRettangolo(rettangolo10);

        System.out.println("Rettangolo 2:");
        stampaRettangolo(rettangolo22);

        System.out.println("Due rettangoli:");
        stampaDueRettangoli(rettangolo10, rettangolo22);

	}
	
	public static void stampaRettangolo(Rettangolo rettangolo) {
        double area = rettangolo.Area();
        double perimetro = rettangolo.Perimetro();

        System.out.println("Area del rettangolo: " + area);
        System.out.println("Perimetro del rettangolo: " + perimetro);
    }
	
	public static void stampaDueRettangoli(Rettangolo rettangolo1, Rettangolo rettangolo2) {
        double area1 = rettangolo1.Area();
        double perimetro1 = rettangolo1.Perimetro();
        double area2 = rettangolo2.Area();
        double perimetro2 = rettangolo2.Perimetro();
        double sommaAree = area1 + area2;
        double sommaPerimetri = perimetro1 + perimetro2;

        System.out.println("Area del rettangolo 1: " + area1);
        System.out.println("Perimetro del rettangolo 1: " + perimetro1);
        System.out.println("Area del rettangolo 2: " + area2);
        System.out.println("Perimetro del rettangolo 2: " + perimetro2);
        System.out.println("Somma delle aree: " + sommaAree);
        System.out.println("Somma dei perimetri: " + sommaPerimetri);
    }
    
}