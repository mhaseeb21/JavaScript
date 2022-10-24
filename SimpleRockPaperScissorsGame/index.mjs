import PromptSync from "prompt-sync";//importing prompt for nodejs
import randomInteger from 'random-int';


 const prompt=PromptSync();
 var userChoice=Number(prompt("Please select your choice\nRock = 0 \nPaper = 1 \nScissors = 2: "));

//conversion from user choice to rock/paper/scissors.
 let conversion=['Rock','Paper','Scissor'];
console.log("you have selected: ",conversion[userChoice]);


//generate a random number between 0 - 99
var randomNum = randomInteger(0, 2);
//computer choice
var computerChoice=conversion[2];
console.log("The computer  choose: ",computerChoice);

//game conditions
//Draws:
if(computerChoice===conversion[0] && conversion[userChoice] === conversion[0])
console.log("Both have selected Rock So result is: \"Draw\"");
else if(computerChoice===conversion[2] && conversion[userChoice] === conversion[2])
console.log("Draw");
else if(computerChoice===conversion[1] && conversion[userChoice] === conversion[1])
console.log("Draw");
//user win
else if(computerChoice===conversion[2] && conversion[userChoice] === conversion[0])
console.log("You Win");
else if(computerChoice===conversion[0] && conversion[userChoice] === conversion[1])
console.log("You Win");
else if(computerChoice===conversion[1] && conversion[userChoice] === conversion[2])
console.log("You Win");
//computer win
else if(computerChoice===conversion[1] && conversion[userChoice] === conversion[0])
console.log("You Lost");
else if(computerChoice===conversion[0] && conversion[userChoice] === conversion[2])
console.log("You Lost");
else if(computerChoice===conversion[2] && conversion[userChoice] === conversion[1])
console.log("You Lost");
