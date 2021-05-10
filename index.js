
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDice = "dice" + randomNumber1 + ".png";

var diceSource1 = "images/" + randomDice; //images/dice1.png -images/dice6.png

var img1 = document.querySelectorAll("img")[0];

// let year = new Date().getFullYear();

img1.setAttribute("src", diceSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", diceSource2);

// document.querySelectorAll("p")[2].innerHTML = "&copy 2021" ;

// If player 1 Wins
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
// If player 2 Wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}



// console.log(year);
