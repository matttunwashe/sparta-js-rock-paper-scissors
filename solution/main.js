//get the player input
function getUserInput() {
  return prompt ("please chose either 'rock', 'paper' or 'scissors'.")
}

//get the plyer move
function getPlayerMove() {
  return getUserInput();
}

//random player
function randomPlay() {
  // var randomNumber = Math.floor(Math.random() * 3)
  var randomNumber = 0;
if (randomNumber === 0) {
  return "rock"
} else if (randomNumber === 1) {
  return"paper"
}else{
  return "scissors"
  }


}


//get the computer move


//will need to play to five


//check for a winner
