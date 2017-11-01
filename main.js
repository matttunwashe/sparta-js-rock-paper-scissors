var playerScore = 0;
var computerScore = 0;

//setting the welcome message
function welcomeMessage() {
  alert("Welcome to Rock, Paper, Scissors! Rules are!\nRock Beats Scissors\nScissors Beats Paper\nPaper Beats Rock");
}

// keeps scores and displays it
function playGame(numOfRounds) {
  welcomeMessage();
  do {
    var player   = playerGuess();
    var computer = computerGuess();
    var result = compareGuesses(player, computer);
    updateScores(result, 1);
    if(result !== 0) {
      numOfRounds--;
    }
  }while(numOfRounds > 0);

  if(playerScore > computerScore) {
    alert("The player has " + playerScore + " points compared to the computer's " + computerScore + " points. So the player wins!");
  }
  else {
    alert("The computer has " + computerScore + " points compared to the player's " + playerScore + " points. So the computer wins!");
  }

  clearScores();

}

//player's guess and validation if player doesn't input the right option
function playerGuess() {
 var playerChoice = prompt("Choose rock, paper, or scissors.");
   if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
     alert("Good job");
     return playerChoice;
   }
  alert("You typed something else or did not spell your choice correctly please try again!");
  playerGuess();
}

//computer's guess
function computerGuess() {
  var choice = Math.random();
  if(choice < 0.34) {
    return "rock";
  }
  if(choice <= 0.67) {
    return "paper";
  }
  return "scissors";
}

//comparing the both the player and computer guess
function compareGuesses(guess1, guess2) {
  //Create an alert message detailing the results
  alert("Player chose: " + guess1 + " and the computer chose: " + guess2 + "!");
  //First check for equality
  if(guess1 === guess2) {
    alert("You and the computer guessed the same thing! Go again, no score added!");
    return 0;
  }
  //No check for guess1 winning
  if(
    (guess1 === "rock" && guess2 === "scissors")
                       ||
    (guess1 === "paper" && guess2 === "rock")
                       ||
    (guess1 === "scissors" && guess2 === "paper"))
    {
   alert("Player wins the round!");
    return 1;
    }
   alert("Computer wins the round!");
   return 2;
}

//updates the scores
function updateScores(result, points) {
    if(result === 1) {
      playerScore += points;
    }
    if(result === 2) {
      computerScore += points;
    }
    if(result === 0) {
      computerScore += 0;
      playerScore += 0;
    }
}

//clears scores after the game finishes
function clearScores() {
  playerScore = 0;
  computerScore = 0;
}

// states how many round the game should run for.
playGame(5);
