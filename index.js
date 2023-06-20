//beginning prompt - lets play
//player chooses option
//computer random option
//rock beats scissors, scissors beats paper, paper beats rock
//winner prompt
//if tie
//best out of 5 rounds
//game winner

//Beginning Prompt
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

alert(`Hey ${userName}! Let's play! Best out of 5 rounds wins!`);

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

//Best of 5 rounds loop
while (roundCount < 5) {
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

  //Computer random choice
  let computerMath = Math.floor(Math.random() * 3);
  console.log(computerMath);

  let computerChoice;
  if (computerMath === 0) {
    computerChoice = "rock";
  } else if (computerMath === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  //Winner prompt
  let playRound = () => {
    console.log(playerChoice, computerChoice);
    if (playerChoice === computerChoice) {
      return alert("Tie!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      playerScore++;
      return alert(`You Win! ${playerChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      return alert(
        `You Lose! ${playerChoice} is defeated by ${computerChoice}`
      );
    }
  };
  console.log(playRound());

  roundCount++;
}

//Game winner
let endGame = () => {
  if (playerScore > computerScore) {
    return alert("Game Over. YOU WON!");
  } else if (computerScore > playerScore) {
    return alert("Game Over. Sorry you lose.");
  } else {
    return alert("Game Over. You Tied!");
  }
};
console.log(endGame());
