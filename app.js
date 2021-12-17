/*
    the variable playerTurn is used to give turns to players one after the other.
*/
let playerTurn = 0;

/*
    the class Player is the blueprint for a new player.
    We need to give them their turn(index) and name.
*/

class Player {
  constructor(turn, name) {
    // we are checking if the parameters have the right types
    if (typeof turn !== "number" || typeof name !== "string") {
      console.error("Wrong parameters types. Expect a number and a string");
      return null;
    }
    this.name = name;
    this.turn = turn;
    this.health = 100;
    this.power = 5;
  }
  // takeTurn makes sure the player can play at this time before making a move
  takeTurn(cb) {
    if (playerTurn !== this.turn) {
      console.error(`Not your turn ${this.name}!!`);
    } else {
      cb();
      playerTurn = (playerTurn + 1) % 2;
    }
  }
  // attack an other player
  attack(enemy) {
    if (!enemy) {
      return `This enemy doesn't exist...`;
    }
    this.takeTurn(() => {
      enemy.health -= this.power;
      if (enemy.health <= 0) {
        return `GAME OVER ${enemy.name.toUpperCase()}!! Congrats ${this.name})`;
      }
    });
  }
  // regain health, then pass turn
  help() {
    this.takeTurn(() => {
      this.health = Math.min(100, this.health + 3);
    });
  }
}
/*
    the function giveScore is just returning the current score
*/
const giveScore = (playerA, playerB) => {
  if (!playerA || !playerB || !playerA.name || !playerB.name) {
    throw new Error("Undefined players");
  }
  if (playerA.name === playerB.name) {
    throw new Error("Those are the same players !");
  }
  return `${playerA.name}:${playerA.health} - ${playerB.name}:${playerB.health}`;
};
/*
    create 2 new players
*/
const player1 = new Player(0, "Daniel");
const player2 = new Player(1, "Jonas");

/*
    Export the players and function to be tested in spec/app.spec.js
*/
if (typeof module !== "undefined") {
  module.exports = { player1, player2, giveScore };
}
