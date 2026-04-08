"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Citta = void 0;
class Citta {
    constructor(nome) {
        this.nome = nome;
        this.mezziDisponibili = [];
    }
    aggiungiMezzo(mezzo) {
        this.mezziDisponibili.push(mezzo);
        console.log(`${mezzo.tipo} id:#${mezzo.id} aggiunto a ${this.nome}`);
    }
}
exports.Citta = Citta;
