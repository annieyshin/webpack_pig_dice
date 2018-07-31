export function Player(name, roll, diceOne, diceTwo) {
  this.playerName = name;
  this.playerRoll = roll;
  this.diceOne = diceOne;
  this.diceTwo = diceTwo;
  this.playerOverallScore = 0;
}

Player.prototype.checkScore = function() {
  if (this.playerOverallScore >= 100) {
    return "YAY 100 points! You win!";
  }
};
