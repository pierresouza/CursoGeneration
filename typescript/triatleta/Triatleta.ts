import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

export class Triatleta extends Pessoa implements Corredor,Nadador , Ciclista {

	constructor(nome: string) {
    super(nome)
	}


  correr(): void {
    console.log("Atetla Correndo...")
  }
  aquecer(): void {
    console.log("Atetla Aquecendo...")
  }
  nadar(): void {
    console.log("Atetla Nadando...")
  }

  pedalar(): void {
    console.log("Atetla Pedalando...")
  }

  cansar(): void {
    console.log("Atetla Cansado...")
  }

}