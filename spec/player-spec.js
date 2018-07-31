import { Player } from './../src/player.js';

describe('Player', function(){

  it('has a player name', function(){
    var player = new Player('Annie', 3, 1, 2);
    expect(player.playerName).toEqual('Annie');
  });

  it('checks to see if the player wins the game', function(){
    var player = new Player('Annie', 3, 1, 2);
    player.playerOverallScore += 100
    expect(player.checkScore()).toEqual("YAY 100 points! You win!")
  });

});
