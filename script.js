let option;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let round = 0;
let array = ["Rock", "Paper", "Scissors"];

let randomIndex;
let computerSelection;
let computerResult;
let i = 0;


function gameStart(option, playerSelection, computerSelection) {
  alert(`Welcome to Rock, Paper, Scissors`);
  alert(`Can you beat the computer?`);
  option = prompt(`Do you want to play? (Yes) or (No):`);

    if (option == "Yes" || option == "yes") {
      alert(`Are you ready?`)
      computerPlay(array, randomIndex, computerSelection)
      game(round, playerScore, computerScore)
    }else if(option == "No" || option == "no"){
      alert("Maybe Next Time!")
    }
  
}

function computerPlay(array, randomIndex, computerSelection){
  console.log("I am amazing")
  randomIndex = Math.floor(Math.random() * array.length)
  computerSelection = array[randomIndex]
  console.log("computer has selected " +computerSelection) //Testing purposes
  return computerSelection
    
}

function playRound(playerSelection, computerResult){

  playerSelection = playGame()
  computerResult = computerPlay(array, randomIndex, computerSelection)
  console.log("Player has selected the following " + playerSelection)

  
  if((playerSelection === "Rock") && (computerResult === "Scissors")){
    console.log("You are here 1")
    alert("You win, Rock beats Scissors")
    playerScore++;
    alert("Player has: " + playerScore + " point")
    round += i;
  }
  else if ((playerSelection === "Rock") && (computerResult === "Paper")){
    console.log("You are here 2")
    alert("You lose, Paper beats Rock")
    computerScore++
    alert("Computer has: " + computerScore + " point")
    round += i;
  }
  else if((playerSelection === "Rock") && (computerResult === "Rock")){
    console.log("You are here 3")
    alert("It is a Draw")
    round += i;
  }
  else if((playerSelection === "Paper") && (computerResult === "Rock")){
    alert("You Win, Paper beats Rock")
    playerScore++;
    alert("Player has: " + playerScore + " point")
    round += i;
  }
  else if((playerSelection === "Paper") && (computerResult === "Scissors")){
    alert("You lose, Scissors beats Paper")
    alert("Computer has: " + computerScore + " point")
    computerScore++;
    round += i;
  }
  else if((playerSelection === "Paper") && (computerResult === "Paper")){
    alert("It is a Draw")
    round += i;
  }
  else if((playerSelection === "Scissors") && (computerResult === "Paper")){
    alert("You win, Scissors beats Paper")
    playerScore++;
    alert("Player has: " + playerScore + " point")
    round += i;
  }
  else if((playerSelection === "Scissors") && (computerResult === "Rock")){
    alert("You lose, Rock beats Scissors")
    computerScore++,
    alert("Computer has: " + computerScore + " point")
    round += i;
  }
  else if((playerSelection === "Scissors") && (computerResult === "Scissors")){
    alert("It is a Draw");
    round += i;
  }
  else{
    alert("Thanks for coming")
  }
}

function playGame(playerSelection) {
  playerSelection = prompt("Rock, Paper, Scissors?");
  console.log("you are here now")
  alert("Player has choosen " + playerSelection)
  console.log("player has inserted " + playerSelection)
  return playerSelection
}


function game(round, playerScore, computerScore){
  for(i = 0; i < 5; i++){
    playRound(playerSelection, computerSelection)
    console.log(i)
  }
}
gameStart(option)
