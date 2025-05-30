
const numbers = []
let repeat = 6

// Loop for

for (i = 0; i < repeat; i++) {

    let singleNumber = Number(prompt("Inserisci un numero"))
    if (singleNumber % 2 !== 0)
        (numbers.push(singleNumber))


    console.log(numbers)
}