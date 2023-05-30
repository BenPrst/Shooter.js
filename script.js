//Define an empty object to specify spec and behavior of the game
let game = {};

//Define canvas and context
game.canvas = document.querySelector("canvas");
game.ctx = game.canvas.getContext("2d");

//Define width and height
game.canvas.width = innerWidth;
game.canvas.height = innerHeight;

class Player {
  constructor() {
    this.position = {
      x: 200,
      y: 200,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 100;
    this.height = 100;
  }
}
