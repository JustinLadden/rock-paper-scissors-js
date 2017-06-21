document.addEventListener('DOMContentLoaded', function() {

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["rock", "paper", "scissors"];
  var computerChoice = options[Math.floor(Math.random() * options.length)];
  // Your prompt() goes below
var userChoice = prompt("choose rock, paper, or scissors")
console.log("the user chooses: " + userChoice)

function declareWinner (computerChoice, userChoice){
  if (computerChoice == "rock" && userChoice == "scissors" ){
    alert("The Computer Won!")
  }
  else if (computerChoice == "rock" && userChoice == "paper"){
    alert("The User Won!")
  }
  else if (computerChoice == "rock" && userChoice == "rock"){
    alert ("It's A Tie!")
  }
  else if (computerChoice == "paper" && userChoice == "scissors"){
    alert ("The User Won!")
  }
   else if (computerChoice == "paper" && userChoice == "paper"){
    alert("Its A Tie!")
  }
  else if (computerChoice == "paper" && userChoice == "rock"){
    alert("The Computer Won!")
  }
 else if (computerChoice == "scissors" && userChoice == "scissors"){
    alert("Its A Tie!")
  }
 else if (computerChoice == "scissors" && userChoice == "paper"){
    alert("The Computer Won!")
  }
 else if (computerChoice == "scissors" && userChoice == "rock"){
    alert("The User Won!")
  }
    
}

declareWinner(computerChoice, userChoice)





  console.log("The computer chooses: " + computerChoice);
  // Your declareWinner function goes below








})