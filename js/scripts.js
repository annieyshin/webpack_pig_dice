function Player(name, roll, diceOne, diceTwo, computerRoll, computerScore) {
  this.playerName = name;
  this.playerTurnScore = 0;
  this.playerOverallScore = 0;
  this.playerRoll = roll
  this.diceOne = diceOne;
  this.diceTwo = diceTwo;
  this.computerRoll = computerRoll
  this.computerScore = computerScore;
  this.computerTurnScore = 0;
  this.computerOverallScore
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
  var computer = new Player();
  var playerOneVSComputer = new Player(name);

// Player One Roll Button
  $("#playerOneButton").click(function(event) {
    event.preventDefault();
    playerOne.rollDice()
    var playerOneName = $("#playerOne").val()
    $("#playerOneName").text(playerOneName);
    $("#playerOneRoll").text("You rolled a " + playerOne.diceOne + " and " + playerOne.diceTwo);
    $("#playerOneTotal").text(playerOne.playerTurnScore);
    $("#playerOneOverallTotal").text(playerOne.playerOverallScore);
  });

// Player One Hold Button
  $("#playerOneHold").click(function(event) {
    event.preventDefault();
    playerOne.bankScore();
    $("#playerOneOverallTotal").text(playerOne.playerOverallScore);
    playerOne.playerTurnScore = 0;
    $("#playerOneTotal").text("Saved");
    playerOne.checkScore();
  });

// Player Two Roll Button
  $("#playerTwoButton").click(function(event) {
    event.preventDefault();
    playerTwo.rollDice()
    var playerTwoName = $("#playerTwo").val()
    $("#playerTwoName").text(playerTwoName);
    $("#playerTwoRoll").text("You rolled a " + playerTwo.diceOne + " and " + playerTwo.diceTwo)
    $("#playerTwoTotal").text(playerTwo.playerTurnScore);
    $("#playerTwoOverallTotal").text(playerTwo.playerOverallScore);
  });

// Player Two Hold Button
  $("#playerTwoHold").click(function(event) {
    event.preventDefault();
    playerTwo.bankScore();
    $("#playerTwoOverallTotal").text(playerTwo.playerOverallScore);
    playerTwo.playerTurnScore = 0;
    $("#playerTwoTotal").text("Saved");
    playerTwo.checkScore();
  });

//Player One vs. Computer Roll Button
  $("#playerOneVSComputerButton").click(function(event) {
    event.preventDefault();
    playerOneVSComputer.rollDiceVSComputer()
    var playerOneVSComputerName = $("#playerOneVSComputer").val()
    $("#playerOneVSComputerName").text(playerOneVSComputerName);
    $("#playerOneVSComputerRoll").text("You rolled a " + playerOneVSComputer.diceOne + " and " + playerOneVSComputer.diceTwo);
    $("#playerOneVSComputerTotal").text(playerOneVSComputer.playerTurnScore);
  });

//Player One vs. Computer Hold Button
  $("#playerOneVSComputerHold").click(function(event) {
    event.preventDefault();
    playerOneVSComputer.bankScore();
    $("#playerOneVSComputerOverallTotal").text(playerOneVSComputer.playerOverallScore);
    playerOneVSComputer.playerTurnScore = 0;
    $("#playerOneVSComputerTotal").text("Saved");
    playerOneVSComputer.checkScore();
    computer.rollDice();
    $("#computerRoll").text("You rolled a " + computer.diceOne + " and " + computer.diceTwo)
    computer.rollDice();
    $("#computerRoll").append("<br>You rolled a " + computer.diceOne + " and " + computer.diceTwo)
    computer.bankScore();
    $("#computerOverallTotal").text(computer.playerOverallScore);
    computer.playerTurnScore = 0;
    $("#computerTotal").text("Saved");
    computer.checkScore();
  });
});
