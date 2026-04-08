"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mezzo = void 0;
const types_1 = require("../domain/types");
class Mezzo {
    constructor(tipo, id) {
        this.tipo = tipo;
        this.id = id;
        this.stato = types_1.Stato.Disponibile;
        this.utenteAssegnato = null;
    }
    assegnaUtente(utente) {
        if (this.stato === types_1.Stato.InUso) {
            throw new Error(`Il mezzo ${this.id} è già in uso.`);
        }
        this.utenteAssegnato = utente;
        this.stato = types_1.Stato.InUso;
        console.log(`Mezzo "${this.tipo}" (${this.id}) assegnato a ${utente.nome} ${utente.cognome}.`);
    }
}
exports.Mezzo = Mezzo;
