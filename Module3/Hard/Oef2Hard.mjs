import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let som = 0;
let aantal = 0;
let gemiddelde = 0;

while (gemiddelde <= 25) {

    let getal = parseFloat(await userInput.question("Geef een getal in: "));
    
    som += getal;
    aantal++;
    
    gemiddelde = som / aantal;

    console.log("Het lopende gemiddelde is: " + gemiddelde);

    if (gemiddelde > 25) {
        console.log("Het gemiddelde is groter dan 25. Het programma stopt.");
        break;
    }
}

process.exit();
