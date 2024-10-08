import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Geef een getal in: "));

let isPriem = getal > 1;

for (let i = 2; i < getal; i++) {
    if (getal % i === 0) {
        isPriem = false;
        break;
    }
}

if(isPriem == true)
{
    console.log(getal + " is een priemgetal")
}
else
{
    console.log(getal + " is geen priemgetal");
}

process.exit();