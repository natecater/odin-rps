let getComputerChoice = () => (Math.floor(Math.random()*3) + 1);

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener("click", round("rock", getComputerChoice));
paper.addEventListener("click", round("paper", getComputerChoice));
scissors.addeventListener("click", round("scissors", getComputerChoice));

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

function round(playerSelection, computerSelection) {
    let gameState = "";
    let upperHand = "";
    let lowerHand = "";

    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == 1 && computerSelection == 2) {
        gameState = "Lose";
        upperHand = "Paper";
        lowerHand = "Rock";
    } else if (playerSelection == 2 && computerSelection == 3) {
        gameState = "Lose";
        upperHand = "Scissors";
        lowerHand = "Paper";
    } else if (playerSelection == 1 && computerSelection == 3) {
        gameState = "Win";
        upperHand = "Rock";
        lowerHand = "Scissors";
    } else if (playerSelection == 2 && computerSelection == 1) {
        gameState = "Win";
        upperHand = "Paper";
        lowerHand = "Rock";
    } else if (playerSelection == 3 && computerSelection == 2) {
        gameState = "Win";
        upperHand = "Scissors";
        lowerHand = "Paper";
    } else if (playerSelection == 3 && computerSelection == 1) {
        gameState = "Lose";
        upperHand = "Rock";
        lowerHand = "Scissors";
    }

    return `You ${gameState}! ${upperHand} beats ${lowerHand}`;
};

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