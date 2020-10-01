var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomNumber2 = Math.floor(Math.random()*6) +1;
var source1 = "images/dice" + randomNumber1 + ".png";
var source2 = "images/dice" + randomNumber2 + ".png";

document.querySelector("#player1Dice").setAttribute("src",source1);
document.querySelector("#player2Dice").setAttribute("src",source2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
