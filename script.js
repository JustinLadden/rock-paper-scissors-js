document.addEventListener('DOMContentLoaded', function() {

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["rock", "paper", "scissors"];
  var computerChoice = options[Math.floor(Math.random() * options.length)];
  // Your prompt() goes below
  var userChoice = prompt("Choose one: rock, paper, or scissors")




  console.log("The user chooses: " + userChoice)
  console.log("The computer chooses: " + computerChoice);
  // Your declareWinner function goes below
  function declareWinner(userChoice, computerChoice){
    if (userChoice == "rock"){
      if (computerChoice == "scissors"){
        return "You won!"
      } else if (computerChoice == "paper"){
        return "The computer won!"
      } else {
        return "No one won!"
      }
    } else if (userChoice == "paper"){

    } else if (userChoice == "scissors"){

    }  
  }



})