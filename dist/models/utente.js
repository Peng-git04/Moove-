"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utente = void 0;
const types_1 = require("../domain/types");
class Utente {
    constructor(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    prenotaMezzo(mezzo) {
        if (mezzo.stato === types_1.Stato.Disponibile) {
            mezzo.assegnaUtente(this);
        }
        else {
            console.log(`Mi dispiace ${this.nome} ${this.cognome}, il mezzo "${mezzo.tipo}" non è attualmente disponibile.`);
        }
    }
}
exports.Utente = Utente;
