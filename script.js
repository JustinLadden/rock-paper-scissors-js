document.addEventListener('DOMContentLoaded', function() {

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["rock", "paper", "scissors"];
  var computerChoice = options[Math.floor(Math.random() * options.length)];
  // Your prompt() goes below
var userChoice=prompt("rock, paper, scissors?")
console.log("The user chooses: " +userChoice)





  console.log("The computer chooses: " + computerChoice);
  // Your declareWinner function goes below
function declareWinner(userChoice, computerChoice){
  if (computerChoice=="rock"&&userChoice=="paper"){
    return "userChoice won"
  } else if(computerChoice=="rock"&&userChoice=="rock"){
    return "noone won"
  } else if (computerChoice=="rock"&&userChoice=="scissors") {
    return "computerChoice won"
  } else if (computerChoice=="scissors"&&userChoice=="rock") {
    return "userChoice won"
  } else if (computerChoice=="scissors"&&userChoice=="paper") {
    return "computerChoice won"
  } else if (computerChoice=="scissors"&&userChoice=="scissors") {
    return "noone won"
  } else if (computerChoice=="paper"&&userChoice=="rock") {
    return "computerChoice won"
  } else if (computerChoice=="paper"&&userChoice=="paper") {
    return "noone won"
  } else if (computerChoice=="paper"&&userChoice=="scissors") {
    return "userChoice won"
  } else {
      alert("What game are You playing?")
  }
}

alert(declareWinner(userChoice, computerChoice));


})