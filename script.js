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
    //Nested if statements
    /* if (userChoice == "rock"){
      if (computerChoice == "scissors"){
        return "You won!"
      } else if (computerChoice == "paper"){
        return "The computer won!"
      } else {
        return "No one won!"
      }
    }else if (userChoice == "paper"){
      if (computerChoice == "rock"){
        return "You won!"
      } else if (computerChoice == "scissors"){
        return "The computer won!"
      } else if (computerChoice == "paper"){
        return "No one won!"
      }
    }else if (userChoice == "scissors"){
      if (computerChoice == "paper"){
        return "You won!"
      } else if (computerChoice == "rock"){
        return "The computer won!"
      } else if (computerChoice == "scissors"){
        return "No one won!"
      }
    }else {
      return "You didn't follow the rules!"
    }  */
    //Nested switch statements
    switch(userChoice){
      case "rock":
      switch(computerChoice){
        case "rock":
          return "No one won!"
          break;
        case "scissors":
          return "You won!"
          break;
        case "paper":
          return "The computer won!"
          break;
      }
      break;
      case "paper":
      switch(computerChoice){
        case "paper":
          return "No one won!"
          break;
        case "rock":
          return "You won!"
          break;
        case "scissors":
          return "The computer won!"
          break;
      }
      break;
      case "scissors":
      switch(computerChoice){
        case "scissors":
          return "No one won!"
          break;
        case "paper":
          return "You won!"
          break;
        case "rock":
          return "The computer won!"
          break;
      }
      break;
      default: 
        return "You didn't choose rock, paper, or scissors! Please try again."
    }
  }

  console.log(declareWinner(userChoice, computerChoice))

})