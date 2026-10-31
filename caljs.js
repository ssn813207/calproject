function getComputerChoice  () {
    const max = 3;
    let backnum = Math.floor(Math.random() * max); 
    switch (backnum) {
        case 0:
            return  "rock"
            break;
        case 1:
            return  "paper"
            break;
        case 2:
            return  "scissors"
            break;
            }
         }

function getHumanChoice (){
    let humaninput = prompt("please input some","rock,paper or scissors")
    return humaninput;
} 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame () {

let humanScore = 0;
let computerScore = 0;

for (let i = 0 ; i < 5 ; i++){
    const endvalue = playRound(getHumanChoice(), getComputerChoice())
    console.log(endvalue);
}
 if (humanScore > computerScore){
    return "human win!";
} else if (humanScore < computerScore){
    return "computer win!";
} else {
    return "draw!";
}
    function playRound(humanChoice, computerChoice) { 
        if ((humanChoice.toLowerCase() === "rock") && (computerChoice.toLowerCase() === "paper")) {
            ++computerScore;
            return "You lose! Paper beats Rock";
            
        } else if ((humanChoice.toLowerCase() === "rock") && (computerChoice.toLowerCase() === "scissors")) {
            ++humanScore;
            return "You win! Rock beats Scissors";
            
        } else if ((humanChoice.toLowerCase() === "paper") && (computerChoice.toLowerCase() === "rock")) {
           ++humanScore;
            return "You win! Paper beats Rock";
            
        } else if ((humanChoice.toLowerCase() === "paper") && (computerChoice.toLowerCase() === "scissors")) {
            ++computerScore;
            return "You lose! Scissors beats Paper";
            
        } else if ((humanChoice.toLowerCase() === "scissors") && (computerChoice.toLowerCase() === "rock")) {
            ++computerScore;
            return "You lose! Rock beats Scissors";
            
        } else if ((humanChoice.toLowerCase() === "scissors") && (computerChoice.toLowerCase() === "paper")) {
            ++humanScore;
            return "You win! Scissors beats Paper";
            
        } else {
            return "A Dead Heat!";
        }
    }
 }       

console.log(playGame());

