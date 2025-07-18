console.log("Rock, Paper, Scissors Game");

// 1. Get computer's choice (randomly select between rock, paper, scissors).
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random() * 3);

    console.log(computerChoice);
}
getComputerChoice()
// 2. Get user's choice (prompt user for input).
// 3. Compare choices
// 4. Determine winner based on the rules:
// 5. Display the result (who won, or if it's a tie).
