document.addEventListener('DOMContentLoaded', function() {

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["Rock", "Paper", "Scissors"];

  var computerChoice = options[Math.floor(Math.random() * options.length)];

  // Your prompt() goes below
  var userChoice = prompt("Choose Rock, Paper, or Scissors");

  if(options.indexOf(userChoice) === -1){

    userChoice = "Invalid answer(capitalize first or actually put something listed)";

  }

  console.log("The user chooses: " + userChoice);

  console.log("The computer chooses: " + computerChoice);

  // Your declareWinner function goes below
  function declareWinner(userChoice, computerChoice){

    if(userChoice == "Rock" && computerChoice == "Scissors"){

      return "You won!";

    }else if(userChoice == "Rock" && computerChoice == "Rock"){

      return "You tied";

    }else if(userChoice == "Rock" && computerChoice == "Paper"){

      return "You lost";

    }else if(userChoice == "Paper" && computerChoice == "Rock"){

      return "You won!";

    }else if(userChoice == "Paper" && computerChoice == "Paper"){

      return "You tied";

    }else if(userChoice == "Paper" && computerChoice == "Scissors"){

      return "You lost";

    }else if(userChoice == "Scissors" && computerChoice == "Paper"){

      return "You won!";

    }else if(userChoice == "Scissors" && computerChoice == "Scissors"){

      return "You tied!";

    }else if(userChoice == "Scissors" && computerChoice == "Rock"){

      return "You lost!";

    }else{

      return "You lost";

    }

  }

  alert("The user(You) chose: " + userChoice + "\nThe computer chose: " + computerChoice + "\nThis means " + declareWinner(userChoice, computerChoice));


})