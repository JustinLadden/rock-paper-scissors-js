document.addEventListener('DOMContentLoaded', function() {

  $("#gameStart").click(function(){

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["rock", "paper", "scissors"];

  var computerChoice = options[Math.floor(Math.random() * options.length)];

  // Your prompt() goes below
  var userChoice = prompt("Choose rock, paper, or scissors");

  var userChoice = userChoice.toLowerCase()

  if(options.indexOf(userChoice) === -1){

    userChoice = "Invalid answer";

  }

  console.log("The user chooses: " + userChoice);

  console.log("The computer chooses: " + computerChoice);

  
  
  // Your declareWinner function goes below
  function declareWinner(userChoice, computerChoice){

    if(userChoice == "rock" && computerChoice == "scissors" || userChoice == "paper" && computerChoice == "rock" || userChoice == "scissors" && computerChoice == "paper"){

      return "You won!";

    }else if(userChoice == "rock" && computerChoice == "rock" || userChoice == "paper" && computerChoice == "paper" || userChoice == "scissors" && computerChoice == "scissors"){

      return "You tied";

    }else if(userChoice == "rock" && computerChoice == "paper" || userChoice == "paper" && computerChoice == "scissors" || userChoice == "scissors" && computerChoice == "rock"){

      return "You lost";

    }

  }
  
  var winner = declareWinner(userChoice, computerChoice)

  alert("The user(You) chose: " + userChoice + "\nThe computer chose: " + computerChoice + "\nThis means " + winner);
  
  $("#button").append("<Table border='1px'> <tr> <th>User Choice: " + userChoice + "</th> <th>Computer Choice: " + computerChoice + "</th> <th>" + winner + "</th> </tr> ");

  })
})