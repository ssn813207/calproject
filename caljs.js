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



    let humanScore = 0;
    let computerScore = 0;


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


        const body = document.querySelector("body");    
        const resultDiv = document.createElement("div");
        const humanP = document.createElement("p");
        const computerP = document.createElement("p");

       function updateScore() {
            humanP.textContent = "humanScore: " + humanScore;
            computerP.textContent = "computerScore: " + computerScore;
        } 

        ["rock","paper","scissors"].forEach((choice) => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.addEventListener("click", () => {
                const computerChoice = getComputerChoice();
                resultDiv.textContent = playRound(choice, computerChoice);
                updateScore();
            });
            body.appendChild(button);
        })
         
        const winner   = []
        
        body.appendChild(resultDiv);  
        body.appendChild(humanP);
        body.appendChild(computerP);
        
 

