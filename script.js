let option;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let round = 0;
const computerTurn = ["Rock", "Paper", "Scissors"];

function gameStart(option) {
  console.log(`Welcome to Rock, Paper, Scissors`);
  console.log(`Can you beat the computer?`);
  option = prompt(`Do you want to play? (Yes) or (No):`);

  if (option == "Yes" || option == "yes") {
    playGame(playerSelection, computerTurn);
  }
}

const computerPlay = (computerTurn) => {
  //Function for getting random PC value
  return computerTurn[Math.floor(Math.random() * computerTurn.length)];
};

function playGame(playerSelection, computerTurn) {
  console.log(`Are you ready?`);
  playerSelection = prompt("Rock, Paper, Scissors?");
  console.log(`You chose: ` + playerSelection);
  console.log(`The computer plays:` + computerPlay(computerTurn));
}

function game(
  playerSelection,
  computerTurn,
  playerScore,
  computerScore,
  round
) {
  for (let i = 0; i <= 5; i++) {}
}
gameStart();
// playGame(playerSelection, computerTurn);
