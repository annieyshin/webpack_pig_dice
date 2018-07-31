import { Player } from './js/scripts';
import './css/styles.css'

$(document).ready(function() {
  var playerOne = new Player(name);
  var playerTwo = new Player(name);
  var computer = new Player();
  var playerOneVSComputer = new Player(name);

  $("#returnToHome").click(function(event) {
    event.preventDefault();
    $(".one-player-mode, .two-player-mode, #rules-button, #returnToHome").each(function(){
      $(this).fadeOut(0, function(){
       $('.homepage, .rules-container, .mode-choice, .p1p2names').fadeIn(600);
      });
    });
    // $(".homepage, .rules-container, .mode-choice, .p1p2names").show();

  });

  $("#onePlayerMode").click(function(event) {
    event.preventDefault();
    $(".rules-container, .two-player-mode, .mode-choice, .p1p2names").each(function(){
      $(this).fadeOut(0, function(){
        $(".one-player-mode, #rules-button, #returnToHome").fadeIn(600);
      })
    });
    var playerOneVSComputerName = $("#playerOne").val()
    $("#playerOneVSComputerName").text(playerOneVSComputerName);

  });

  $("#twoPlayerMode").click(function(event) {
    event.preventDefault();
    $(".rules-container, .one-player-mode, .mode-choice, .p1p2names").each(function(){
      $(this).fadeOut(0, function(){
        $(".two-player-mode, #rules-button, #returnToHome").fadeIn(600);
      })
    });
    var playerOneName = $("#playerOne").val()
    $("#playerOneName").text(playerOneName);
    var playerTwoName = $("#playerTwo").val()
    $("#playerTwoName").text(playerTwoName);

  });

  function computerTurn() {
    computer.rollDice();
    $("#computerRoll").text("You rolled a " + computer.diceOne + " and " + computer.diceTwo)
    if (computer.playerRoll == 2) {
      computer.playerOverallScore = 0;
      computer.playerTurnScore = 0;
    } else if (computer.diceOne === 1 || computer.diceTwo === 1) {
      computer.playerTurnScore = 0;
    } else {
      computer.rollDice();
      $("#computerRoll").append("<br>You rolled a " + computer.diceOne + " and " + computer.diceTwo)
    }
    computer.bankScore();
    $("#computerOverallTotal").text(computer.playerOverallScore);
    computer.playerTurnScore = 0;
    $("#computerTotal").text("Saved");
    computer.checkScore();
  }

// Player One Roll Button
  $("#playerOneButton").click(function(event) {
    event.preventDefault();
    playerOne.rollDice()
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
    playerOneVSComputer.rollDice()
    if (playerOneVSComputer.playerRoll == 2) {
      alert("SNAKE EYES. Total score back to 0. :(")
      computerTurn();
    } else if (playerOneVSComputer.diceOne === 1 || playerOneVSComputer.diceTwo === 1) {
      playerOneVSComputer.playerTurnScore = 0;
      computerTurn();
    }
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
    computerTurn()
  });
});
