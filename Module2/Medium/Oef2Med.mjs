import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("Geef een getal1 op: "))
let getal2 = parseFloat(await userInput.question("Geef een getal2 op: "))
let berekening = await userInput.question("Welke berekening wil je maken? +, -, *, /")

let som = getal1 + getal2;
let verschil = getal1 - getal2;
let product = getal1 * getal2;
let deling = getal1 / getal2;

switch(berekening)
{
    case '+':
        console.log(getal1 + " + " + getal2 + " is gelijk aan " + som)
        break;
    case '-':
        console.log(getal1 + " - " + getal2 + " is gelijk aan " + verschil)
        break;
    case '*':
        console.log(getal1 + " * " + getal2 + " is gelijk aan " + product)
        break;
    case '/':
        console.log(getal1 + " / " + getal2 + " is gelijk aan " + deling)
        break;
}

process.exit();