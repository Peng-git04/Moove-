import {TipoMezzo} from "./domain/types";
import {Mezzo} from "./models/mezzo";
import {Utente} from "./models/utente";
import {Citta} from "./models/citta";

const utente1 = new Utente("Girgio", "Leopardi", "giorgio@moove.com", "Carta di credito");
const utente2 = new Utente("Cristina", "Colombo", "cristina@moove.com", "PayPal");
const utente3 = new Utente("Matteo", "Miglio", "matteo@moove.com", "Apple Pay");
const utente4 = new Utente("Pierino", "Leonardi", "pierino@moove.com", "Google Pay");

let milano = new Citta("Milano");
let roma = new Citta("Roma");
let torino = new Citta("Torino");
let napoli = new Citta("Napoli");
let firenze = new Citta("Firenze");
let bologna = new Citta("Bologna");
let venezia = new Citta("Venezia");
let verona = new Citta("Verona");
let genova = new Citta("Genova");
let palermo = new Citta("Palermo");
let catania = new Citta("Catania");
let bari = new Citta("Bari");
let lecce = new Citta("Lecce");
let ancona = new Citta("Ancona");
let perugia = new Citta("Perugia");
let pescara = new Citta("Pescara");
let ferrara = new Citta("Ferrara");
let trento = new Citta("Trento");
let bolzano = new Citta("Bolzano");
let parma = new Citta("Parma");

let milanoBici = new Mezzo(TipoMezzo.Bici, "MIL-BICI-001");
let milanoScooter = new Mezzo(TipoMezzo.Scooter, "MIL-SCOOTER-001");
let milanoMonopattino = new Mezzo(TipoMezzo.Monopattino, "MIL-MONOPATTINO-001");
milano.aggiungiMezzo(milanoBici);
milano.aggiungiMezzo(milanoScooter);
milano.aggiungiMezzo(milanoMonopattino);

let romaBici = new Mezzo(TipoMezzo.Bici, "ROM-BICI-001");
let romaScooter = new Mezzo(TipoMezzo.Scooter, "ROM-SCOOTER-001");
let romaMonopattino = new Mezzo(TipoMezzo.Monopattino, "ROM-MONOPATTINO-001");
roma.aggiungiMezzo(romaBici);
roma.aggiungiMezzo(romaScooter);
roma.aggiungiMezzo(romaMonopattino);

let torinoBici = new Mezzo(TipoMezzo.Bici, "TOR-BICI-001");
let torinoScooter = new Mezzo(TipoMezzo.Scooter, "TOR-SCOOTER-001");
let torinoMonopattino = new Mezzo(TipoMezzo.Monopattino, "TOR-MONOPATTINO-001");
torino.aggiungiMezzo(torinoBici);
torino.aggiungiMezzo(torinoScooter);
torino.aggiungiMezzo(torinoMonopattino);

let napoliBici = new Mezzo(TipoMezzo.Bici, "NAP-BICI-001");
let napoliScooter = new Mezzo(TipoMezzo.Scooter, "NAP-SCOOTER-001");
let napoliMonopattino = new Mezzo(TipoMezzo.Monopattino, "NAP-MONOPATTINO-001");
napoli.aggiungiMezzo(napoliBici);
napoli.aggiungiMezzo(napoliScooter);
napoli.aggiungiMezzo(napoliMonopattino);

let firenzeBici = new Mezzo(TipoMezzo.Bici, "FIR-BICI-001");
let firenzeScooter = new Mezzo(TipoMezzo.Scooter, "FIR-SCOOTER-001");
let firenzeMonopattino = new Mezzo(TipoMezzo.Monopattino, "FIR-MONOPATTINO-001");
firenze.aggiungiMezzo(firenzeBici);
firenze.aggiungiMezzo(firenzeScooter);
firenze.aggiungiMezzo(firenzeMonopattino);

let bolognaBici = new Mezzo(TipoMezzo.Bici, "BOL-BICI-001");
let bolognaScooter = new Mezzo(TipoMezzo.Scooter, "BOL-SCOOTER-001");
let bolognaMonopattino = new Mezzo(TipoMezzo.Monopattino, "BOL-MONOPATTINO-001");
bologna.aggiungiMezzo(bolognaBici);
bologna.aggiungiMezzo(bolognaScooter);
bologna.aggiungiMezzo(bolognaMonopattino);

let veneziaBici = new Mezzo(TipoMezzo.Bici, "VEN-BICI-001");
let veneziaScooter = new Mezzo(TipoMezzo.Scooter, "VEN-SCOOTER-001");
let veneziaMonopattino = new Mezzo(TipoMezzo.Monopattino, "VEN-MONOPATTINO-001");
venezia.aggiungiMezzo(veneziaBici);
venezia.aggiungiMezzo(veneziaScooter);
venezia.aggiungiMezzo(veneziaMonopattino);

let veronaBici = new Mezzo(TipoMezzo.Bici, "VER-BICI-001");
let veronaScooter = new Mezzo(TipoMezzo.Scooter, "VER-SCOOTER-001");
let veronaMonopattino = new Mezzo(TipoMezzo.Monopattino, "VER-MONOPATTINO-001");
verona.aggiungiMezzo(veronaBici);
verona.aggiungiMezzo(veronaScooter);
verona.aggiungiMezzo(veronaMonopattino);

let genovaBici = new Mezzo(TipoMezzo.Bici, "GEN-BICI-001");
let genovaScooter = new Mezzo(TipoMezzo.Scooter, "GEN-SCOOTER-001");
let genovaMonopattino = new Mezzo(TipoMezzo.Monopattino, "GEN-MONOPATTINO-001");
genova.aggiungiMezzo(genovaBici);
genova.aggiungiMezzo(genovaScooter);
genova.aggiungiMezzo(genovaMonopattino);

let palermoBici = new Mezzo(TipoMezzo.Bici, "PAL-BICI-001");
let palermoScooter = new Mezzo(TipoMezzo.Scooter, "PAL-SCOOTER-001");
let palermoMonopattino = new Mezzo(TipoMezzo.Monopattino, "PAL-MONOPATTINO-001");
palermo.aggiungiMezzo(palermoBici);
palermo.aggiungiMezzo(palermoScooter);
palermo.aggiungiMezzo(palermoMonopattino);

let cataniaBici = new Mezzo(TipoMezzo.Bici, "CAT-BICI-001");
let cataniaScooter = new Mezzo(TipoMezzo.Scooter, "CAT-SCOOTER-001");
let cataniaMonopattino = new Mezzo(TipoMezzo.Monopattino, "CAT-MONOPATTINO-001" );
catania.aggiungiMezzo(cataniaBici);
catania.aggiungiMezzo(cataniaScooter);
catania.aggiungiMezzo(cataniaMonopattino);

let bariBici = new Mezzo(TipoMezzo.Bici, "BAR-BICI-001");
let bariScooter = new Mezzo(TipoMezzo.Scooter, "BAR-SCOOTER-001");
let bariMonopattino = new Mezzo(TipoMezzo.Monopattino, "BAR-MONOPATTINO-001");
bari.aggiungiMezzo(bariBici);
bari.aggiungiMezzo(bariScooter);
bari.aggiungiMezzo(bariMonopattino);

let lecceBici = new Mezzo(TipoMezzo.Bici, "LEC-BICI-001");
let lecceScooter = new Mezzo(TipoMezzo.Scooter, "LEC-SCOOTER-001");
let lecceMonopattino = new Mezzo(TipoMezzo.Monopattino, "LEC-MONOPATTINO-001");
lecce.aggiungiMezzo(lecceBici);
lecce.aggiungiMezzo(lecceScooter);
lecce.aggiungiMezzo(lecceMonopattino);

let anconaBici = new Mezzo(TipoMezzo.Bici, "ANCONA-BICI-001");
let anconaScooter = new Mezzo(TipoMezzo.Scooter, "ANCONA-SCOOTER-001");
let anconaMonopattino = new Mezzo(TipoMezzo.Monopattino, "ANCONA-MONOPATTINO-001");
ancona.aggiungiMezzo(anconaBici);
ancona.aggiungiMezzo(anconaScooter);
ancona.aggiungiMezzo(anconaMonopattino);

let perugiaBici = new Mezzo(TipoMezzo.Bici, "PERUGIA-BICI-001");
let perugiaScooter = new Mezzo(TipoMezzo.Scooter, "PERUGIA-SCOOTER-001");
let perugiaMonopattino = new Mezzo(TipoMezzo.Monopattino, "PERUGIA-MONOPATTINO-001");
perugia.aggiungiMezzo(perugiaBici);
perugia.aggiungiMezzo(perugiaScooter);
perugia.aggiungiMezzo(perugiaMonopattino);

let pescaraBici = new Mezzo(TipoMezzo.Bici, "PESCARA-BICI-001");
let pescaraScooter = new Mezzo(TipoMezzo.Scooter, "PESCARA-SCOOTER-001");
let pescaraMonopattino = new Mezzo(TipoMezzo.Monopattino, "PESCARA-MONOPATTINO-001");
pescara.aggiungiMezzo(pescaraBici);
pescara.aggiungiMezzo(pescaraScooter);
pescara.aggiungiMezzo(pescaraMonopattino);

let ferraraBici = new Mezzo(TipoMezzo.Bici, "FERRARA-BICI-001");
let ferraraScooter = new Mezzo(TipoMezzo.Scooter, "FERRARA-SCOOTER-001");
let ferraraMonopattino = new Mezzo(TipoMezzo.Monopattino, "FERRARA-MONOPATTINO-001");
ferrara.aggiungiMezzo(ferraraBici);
ferrara.aggiungiMezzo(ferraraScooter);
ferrara.aggiungiMezzo(ferraraMonopattino);

let trentoBici = new Mezzo(TipoMezzo.Bici, "TRENTO-BICI-001");
let trentoScooter = new Mezzo(TipoMezzo.Scooter, "TRENTO-SCOOTER-001");
let trentoMonopattino = new Mezzo(TipoMezzo.Monopattino, "TRENTO-MONOPATTINO-001");
trento.aggiungiMezzo(trentoBici);
trento.aggiungiMezzo(trentoScooter);
trento.aggiungiMezzo(trentoMonopattino);

let bolzanoBici = new Mezzo(TipoMezzo.Bici, "BOLZANO-BICI-001");
let bolzanoScooter = new Mezzo(TipoMezzo.Scooter, "BOLZANO-SCOOTER-001");
let bolzanoMonopattino = new Mezzo(TipoMezzo.Monopattino, "BOLZANO-MONOPATTINO-001");
bolzano.aggiungiMezzo(bolzanoBici);
bolzano.aggiungiMezzo(bolzanoScooter);
bolzano.aggiungiMezzo(bolzanoMonopattino);

let parmaBici = new Mezzo(TipoMezzo.Bici, "PARMA-BICI-001");
let parmaScooter = new Mezzo(TipoMezzo.Scooter, "PARMA-SCOOTER-001");
let parmaMonopattino = new Mezzo(TipoMezzo.Monopattino, "PARMA-MONOPATTINO-001");
parma.aggiungiMezzo(parmaBici);
parma.aggiungiMezzo(parmaScooter);
parma.aggiungiMezzo(parmaMonopattino);

utente1.prenotaMezzo(milanoBici);

utente2.prenotaMezzo(milanoBici);

utente3.prenotaMezzo(perugiaScooter);

utente4.prenotaMezzo(napoliMonopattino);

utente2.prenotaMezzo(firenzeBici);

utente1.prenotaMezzo(romaScooter);

utente4.prenotaMezzo(anconaMonopattino);

utente3.prenotaMezzo(parmaBici);