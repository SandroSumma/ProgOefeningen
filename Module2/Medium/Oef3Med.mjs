import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


console.log("Welkom bij de quiz! Beantwoord de volgende 5 vragen:")
let teller = 0;


let vraag1 = await userInput.question("Vraag 1: Wat is de hoofdstad van Italië? ")
let antwoord1 = "Rome";
if(vraag1 == antwoord1)
{
    console.log("Jouw antwoord: " + vraag1)
    console.log("Goed antwoord!")
    teller++;
}
else
{
    console.log("Jouw antwoord: " + vraag1)
    console.log("Fout antwoord! Het juiste antwoord was " + antwoord1)
}

let vraag2 = await userInput.question("Vraag 2: Welke kleur heeft een sinaasappel? ")
let antwoord2 = "Oranje";
if(vraag2 == antwoord2)
{
    console.log("Jouw antwoord: " + vraag2)
    console.log("Goed antwoord!")
    teller++;
}
else
{
    console.log("Jouw antwoord: " + vraag2)
    console.log("Fout antwoord! Het juiste antwoord was " + antwoord2)
}

let vraag3 = await userInput.question("Vraag 3: Welk voetbalteam is het beste van de wereld? ")
let antwoord3 = "OH Leuven";
if(vraag3 == antwoord3)
{
    console.log("Jouw antwoord: " + vraag3)
    console.log("Goed antwoord!")
    teller++;
}
else
{
    console.log("Jouw antwoord: " + vraag3)
    console.log("Fout antwoord! Het juiste antwoord was " + antwoord3)
}

let vraag4 = parseFloat(await userInput.question("Vraag 4: Hoeveel maanden zijn er in een jaar? "))
let antwoord4 = "12";
if(vraag4 == antwoord4)
{
    console.log("Jouw antwoord: " + vraag4)
    console.log("Goed antwoord!")
    teller++;
}
else
{
    console.log("Jouw antwoord: " + vraag4)
    console.log("Fout antwoord! Het juiste antwoord was " + antwoord4)
}

let vraag5 = await userInput.question("Vraag 5: Wie is de king? ")
let antwoord5 = "Sandro";
if(vraag5 == antwoord5)
{
    console.log("Jouw antwoord: " + vraag5)
    console.log("Goed antwoord!")
    teller++;
}
else
{
    console.log("Jouw antwoord: " + vraag5)
    console.log("Fout antwoord! Het juiste antwoord was " + antwoord5)
}

console.log("Je hebt " + teller + " van de 5 vragen juist beantwoord.")

process.exit();