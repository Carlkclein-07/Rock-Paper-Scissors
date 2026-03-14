const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const result = document.getElementById("result");

function computerChoice(){

    const choices = ["rock","paper","scissors"];

    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

function playGame(playerChoice){

    const computer = computerChoice();

    if(playerChoice === computer){
        result.textContent = "It's a tie!";
    }

    else if(
        playerChoice === "rock" && computer === "scissors" ||
        playerChoice === "paper" && computer === "rock" ||
        playerChoice === "scissors" && computer === "paper"
    ){
        result.textContent = "You Win! Computer chose " + computer;
    }

    else{
        result.textContent = "You Lose! Computer chose " + computer;
    }

}

rockBtn.addEventListener("click", function(){
    playGame("rock");
});

paperBtn.addEventListener("click", function(){
    playGame("paper");
});

scissorsBtn.addEventListener("click", function(){
    playGame("scissors");
});
