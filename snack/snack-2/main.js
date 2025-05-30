
// Inserisco due prompt 
const firstWord = prompt("Inserisci una parola");

const secondWord = prompt("Inserisci un'altra parola");

// Creo una condizione "if/else" per stampare la parola più corta e quella più lunga

if (firstWord.length < secondWord.length) {
    console.log(firstWord + " è più corta");
    console.log(secondWord + " è più lunga");

} else if (secondWord.length < firstWord.length) {
    console.log(secondWord + " è più corta");
    console.log(firstWord + " è più lunga");

} else {
    console.log("Le due parole sono uguali");
}
