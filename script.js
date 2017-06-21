document.addEventListener('DOMContentLoaded', function() {

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var pick = Math.floor(Math.random() * 3) + 1  
  var userpick = prompt("rock paper or scissors")
  if(pick == 3){
    var comp = "rock" 
  }else if(pick == 2){
    var comp = "scissors"
  }else{
    var comp = "paper"
  }
  if (userpick == "rock" && comp == "scissors"){
    alert("you win comp picked " + comp + " you picked " + userpick)
  }else if (userpick == "rock" && comp == "paper"){
    alert("you lose comp picked " + comp + " you picked " + userpick)
  }else if (userpick == "scissors" && comp == "paper"){
    alert("you win comp picked " + comp + " you picked " + userpick)
  }else if(userpick == "scissors" && comp == "rock"){
    alert("you lose comp picked " + comp + " you picked " + userpick)
  }else if (userpick == "paper" && comp == "scissors"){
    alert("you lose comp picked " + comp + " you picked " + userpick)
  }else if(userpick == "paper" && comp == "rock"){
    alert("you win  comp picked " + comp + " you picked " + userpick)
  }else{
    alert("tie. comp picked " + comp + " you picked " + userpick)
  }








})