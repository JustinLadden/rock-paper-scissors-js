document.addEventListener('DOMContentLoaded', function() {

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["rock", "paper", "scissors"];
  var computerChoice = options[Math.floor(Math.random() * options.length)];
  // Your prompt() goes below
var userChoice = prompt("rock paper or scissors")

alert(declareWinner(userChoice, computerChoice));



  console.log("The computer chooses: " + computerChoice);
  // Your declareWinner function goes below

function declareWinner() {

if (userChoice =="rock" && computerChoice =='rock') {

return "tie"

} else if (userChoice =="paper" && computerChoice =='paper') {

return "tie"

} else if (userChoice =="scissors" && computerChoice =='scissors') {

return "tie"

} else if (userChoice =="rock" && computerChoice =='paper') {
return "You lost..."

} else if (userChoice =="rock" && computerChoice =='scissors') {
return "You won!"

} else if (userChoice =="paper" && computerChoice =='scissors') {
return "You lost..."

} else if (userChoice =="paper" && computerChoice =='rock') {
return "You won!"

} else if (userChoice =="scissors" && computerChoice =='paper') {
return "You won!"

} else if (userChoice =="scissors" && computerChoice =='rock') {
return "You lost..."

} else {

return "you messed up the game"
}

}






})