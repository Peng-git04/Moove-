import {IMezzo, IUtente, Stato} from "../domain/types";

export class Utente implements IUtente {
  
    constructor (
        public nome: string,
        public cognome: string,
        public email: string,
        public metodoPagamento: string
    ){}

  prenotaMezzo(mezzo: IMezzo): void {
    if (mezzo.stato === Stato.Disponibile) {
      mezzo.assegnaUtente(this);
    } else {
      console.log(`Mi dispiace ${this.nome} ${this.cognome}, il mezzo "${mezzo.tipo}" non è attualmente disponibile.`);
    }
  }
}