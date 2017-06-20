document.addEventListener('DOMContentLoaded', function() {

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["rock", "paper", "scissors"];
  var computerChoice = options[Math.floor(Math.random() * options.length)];
  // Your prompt() goes below
  var userChoice = prompt("Choose one of the following: rock, paper, or scissors!");
  alert("You chose " + userChoice + " and the computer chose " + computerChoice);
  console.log("The user chooses: " + userChoice);
  function declareWinner(userChoice, computerChoice){
    if(userChoice == "rock" && computerChoice == "paper"){
      return "You lose!"
    } else if(userChoice == "paper" && computerChoice == "rock"){
      return "You win!"
    } else if(userChoice == "scissors" && computerChoice == "rock"){
      return "You lose!"
    } else if(userChoice == "rock" && computerChoice == "scissors"){
      return "You win!"
    } else if(userChoice == "rock" && computerChoice == "paper"){
      return "You lose!"
    } else if(userChoice == "scissors" && computerChoice == "paper"){
      return "You win!"
    } else if(userChoice == "paper" && computerChoice == "scissors"){
      return "You lose!"
    } else if(userChoice == "rock" && computerChoice == "rock"){
      return "Its a tie!"
    } else if(userChoice == "scissors" && computerChoice == "scissors"){
      return "Its a tie!"
    } else if(userChoice == "paper" && computerChoice == "paper"){
      return "Its a tie!"
    }
  }
  alert(declareWinner(userChoice, computerChoice));




  console.log("The computer chooses: " + computerChoice);
  // Your declareWinner function goes below








})