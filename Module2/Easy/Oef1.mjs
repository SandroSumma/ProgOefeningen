import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = await userInput.question('Geef een getal in:');

if(getal1 % 2 == 0)
{
    console.log(getal1 + " is even")
}
else
{
    console.log(getal1 + " is oneven")
}


process.exit();