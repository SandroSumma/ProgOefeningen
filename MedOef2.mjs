import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let berekening;
let berekening2;

let geboorteJaar = parseFloat(await userInput.question('Geef uw geboortejaar in:'));
let toekomstJaar = parseFloat(await userInput.question('Geef het jaar van de toekomst in:'));

berekening = toekomstJaar - geboorteJaar;
berekening2 = (toekomstJaar - geboorteJaar) - 1; 
console.log("In " + toekomstJaar + " zal ik " + berekening2 + " of " + berekening + " jaar oud zijn.")

process.exit();