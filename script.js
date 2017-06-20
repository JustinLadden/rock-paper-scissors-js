document.addEventListener('DOMContentLoaded', function() {

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["rock", "paper", "scissors"];
  var computerChoice = options[Math.floor(Math.random() * options.length)];
  // Your prompt() goes below
    var userChoice = prompt("Please enter rock,paper, or scissors")
      console.log(userChoice, computerChoice)
        if (userChoice == "rock" && computerChoice == "paper") {
          alert("You Lost!");
        }
        else if (userChoice == "paper" && computerChoice == "scissors") {
          alert("You Lost!");
        }
        else if (userChoice == "scissors" && computerChoice == "rock") {
          alert("You Lost");
        }
        else if (userChoice == "rock" && computerChoice == "rock") {
          alert("You Tied!");
        }
        else if (userChoice == "paper" && computerChoice == "paper") {
          alert("You Tied!");
        }
        else if (userChoice == "scissors" && computerChoice == "scissors") {
          alert("You Tied!");
        }
        else if (userChoice == "rock" && computerChoice == "scissors") {
          alert("You Won!");
        }
        else if (userChoice == "paper" && computerChoice == "rock") {
          alert("You Won!");
        }
        else if (userChoice == "scissors" && computerChoice == "paper") {
          alert("You Won!");
        } else {
            alert("You didn't type rock, paper, or scissors");
        }
      console.log(userChoice, computerChoice) 
      


  console.log("The computer chooses: " + computerChoice);
  // Your declareWinner function goes below
  





})