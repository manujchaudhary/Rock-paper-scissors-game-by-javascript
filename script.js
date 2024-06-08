var userChoice = "";
var compChoice = "";
var reset = "";
let userScore = 1;
let compScore = 1;

function addScore() {
  document.querySelector("#userScore").textContent = userScore++;
}
function addcompScore() {
  document.querySelector("#compScore").textContent = compScore++;
}
var winner = (userWin) => {
  if (userWin) {
    document.querySelector(".message").textContent = `You win this move`;
  }
  else {
    document.querySelector(".message").textContent = `You lose this move `
  }
}
function drawGame() {
  document.querySelector(".message").textContent = "Move is draw"
}


function compc() {
  var arr = ["rock", "paper", "scissors"]
  var ch = Math.floor(Math.random() * 3)
  return arr[ch]
}
document.querySelector(".choices").addEventListener("click", function (dets) {
  var userChoice = (dets.target.id)
  console.log(" Your choice is :", userChoice)
  var compChoice = compc()
  console.log("Comp choice is :", compChoice)
  if (userChoice === compChoice) {
    drawGame();
  }
  else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "scissors" ? true : false
    }
    else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false
    }
    else if (userChoice === "scissors") {
      userWin = compChoice === "paper" ? true : false
    }
    winner(userWin)
    userWin ? addScore() : addcompScore();


  }

  if (userScore >= 4) {
    document.getElementById("button").textContent = "Congratulations, You Win! Refresh to play again  ";
    button.style.backgroundColor = "rgb(70, 68, 68)";
    button.style.color = "white";
    document.querySelector(".choices").innerHTML = "";
    
  }
  else if (compScore >= 4) {
    document.getElementById("button").textContent = "You lose ! Refresh to play again ";
    button.style.backgroundColor = "rgb(70, 68, 68)";
    button.style.color = "white";
    document.querySelector(".choices").innerHTML = "";
  }
})