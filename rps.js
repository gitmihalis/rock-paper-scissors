console.log("Play Rock, Paper, Scissors!");

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

// 3. Compare choices

function compareChoices (humanChoice, computerChoice) {
    switch (humanChoice, computerChoice) {
        case( humanChoice )       
    }
    // 4. Determine winner based on the rules:
    // rock > scissors
    // scissors > paper
    // paper > rock
    // is scissors > rock : no
    // is paper > scissors : no
    // is rock > scissors : yes
}

function playRound () {
    // code here.
    // 5. Display the result (who won, or if it's a tie).
}

