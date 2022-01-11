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

function rock() {
    const computerGuess = getComputerGuess();
    const winnerText = playRound('rock', computerGuess);
    winner.textContent = winnerText;
}

function paper() {
    const computerGuess = getComputerGuess();
    const winnerText = playRound('paper', computerGuess);
    winner.textContent = winnerText;
}

function scissors() {
    const computerGuess = getComputerGuess();
    const winnerText = playRound('scissors', computerGuess);
    winner.textContent = winnerText;
}

const container = document.querySelector('#buttons');
const winner = document.querySelector('#winner');

container.setAttribute('style', 'width: 70vw; height: auto; display: flex; margin: 16px auto; justify-content: center');
winner.setAttribute('style', 'width: 70vw; height: auto; display: flex; margin: 16px auto; justify-content: center')

const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonScissors = document.createElement('button');

winner.textContent = 'Please choose 1 option';
buttonRock.textContent = 'Rock';
buttonPaper.textContent = 'Paper';
buttonScissors.textContent = 'Scissors';

buttonRock.addEventListener('click', rock);
buttonPaper.addEventListener('click', paper);
buttonScissors.addEventListener('click', scissors);

container.appendChild(buttonRock);
container.appendChild(buttonPaper);
container.appendChild(buttonScissors);