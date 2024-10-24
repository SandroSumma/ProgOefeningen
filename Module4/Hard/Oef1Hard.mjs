import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let tellerwinstGebruiker = 0;
let tellerwinstComputer = 0;


do
{

   let keuzeGebruiker = await userInput.question("Geef aan of je rock, paper of scissors wilt doen:" );
   let choices = ['rock', 'paper', 'scissors'];
   let computerChoice = choices[Math.floor(Math.random()*choices.length)];
   
   console.log(keuzeGebruiker + " vs " + computerChoice)

   if(keuzeGebruiker == "rock" && computerChoice == "scissors")
   {
      tellerwinstGebruiker++;
      console.log("Gebruiker heeft gewonnen " + tellerwinstGebruiker + "/3")
   }
   else if(keuzeGebruiker == "scissors" && computerChoice == "rock")
   {
      tellerwinstComputer++;
      console.log("Computer heeft gewonnen " + tellerwinstComputer + "/3")
   }
   if(keuzeGebruiker == "paper" && computerChoice == "rock")
   {
      tellerwinstGebruiker++;
      console.log("Gebruiker heeft gewonnen " + tellerwinstGebruiker + "/3")
   }
   else if(keuzeGebruiker == "rock" && computerChoice == "paper")
   {
      tellerwinstComputer++;
      console.log("Computer heeft gewonnen " + tellerwinstComputer + "/3")
   }
   if(keuzeGebruiker == "scissors" && computerChoice == "paper")
   {
      tellerwinstGebruiker++;
      console.log("Gebruiker heeft gewonnen " + tellerwinstGebruiker + "/3")
   }
   else if(keuzeGebruiker == "paper" && computerChoice == "scissors")
   {
      tellerwinstComputer++;
      console.log("Computer heeft gewonnen " + tellerwinstComputer + "/3")
   }

}while(tellerwinstComputer < 3 && tellerwinstGebruiker < 3)


   if (tellerwinstGebruiker == 3) {
      console.log("De gebruiker heeft gewonnen.");
  } else {
      console.log("De computer heeft gewonnen.");
  }