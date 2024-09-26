// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let som;
let verschil;
let product;
let deling;

let getal1 = 4
let getal2 = 5

som = getal1 + getal2
verschil = getal1 - getal2
product = getal1 * getal2
deling = getal1 / getal2

console.log(som)
console.log(verschil)
console.log(product)
console.log(deling)


process.exit();