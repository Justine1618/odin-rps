function computerPlay() {
    let randChoice = Math.random();
    if (randChoice < 0.33) {
        return "Rock";
    }
    else if (randChoice < 0.66) {
        return "Paper";
    }
    else return "Scissors";
}