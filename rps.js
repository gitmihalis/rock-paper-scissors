console.log("Play Rock, Paper, Scissors!");

// 1. Get computer's choice (randomly select between rock, paper, scissors).
const choices = ['rock', 'paper', 'scissors'];
const round = 1;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    console.log(`computer chose: ${choices[computerChoice]}`);
}


// 2. Get user's choice (prompt user for input).
function getHumanChoice() {
    let choice = prompt(`Rock, paper, or scissors? Pick one!`);
    choice = choice.toLowerCase();
    
    console.log(choice);
}

// 3. Compare choices

function compareChoices (humanChoice, computerChoice) {
    // 4. Determine winner based on the rules:
}

function playRound () {
    // code here.
    // 5. Display the result (who won, or if it's a tie).
}

