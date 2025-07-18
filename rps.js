console.log("Let's play Rock, Paper, Scissors!");

// 1. Get computer's choice (randomly select between rock, paper, scissors).
let round = 1;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = ['rock', 'paper', 'scissors'][randomNumber];
    console.log(`Computer chose: ${computerChoice}`);

    return computerChoice;;
}


// 2. Get user's choice (prompt user for input).
function getHumanChoice() {
    let choice = prompt(`Rock, paper, or scissors? Pick one!`);
    console.log(`You chose: ${choice}`);

    return choice.toLowerCase();
}

// 3. Compare human vs. computer's choices
function compareChoices (humanChoice, computerChoice) {
    // 4. Determine winner based on the rules:
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
               (humanChoice === 'scissors' && computerChoice === 'paper') ||
               (humanChoice === 'paper' && computerChoice === 'rock')) {
        console.log("You win!");
        return "human";
    } else {
        console.log("Computer wins!");
        return "computer";
    }
}

function playRound () {
    // 5. Run the game
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const winner = compareChoices(humanChoice, computerChoice);
    console.log(`Round ${round}: ${winner} wins!`);
    if (winner === "human") {
        humanScore++;
    }
    else if (winner === "computer") {
        computerScore++;
    }
    round++;
    console.log(`Scores - You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
    // 6. Play 5 rounds
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    // 7. Determine overall winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer is the overall winner!");
    } else {
        console.log("It's an overall tie!");
    }
}

playGame();
// 8. End the game
console.log("Game over! Thanks for playing!");
// --- IGNORE ---
// 9. Ask if the user wants to play again
let playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
if (playAgain === 'yes') {
    round = 1;
    humanScore = 0;
    computerScore = 0;
    playGame();
}
else {
    console.log("Thanks for playing! Goodbye!");
}

