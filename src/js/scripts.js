export function Player(name, roll, diceOne, diceTwo) {
  this.playerName = name;
  this.playerTurnScore = 0;
  this.playerOverallScore = 0;
  this.playerRoll = roll;
  this.diceOne = diceOne;
  this.diceTwo = diceTwo;
}

Player.prototype.checkScore = function() {
  if (this.playerOverallScore >= 100)
    alert("YAY 100 points! You win!");
};

Player.prototype.bankScore = function() {
  this.playerOverallScore += this.playerTurnScore;
};

Player.prototype.rollDice = function() {
  this.diceOne = Math.floor((Math.random() * 6) + 1);
  this.diceTwo = Math.floor((Math.random() * 6) + 1);
  this.playerRoll = this.diceOne + this.diceTwo;
  if (this.playerRoll == 2) {
    this.playerOverallScore = 0;
    this.playerTurnScore = 0;
    alert("SNAKE EYES. Total score back to 0. :(");
  } else if (this.diceOne === 1 || this.diceTwo === 1) {
    this.playerTurnScore = 0;
    alert("Turn over. :( You rolled a 1.");
  } else if (this.diceOne === this.diceTwo) {
    this.playerTurnScore += (this.playerRoll += this.playerRoll);
    alert(this.playerName + "DOUBLE POINTS! You rolled a matching pair.");
  } else {
    this.playerTurnScore += this.playerRoll;
  }
};
