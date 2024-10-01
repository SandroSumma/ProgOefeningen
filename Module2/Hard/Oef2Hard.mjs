import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jaar = parseFloat(await userInput.question("Voer een jaartal in:"));

let dagenInFebruari = 28;

if (jaar % 4 === 0 && (jaar % 100 !== 0 || jaar % 400 === 0)) {
    dagenInFebruari = 29;
}

console.log("Februari in het jaar " + jaar + " heeft " + dagenInFebruari + " dagen.");

process.exit();