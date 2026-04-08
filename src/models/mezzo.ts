import { IMezzo, IUtente, Stato, TipoMezzo } from "../domain/types";

export class Mezzo implements IMezzo {
  stato: Stato = Stato.Disponibile;
  private utenteAssegnato: IUtente | null = null;

  constructor(
    public tipo: TipoMezzo,
    public id: string
  ) {}

  assegnaUtente(utente: IUtente): void {
    if (this.stato === Stato.InUso) {
      throw new Error(`Il mezzo ${this.id} è già in uso.`);
    }
    this.utenteAssegnato = utente;
    this.stato = Stato.InUso;
    console.log(`Mezzo "${this.tipo}" (${this.id}) assegnato a ${utente.nome} ${utente.cognome}.`);
  }
}