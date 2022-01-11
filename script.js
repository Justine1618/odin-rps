function getComputerGuess() {
    let randChoice = Math.random();
    if (randChoice < 0.33) {
        return "rock";
    }
    else if (randChoice < 0.66) {
        return "paper";
    }
    else return "scissors";
}

function getPlayerGuess() {
    let playerGuess = prompt("Please guess rock, paper, or scissors");
    //Returns player guess in cleaned up form, all lower case
    //Will assume that player entered a valid choice, no validation required
    return playerGuess.trim().toLowerCase();
}

function playRound(playerGuess, computerGuess) {
    if(playerGuess == computerGuess) {
        return "Draw";
    }
    else if (playerGuess == "rock" && computerGuess == "scissors") {
        return "Player Wins";
    }
    else if (playerGuess == "paper" && computerGuess == "rock") {
        return "Player Wins";
    }
    else if (playerGuess == "scissors" && computerGuess == "paper") {
        return "Player Wins";
    }
    else {
        return "Computer Wins";
    }
}

function play() {
    for(let i = 0; i < 5; i++) {
        const playerGuess = getPlayerGuess();
        const computerGuess = getComputerGuess();
        console.log(playRound(playerGuess, computerGuess));
        
    }
}