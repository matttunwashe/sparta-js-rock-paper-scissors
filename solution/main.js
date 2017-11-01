// Get input
function getUserInput() {
  return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}

// Random play
function randomPlay() {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// get the player move
function getPlayerMove(playerMove) {
  return playerMove || getUserInput();
}

// get the computer move
function getComputerMove(computerMove) {
  return computerMove || randomPlay();
}

// var test = getComputerMove();
// console.log("This is the computer move --- ", test);

// will need to play to five
function startGame() {
  alert("Lets player Rock, Paper, Scissors");
  // score variables
  var playerScore = 0;
  var computerScore = 0;

  // play to five
  while(playerScore < 5 && computerScore < 5) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    // console.log("PlayerMove --- ", playerMove);
    // console.log("ComputerMove --- ", computerMove);
    playerScore = 6;
    computerScore = 6;



  }

}

// check for a winner
function checkForWinner(playerMove, computerMove) {
  var winner;

  if(playerMove === computerMove){
    winner = "tie";
    return winner;
  }
}

var test = checkForWinner("rock", "rock");
console.log(test)

startGame()
