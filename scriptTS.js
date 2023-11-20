"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function verifica_vincente(giocatore1, giocatore2, numero_casuale) {
    if (giocatore1 == numero_casuale) {
        return "Il Giocatore 1 ha indovinato il numero random";
    }
    else if (giocatore2 == numero_casuale) {
        return "Il Giocatore 2  ha indovinato il numero random";
    }
    else {
        var distanza1 = Math.abs(giocatore1 - numero_casuale);
        var distanza2 = Math.abs(giocatore2 - numero_casuale);
        if (distanza1 < distanza2) {
            return "Nessuno dei due ha azzeccato il numero casuale, ma il Giocatore 1 si è avvicinato di più!";
        }
        else if (distanza1 > distanza2) {
            return "Nessuno dei due ha azzeccato il numero casuale, ma il Giocatore 2 si è avvicinato di più!";
        }
        else {
            return "Nessun giocatore"; //Caso di undefined
        }
    }
}
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function main() {
    rl.question("Inserisci il numero del Giocatore 1: ", function (numero) {
        var giocatore1 = parseInt(numero);
        rl.question("Inserisci il numero del Giocatore 2: ", function (numero) {
            var giocatore2 = parseInt(numero);
            var numero_casuale = Math.floor(Math.random() * 100) + 1;
            var vincitore = verifica_vincente(giocatore1, giocatore2, numero_casuale);
            console.log("Il numero casuale è: " + numero_casuale);
            console.log(vincitore);
        });
    });
}
main();
