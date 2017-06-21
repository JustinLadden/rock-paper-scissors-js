document.addEventListener('DOMContentLoaded', function() {

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["rock", "paper", "scissors"];
  var computerChoice = options[Math.floor(Math.random() * options.length)];
  // Your prompt() goes below
  var userChoice = prompt("Choose rock, paper, or scissors")
  console.log("The user chooses: " + userChoice)




  console.log("The computer chooses: " + computerChoice);
  // Your declareWinner function goes below
function declareWinner(userChoice, computerChoice) {
  if (userChoice == "rock" && computerChoice == "rock") {
     alert ("It is a tie")
  }else if (userChoice == "rock" && computerChoice == "paper") {
     alert("The computer won")
  }else if (userChoice == "paper" && computerChoice == "paper") {
     alert("It is a tie")
  }else if (userChoice == "paper" && computerChoice == "rock") {
     alert("You won!")
  }else if (userChoice == "paper" && computerChoice == "scissors") {
     alert("The computer won")
  }else if (userChoice == "scissors" && computerChoice == "paper") {
     alert("You won")
  }else if (userChoice == "scissors" && computerChoice == "scissors") {
     alert("It's a tie")
  }else if (userChoice == "rock" && computerChoice == "scissors") {
     alert("You won")
  }else if (userChoice == "scissors" && computerChoice == "rock") {
     alert("The computer won")
  }
}
declareWinner(userChoice, computerChoice)










})