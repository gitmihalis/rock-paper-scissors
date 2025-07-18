console.log("Rock, Paper, Scissors Game");

// 1. Get computer's choice (randomly select between rock, paper, scissors).
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    console.log(choices[computerChoice]);
}


// 2. Get user's choice (prompt user for input).
function getHumanChoice() {
    let choice = prompt('Which do you choose? Rock, Paper, or Scissors?');
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

