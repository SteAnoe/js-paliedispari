// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt("Inserisci una parola");

function palindroma(parola) {
    let parolaOutput = parola.split('').reverse().join('');
    return parola === parolaOutput;
}

if (palindroma(parola)) {
    alert("La parola inserita è palindroma");
} else {
    alert("La parola inserita non è palindroma");
}

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let numeroPc = parseInt(Math.floor(Math.random() * 5) + 1);
let pariDispari = prompt("Sceglie pari o dispari?");
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(`Il computer ha tirato: ${numeroPc}`);
console.log(`Hai scelto: ${pariDispari} e inserito il numero: ${numeroUtente}`);
const pari = pariDispari === "pari";
const dispari = pariDispari === "dispari";

function somma(numeroPc, numeroUtente) {
    return numeroPc + numeroUtente;
}

console.log(`La somma dei due dadi è: ${somma(numeroPc, numeroUtente)}`);

if (somma(numeroPc, numeroUtente) % 2 === 0 && pari) {
    alert("Hai vinto");
} else if (somma(numeroPc, numeroUtente) % 2 === 0 &&!pari) {
    alert("Non hai vinto");
} else if (somma(numeroPc, numeroUtente) % 2!== 0 && pari){
    alert("Non hai vinto");
} else{
    alert("Hai vinto");
}