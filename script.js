let randomNumber = Math.floor(Math.random() * 3);

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(compChoice, playerChoice) {
  if (playerChoice === "rock" && compChoice === "scissors") {
    humanScore++;
  } else if (playerChoice === "scissors" && compChoice === "paper") {
    humanScore++;
  } else if (playerChoice === "paper" && compChoice === "rock") {
    humanScore++;
  } else if (compChoice === "rock" && playerChoice === "scissors") {
    computerScore++;
  } else if (compChoice === "scissors" && playerChoice === "paper") {
    computerScore++;
  } else if (compChoice === "paper" && playerChoice === "rock") {
    computerScore++;
  } else {
    console.log("nobody won");
    return "nobody won";
  }
}

let userChoice1 = prompt("Choose rock, paper, or scissors").toLowerCase();
let computerChoice1 = getComputerChoice();
playRound(computerChoice1, userChoice1);
console.log(
  `Scores after Round 1: Human: ${humanScore}, Computer: ${computerScore}`
);

let userChoice2 = prompt("Choose rock, paper, or scissors").toLowerCase();
let computerChoice2 = getComputerChoice();
playRound(computerChoice2, userChoice2);
console.log(
  `Scores after Round 2: Human: ${humanScore}, Computer: ${computerScore}`
);

let userChoice3 = prompt("Choose rock, paper, or scissors").toLowerCase();
let computerChoice3 = getComputerChoice();
playRound(computerChoice3, userChoice3);
console.log(
  `Scores after Round 3: Human: ${humanScore}, Computer: ${computerScore}`
);

let userChoice4 = prompt("Choose rock, paper, or scissors").toLowerCase();
let computerChoice4 = getComputerChoice();
playRound(computerChoice4, userChoice4);
console.log(
  `Scores after Round 4: Human: ${humanScore}, Computer: ${computerScore}`
);

let userChoice5 = prompt("Choose rock, paper, or scissors").toLowerCase();
let computerChoice5 = getComputerChoice();
playRound(computerChoice5, userChoice5);
console.log(
  `Scores after Round 5: Human: ${humanScore}, Computer: ${computerScore}`
);

function checkScore(computer, human) {
  if (human < computer) {
    alert("Congrats, human won!");
  } else if (computer < human) {
    alert("Congrats, computer won!");
  }
}

checkScore(humanScore, computerScore);
