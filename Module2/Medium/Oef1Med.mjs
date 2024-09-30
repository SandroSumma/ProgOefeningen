import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let Artiest1 = "Michael Jackson";
let Artiest2 = "Travis scott";
let Artiest3 = "AC/DC";
let Artiest4 = "Scarabeats";

console.log("Kies een artiest:")
console.log("1. " + Artiest1)
console.log("2. " + Artiest2)
console.log("3. " + Artiest3)
console.log("4. " + Artiest4)

let keuze = parseFloat(await userInput.question("Geef je keuze in: "))

switch(keuze)
{
    case 1:
        console.log("Je koos voor " + Artiest1)
        console.log("Ze zijn de artist achter de hit: Beat it")
        break;
    case 2:
        console.log("Je koos voor " + Artiest2)
        console.log("Ze zijn de artist achter de hit: FE!N")
        break;
    case 3:
        console.log("Je koos voor " + Artiest3)
        console.log("Ze zijn de artist achter de hit: Thunderstruck")
        break;
    case 4:
        console.log("Je koos voor " + Artiest4)
        console.log("Ze zijn de artist achter de hit: Timeless")
        break;
}

process.exit();