let giocatore1 = 0;
let giocatore2 = 0;
let numero_casuale = 0;
let numero_giocatore = 0;

function verifica_vincente(giocatore1, giocatore2, numero_casuale) {
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

function main() {
  let giocatore1 = parseInt(prompt("Inserisci il numero del Giocatore 1: "));
  let giocatore2 = parseInt(prompt("Inserisci il numero del Giocatore 2: "));
  let numero_casuale = Math.floor(Math.random() * 100) + 1;

  let vincitore = verifica_vincente(giocatore1, giocatore2, numero_casuale);
  console.log("Il numero casuale è il " + numero_casuale);
  console.log(vincitore);
}

main();
