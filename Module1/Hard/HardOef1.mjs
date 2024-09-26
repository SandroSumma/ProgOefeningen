import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let berekening1;
let berekening2;
let berekening3;
let berekening4;
let eindberekening;

let aantalDagen = parseFloat(await userInput.question('Geef het aantal dagen in:'));
let aantalUren = parseFloat(await userInput.question('Geef het aantal uren in:'));
let aantalMinuten = parseFloat(await userInput.question('Geef het aantal minuten in:'));
let aantalSeconden = parseFloat(await userInput.question('Geef het aantal seconden in:'));

berekening1 = aantalDagen * 86400;
berekening2 = aantalUren * 3600;
berekening3 = aantalMinuten * 60;
berekening4 = aantalSeconden;

eindberekening = (berekening1 + berekening2 + berekening3 + berekening4);

console.log("Aantal seconden: " + eindberekening)


process.exit();