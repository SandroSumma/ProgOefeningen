import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let minimum = 2;
let maximum = 8;

let getal1 = parseFloat (await userInput.question("Geef een getal in: "));

if(getal1 < minimum || getal1 > maximum)
{
    console.log("Je getal " + getal1 + " ligt niet tussen " + minimum + " en " + maximum)
}
else
{
    console.log("Je getal " + getal1 + " ligt tussen " + minimum + " en " + maximum)
}

process.exit();