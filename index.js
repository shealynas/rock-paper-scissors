//beginning prompt - lets play
//player chooses option
//computer random option
//rock beats scissors, scissors beats paper, paper beats rock
//winner prompt
//if tie
//best out of 5 rounds
//game winner

/*Beginning Prompt
function promptUserForName() {
  const WELCOME_MESSAGE =
    "Welcome to Rock Paper Scissors! Please enter your name to play";
  let userName = prompt(WELCOME_MESSAGE);

  while (!userName) {
    userName = prompt(WELCOME_MESSAGE);
  }
  return userName;
}

const userName = promptUserForName();

alert(`Hey ${userName}! Let's play! Best out of 5 rounds wins!`);*/

let playerScore = 0;
let computerScore = 0;
let roundWinner = 0;
//should it be "" or is it 0 because let changes

//Player Chooses Option
let playerChoice = prompt(
  "Choose your weapon: rock, paper, or scissors"
).toLowerCase();

while (
  playerChoice !== "rock" &&
  playerChoice !== "paper" &&
  playerChoice !== "scissors"
) {
  playerChoice = prompt("Choose your weapon: rock, paper, or scissors");
}
console.log(playerChoice);

//computer random choice
function computerChoice() {
  let computerMath = Math.floor(Math.random() * 3);
  console.log(computerMath);

  //let computerChoice = () => {
  if (computerMath === 0) {
    return "rock";
  } else if (computerMath === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(computerChoice());

//should this be a variable
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return alert("Tie!");
    //do i need to add ++ to both
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return alert("Computer Wins! Paper beats Rock.");
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerScore++;
    return alert("You Win! Rock beats Scissors!");
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerScore++;
    return alert("You Win! Paper beats Rock!");
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return alert("Computer Wins! Scissors beats Paper!");
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
    return alert("You Win! Scissors beats Paper!");
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return alert("Computer Wins! Rock beats Scissors!");
    //can i return an alert like this
  }
}
console.log(playRound());
