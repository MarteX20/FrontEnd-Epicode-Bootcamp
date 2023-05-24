import { App } from "./oop2";

class Persona extends App {
    constructor(_codredd: number, _ral:number) {
            super(_codredd, _ral);
        }
}

const Lav1 = new Persona(0.67, 30000)

console.log(Lav1);
