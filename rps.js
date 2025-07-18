console.log("Let's play Rock, Paper, Scissors!");

// 1. Get computer's choice (randomly select between rock, paper, scissors).
const round = 1;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.floor(Math.random() * 3);
    console.log(`Computer chose: ${computerChoice}`);

    return choices[computerChoice].toLowerCase();
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
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    const winner = compareChoices(humanChoice, computerChoice);
    console.log(`Round ${round}: ${winner} wins!`);
}

