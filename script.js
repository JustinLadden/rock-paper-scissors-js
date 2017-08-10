document.addEventListener('DOMContentLoaded', function() {

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["rock", "paper", "scissors"];
  var computerChoice = options[Math.floor(Math.random() * options.length)];
  // Your prompt() goes below
var userChoice = prompt("rock,paper,scissors")
console.log("The user chooses: " + userChoice);
if (userChoice === "rock" && computerChoice === "scissors") {
  alert('you win');
  $(".winner").append("<h1> you win</h1>")
 } else if (userChoice === "paper" && computerChoice === "rock"){
   alert('you win')
   $(".winner").append("<h1> you win</h1>")
 } else if (userChoice === "scissors" && computerChoice === "paper"){
   alert('you win')
   $(".winner").append("<h1> you win</h1>")
 } else{
   alert('you lose')
   $(".winner").append("<h1> you lose</h1>")
 }



  console.log("The computer chooses: " + computerChoice);
  // Your declareWinner function goes below
function declareWinner(userChoice,computerChoice){
  if (userChoice === "rock" && computerChoice === "scissors") {
     alert('you win')
   }
}



})
