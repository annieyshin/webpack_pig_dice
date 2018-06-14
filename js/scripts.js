function Player(name, roll, diceOne, diceTwo) {
  this.playerName = name;
  this.playerTurnScore = 0;
  this.playerOverallScore = 0;
  this.playerRoll = roll
  this.diceOne = diceOne;
  this.diceTwo = diceTwo;
}

Player.prototype.checkScore = function() {
  if (this.playerOverallScore >= 100)
  alert("YAY 100 points! You win!");
}

Player.prototype.bankScore = function() {
  this.playerOverallScore += this.playerTurnScore;
}

Player.prototype.rollDice = function() {
  this.diceOne = Math.floor((Math.random() * 6) + 1)
  this.diceTwo = Math.floor((Math.random() * 6) + 1)
  console.log(this.diceOne);
  console.log(this.diceTwo);
  this.playerRoll = this.diceOne + this.diceTwo
  if (this.playerRoll == 2) {
    this.playerOverallScore = 0;
    this.playerTurnScore = 0;
    alert("SNAKE EYES. Total score back to 0. :(")
  } else if (this.diceOne === 1 || this.diceTwo === 1) {
    this.playerTurnScore = 0;
    alert("Turn over. :( You rolled a 1.")
  } else if (this.diceOne === this.diceTwo) {
    this.playerTurnScore += (this.playerRoll += this.playerRoll);
    alert("DOUBLE POINTS! You rolled a matching pair.")
  } else {
    this.playerTurnScore += this.playerRoll;
  }
}

$(document).ready(function() {
  var playerOne = new Player(name);
  var playerTwo = new Player(name);
  $("#playerOneButton").click(function(event) {
    event.preventDefault();
    playerOne.rollDice()
    var playerOneName = $("#playerOne").val()
    $("#playerOneName").text(playerOneName);
    $("#playerOneRoll").text("You rolled a " + playerOne.diceOne + " and " + playerOne.diceTwo);
    $("#playerOneTotal").text(playerOne.playerTurnScore);
  });

  $("#playerOneHold").click(function(event) {
    event.preventDefault();
    playerOne.bankScore();
    $("#playerOneOverallTotal").text(playerOne.playerOverallScore);
    playerOne.playerTurnScore = 0;
    $("#playerOneTotal").text("Saved");
    playerOne.checkScore();
  });

  $("#playerTwoButton").click(function(event) {
    event.preventDefault();
    playerTwo.rollDice()
    var playerTwoName = $("#playerTwo").val()
    $("#playerTwoName").text(playerTwoName);
    $("#playerTwoRoll").text("You rolled a " + playerTwo.diceOne + " and " + playerTwo.diceTwo)
    $("#playerTwoTotal").text(playerTwo.playerTurnScore);
  });

  $("#playerTwoHold").click(function(event) {
    event.preventDefault();
    playerTwo.bankScore();
    $("#playerTwoOverallTotal").text(playerTwo.playerOverallScore);
    playerTwo.playerTurnScore = 0;
    $("#playerTwoTotal").text("Saved");
    playerTwo.checkScore();
  });
});
