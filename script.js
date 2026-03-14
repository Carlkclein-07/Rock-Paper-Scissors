// Grabbing html elements in order to control them with JavaScript

const RockBtn = document.getElementById('rock');
const PaperBtn = document.getElementById('paper');
const ScissorsBtn = document.getElementById('scissors');
const resultDiv = document.getElementById('result');

// Making the computer choose randomly using Math.random() and Math.floor

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Game logic to determine the winner
function playGame(playerChoice){

    const computer = getComputerChoice();

    if(playerChoice === computer){
        resultDiv.textContent = "It's a tie! Gotta try harder next time!";
    }

    else if(
        (playerChoice === 'rock' && computer === 'scissors') ||
        (playerChoice === 'paper' && computer === 'rock') ||
        (playerChoice === 'scissors' && computer === 'paper')
    ){

        playerScore++;   // increase player score
        playerScoreSpan.textContent = playerScore;

        resultDiv.textContent = `You win! ${playerChoice} beats ${computer}!`;
    }

    else{

        computerScore++; // increase computer score
        computerScoreSpan.textContent = computerScore;

        resultDiv.textContent = `You lose! ${computer} beats ${playerChoice}!`;
    }
}

// Connecting buttons to the game logic

RockBtn.addEventListener("click", function () {
    playGame('rock');
});

PaperBtn.addEventListener("click", function () {
    playGame('paper');
});

ScissorsBtn.addEventListener("click", function () {
    playGame('scissors');
});
// scoreboard extension
let playerScore = 0;
let computerScore = 0;

// grabbing scoreboard elements from html
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');