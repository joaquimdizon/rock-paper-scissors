const arr = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];

  return item;
}

function getPlayerChoice() {
  let item = window.prompt("rock, paper or scissors?");

  return item;
}

function game() {
  let message = "";
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    if (
      playerSelection.toUpperCase() === "ROCK" &&
      computerSelection.toUpperCase() === "PAPER"
    ) {
      message = "You lose! Paper beats Rock";
      computerScore++;
    }

    if (
      playerSelection.toUpperCase() === "ROCK" &&
      computerSelection.toUpperCase() === "SCISSORS"
    ) {
      message = "You win! Rock beats Paper";
      playerScore++;
    }

    if (
      playerSelection.toUpperCase() === "ROCK" &&
      computerSelection.toUpperCase() === "ROCK"
    ) {
      message = "It's a tie!";
    }

    if (
      playerSelection.toUpperCase() === "PAPER" &&
      computerSelection.toUpperCase() === "ROCK"
    ) {
      message = "You win! Paper beats Rock!";
      playerScore++;
    }

    if (
      playerSelection.toUpperCase() === "PAPER" &&
      computerSelection.toUpperCase() === "SCISSORS"
    ) {
      message = "You lose! Scissors beats Paper";
      computerScore++;
    }

    if (
      playerSelection.toUpperCase() === "PAPER" &&
      computerSelection.toUpperCase() === "PAPER"
    ) {
      message = "It's a tie!";
    }

    if (
      playerSelection.toUpperCase() === "SCISSORS" &&
      computerSelection.toUpperCase() === "PAPER"
    ) {
      message = "You win! Scissors beats Paper";
      playerScore++;
    }

    if (
      playerSelection.toUpperCase() === "SCISSORS" &&
      computerSelection.toUpperCase() === "ROCK"
    ) {
      message = "You lose! Rock beats Scissors";
      computerScore++;
    }

    if (
      playerSelection.toUpperCase() === "SCISSORS" &&
      computerSelection.toUpperCase() === "SCISSORS"
    ) {
      message = "It's a tie!";
    }

    console.log(message);
  }

  if (playerScore > computerScore) {
    console.log("YOU ARE THE WINNER!");
  } else if (playerScore === computerScore) {
    console.log("IT'S A TIE!");
  } else {
    console.log("YOU ARE THE LOSER!");
  }
}

game();
