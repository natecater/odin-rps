let getComputerChoice = () => (Math.floor(Math.random()*3) + 1);

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const roundResult = document.querySelector(".round");
const score = document.querySelector(".score");
let pScore = 0;
let cScore = 0;

rock.addEventListener("click", round(1));
paper.addEventListener("click", round(2));
scissors.addeventListener("click", round(3));

/*
function getPlayerChoice() {

    let rawChoice = prompt("Pick rock, paper, or scissors, duh... ");
    choice = rawChoice.toLowerCase();

    let result = 0;
    if (choice == "rock") {
        result = 1;
    } else if (choice == "paper") {
        result = 2;
    } else if (choice == "scissors") {
        result = 3;
    }

    if (result == 0) {
        console.log("Please enter a valid choice, check your spelling...");
        getPlayerChoice();
    } else {
        return result;
    }

    
};

*/

function round(playerSelection) {
    let gameState = "";

    let computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        gameState = 'Tie';
    } else if (playerSelection == 1 && computerSelection == 3) {
        gameState = "Win";
    } else if (playerSelection == 2 && computerSelection == 1) {
        gameState = "Win";
    } else if (playerSelection == 3 && computerSelection == 2) {
        gameState = "Win";
    } else {
        gameState = "Lose";
    }

    displayResult(gameState);
    trackGame(gameState);


    // return `You ${gameState}! ${upperHand} beats ${lowerHand}`;
};

function displayResult(state) {

    let result = ``;

    if (state == "Win") {
        result = `You ${state}! ${playerSelection} beats ${computerSelection}`;
    } else {
        result = `You ${state}! ${computerSelection} beats ${computerSelection}`;
    }

    roundResult.innerText = result;
}

function trackGame(state) {

    let gameResult = "";

    if (pScore == 5 || cScore == 5) {
        pScore = 0;
        cScore = 0;
    }

    (state == "Win") ? pScore += 1 : cScore += 1;

    let scoreBoard = `Player: ${pScore} Computer: ${cScore}`;

    if (pScore == 5) {
        gameResult = "Player wins! Game over, can you beat me again?";
    } else if (cScore == 5) {
        gameResult = "Computer wins! Better luck next time";
    }


}

function game() {

    console.log("Rock! Paper! Scissors! Best out of 5, let's go");

    let playerWins = 0;
    let cpuWins = 0;
    let roundTrack = 5;

    while(roundTrack > 0) {
        let result = round(getPlayerChoice(), getComputerChoice());
        
        console.log(result);

        if (result.includes("Win")) {
            playerWins += 1;
        } else if (result.includes("Lose")) {
            cpuWins += 1;
        }

        if (playerWins >= 3) {
            return "Congrats! You won 3 of 5";
        } else if (cpuWins >= 3) {
            return "Oh well, try again... you lost 3 of 5";
        }

        roundTrack--;
    }

    if (playerWins == cpuWins) {
        return "Hey, it's a tie try again!";
    } else if (playerWins >= cpuWins) {
        return "You won! Not 3 of 5 but still beat the computer.";
    } else {
        return "Computer beat you.. not 3 of 5 but still, try again";
    }

}