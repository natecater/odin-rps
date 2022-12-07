const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const roundResult = document.querySelector(".round");
const score = document.querySelector(".score");
const gameResult = document.querySelector(".game");
let pScore = 0;
let cScore = 0;

rock.addEventListener('click', startRound);
paper.addEventListener('click', startRound);
scissors.addEventListener('click', startRound);

function startRound(e) {
    let playerChoice = e.target.innerText;
    round(playerChoice);
}

function getComputerChoice() {
    let choice = "";
    let number = (Math.floor(Math.random()*3) + 1);

    switch(number) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }

    return choice;

}

function round(playerSelection) {
    let gameState = "";

    let computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        gameState = 'Tie';
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        gameState = "Win";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        gameState = "Win";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        gameState = "Win";
    } else {
        gameState = "Lose";
    }

    displayResult(gameState, playerSelection, computerSelection);
    trackGame(gameState);

}

function displayResult(state, player, computer) {

    let result = ``;

    if (state == "Win") {
        result = `You ${state}! ${player} beats ${computer}`;
    } else if (state == "Lose") {
        result = `You ${state}! ${computer} beats ${player}`;
    } else {
        result = `It's a tie!`;
    }

    roundResult.innerText = result;
}

function trackGame(state) {

    let gameOutcome = "";

    if (pScore == 5 || cScore == 5) {
        pScore = 0;
        cScore = 0;
        gameResult.innerText = "";
    }

    if (state == "Win") {
        pScore += 1;
     } else if (state == "Lose") {
        cScore += 1;
     } 

    let scoreBoard = `Player: ${pScore} Computer: ${cScore}`;

    if (pScore == 5) {
        gameOutcome = "Player wins! Game over, can you beat me again?";
    } else if (cScore == 5) {
        gameOutcome = "Computer wins! Better luck next time";
    }

    score.innerText = scoreBoard;
    gameResult.innerText = gameOutcome;


}