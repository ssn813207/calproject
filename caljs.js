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

