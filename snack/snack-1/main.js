
//  Inserisco due prompt
const firstNumber = Number(prompt("Inserisci un numero"));
const secondNumber = Number(prompt("Inserisci un numero"));

// Confronto i due numeri con una condizione if/else 

if (firstNumber > secondNumber) {
    console.log("Il numero maggiore è: " + firstNumber);

} else if (secondNumber > firstNumber) {
    console.log("Il numero maggiore è: " + secondNumber);

} else {
    console.log("I numeri sono uguali.");
}


