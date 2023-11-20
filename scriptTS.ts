function verifica_vincente(
  giocatore1: number,
  giocatore2: number,
  numero_casuale: number
): string {
  if (giocatore1 == numero_casuale) {
    return "Il Giocatore 1 ha indovinato il numero random";
  } else if (giocatore2 == numero_casuale) {
    return "Il Giocatore 2  ha indovinato il numero random";
  } else {
    let distanza1 = Math.abs(giocatore1 - numero_casuale);
    let distanza2 = Math.abs(giocatore2 - numero_casuale);

    if (distanza1 < distanza2) {
      return "Nessuno dei due ha azzeccato il numero casuale, ma il Giocatore 1 si è avvicinato di più!";
    } else if (distanza1 > distanza2) {
      return "Nessuno dei due ha azzeccato il numero casuale, ma il Giocatore 2 si è avvicinato di più!";
    } else {
      return "Nessun giocatore"; //Caso di undefined
    }
  }
}

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  rl.question("Inserisci il numero del Giocatore 1: ", numero => {
    var giocatore1 = parseInt(numero);
    rl.question("Inserisci il numero del Giocatore 2: ", numero => {
      var giocatore2 = parseInt(numero);
      let numero_casuale = Math.floor(Math.random() * 100) + 1;

      let vincitore = verifica_vincente(giocatore1, giocatore2, numero_casuale);
      console.log("Il numero casuale è: " + numero_casuale);
      console.log(vincitore);
    });
  });
}

main();
