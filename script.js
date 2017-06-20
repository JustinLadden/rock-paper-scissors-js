document.addEventListener('DOMContentLoaded', function() {
  var options = ["rock", "paper", "scissors"];
  var computerChoice = options[Math.floor(Math.random() * options.length)];
  var user =prompt ("rock, paper, or scissors")
    console.log("The computer chooses: " + computerChoice);
  if (user == computerChoice) {
    alert("tie")
  }else if(user=="scissors"&& computerChoice=="paper"||user=="paper"&& computerChoice=="rock"||user=="rock"&& computerChoice=="scissors"){
    alert("You win")
  }else if(user=="scissors"&& computerChoice=="rock" || user=="rock"&& computerChoice=="paper" || user=="paper"&& computerChoice=="scissors"){
    alert("computer wins")
  } else {
    alert ("invalid entry")
  }
})