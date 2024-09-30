import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question("Geef een maand in: ")

switch(maand)
{
    case "Januari":
        console.log("31 dagen")
        break;
    case "Februari":
        console.log("29 dagen")
        break;
    case "Maart":
        console.log("31 dagen")
        break;
    case "April":
        console.log("30 dagen")
        break;
    case "Mei":
        console.log("31 dagen")
        break;
    case "Juni":
        console.log("30 dagen")
        break;
    case "Juli":
        console.log("31 dagen")
        break;
    case "Augustus":
        console.log("31 dagen")
        break;
    case "September":
        console.log("30 dagen")
        break;
    case "Oktober":
        console.log("31 dagen")
        break;
    case "November":
        console.log("30 dagen")
        break;
    case "December":
        console.log("31 dagen")
        break;

}


process.exit();