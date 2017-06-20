document.addEventListener('DOMContentLoaded', function() {

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["rock", "paper", "scissors"];
  var computerChoice = options[Math.floor(Math.random() * options.length)];
  // Your prompt() goes below
  var userChoice = prompt("rock, paper, or scissors")
  console.log("the user chooses: " + userChoice)






  console.log("The computer chooses: " + computerChoice);
  // Your declareWinner function goes below
  function declareWinner(userChoice, computerChoice){
    if(userChoice == "rock" && computerChoice == "paper"){
      return "The Computer Won!"
    }else if(userChoice == "rock" && computerChoice == "scissors"){
      return "You Won!"
    }else if(userChoice == "rock" && computerChoice == "rock"){
      return "Tie!"
    }else if(userChoice == "paper" && computerChoice == "paper"){
      return "Tie!"
    }else if(userChoice == "paper" && computerChoice == "scissors"){
      return "The Computer Won!"
    } else if(userChoice == "paper" && computerChoice == "rock"){
      return "You Won!"
    }else if(userChoice == "scissors" && computerChoice == "paper"){
      return "You Won!"
    }else if(userChoice == "scissors" && computerChoice == "scissors"){
      return "Tie!"
    }else if(userChoice == "scissors" && computerChoice == "rock"){
      return "The Computer Won!"
    }else if(userChoice != "rock" || "scissors" || "paper")
      return "You had a typo...."

    
  }
  console.log(declareWinner(userChoice, computerChoice));






})