import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let zijde1 = await userInput.question("Geef zijde1 in: ");
let zijde2 = await userInput.question("Geef zijde2 in: ");

let oppervlakte = (zijde1*zijde2);

console.log("De oppervlakte van uw rechthoek is " + oppervlakte)

process.exit();