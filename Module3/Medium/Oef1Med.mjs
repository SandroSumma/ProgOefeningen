import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let som = 0;
let getal;

do {
    getal = parseFloat(await userInput.question("Geef een getal in:"));

    if (getal > 0) {
        som += getal;
    }
    
} while (getal > 0);

console.log("De som van de ingevoerde getallen is: " + som);

process.exit();