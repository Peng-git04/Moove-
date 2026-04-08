export enum TipoMezzo {
  Bici = "bici",
  Scooter = "scooter",
  Monopattino = "monopattino",
}

export enum Stato {
  Disponibile = "disponibile",
  InUso = "in uso",
}

export interface IMezzo {
  tipo: TipoMezzo;
  id: string;
  stato: Stato;
  assegnaUtente(utente: IUtente): void;
}

export interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;
  prenotaMezzo(mezzo: IMezzo): void;
}

export interface ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];
  aggiungiMezzo(mezzo: IMezzo): void;
}