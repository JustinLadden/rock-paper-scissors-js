document.addEventListener('DOMContentLoaded', function() {

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["rock", "paper", "scissors"];
  // Your prompt() goes below
// var userChoice = prompt("rock,paper,scissors")

//Reassign userChoice using jquery selector!!!!!!!!!!!!!!!!!

$("#rockImage").click(function(){
  return declareWinner("rock")
})
$("#paperImage").click(function(){
  return declareWinner("paper")
})
$("#scissorsImage").click(function(){
  return declareWinner("scissors")
})

function declareWinner(userChoice){
console.log("The user chooses: " + userChoice);
var computerChoice = options[Math.floor(Math.random() * options.length)];
console.log("The computer chooses: " + computerChoice);
  if (userChoice === "rock" && computerChoice === "scissors") {
    $(".winner").append('<img src="resources/winner.gif" alt="">')
    $(".winner").append("<h1> you win</h1>")
   } else if (userChoice === "paper" && computerChoice === "rock"){
     $(".winner").append('<img src="resources/winner.gif" alt="">')
     $(".winner").append("<h1> you win</h1>")
   } else if (userChoice === "scissors" && computerChoice === "paper"){
     $(".winner").append('<img src="resources/winner.gif" alt="">')
     $(".winner").append("<h1> you win</h1>")
   } else if (userChoice === "paper" && computerChoice === "paper"){
     $(".winner").append('<img src="resources/tie.gif" alt="">')
     $(".winner").append("<h1> you tied</h1>")
   } else if (userChoice === "scissors" && computerChoice === "scissors"){
     $(".winner").append('<img src="resources/tie.gif" alt="">')
     $(".winner").append("<h1> you tied</h1>")
   } else if (userChoice === "rock" && computerChoice === "rock"){
     $(".winner").append('<img src="resources/tie.gif" alt="">')
     $(".winner").append("<h1> you tied</h1>")

   } else{
     $(".winner").append('<img src="resources/winner.gif" alt="">')
     $(".winner").append("<h1> you lose</h1>")
   }
 }



  // // Your declareWinner function goes below
  // if (userChoice === "rock" && computerChoice === "scissors") {
  //    alert('you win')
  //  }



})
