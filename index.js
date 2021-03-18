function randomDiceImage() {

  var diceImages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

  var randomNumber1 = Math.floor(Math.random() * (diceImages.length));
  var randomNumber2 = Math.floor(Math.random() * (diceImages.length));

  document.getElementsByClassName("img1")[0].setAttribute("src", diceImages[randomNumber1]);
  document.getElementsByClassName("img2")[0].setAttribute("src", diceImages[randomNumber2]);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

}

randomDiceImage();
