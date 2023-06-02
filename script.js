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
    // PLAYER VELOCITY
    this.velocity = {
      x: 0,
      y: 0,
    };
    //PLAYER WIDTH AND HEIGHT
    this.width = 100;
    this.height = 100;
    //PLAYER POSITION
    this.position = {
      x: game.canvas.width / 2 - this.width / 2,
      y: game.canvas.height - this.height - 100,
    };
  }
  //DRAW THE PLAYER
  draw() {
    game.ctx.fillStyle = "red";
    game.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.position.x += this.velocity.x;

    this.width = 100;
    this.height = 100;
  }
}

class Projectiles {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;

    this.radius = 3;
  }

  draw() {
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = "red";
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

const player = new Player();
const projectiles = [];
const keys = {
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
};

function animate() {
  requestAnimationFrame(animate);
  game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
  player.update();
  player.draw();

  projectiles.forEach((projectile) => {
    projectile.update();
  });

  if (
    keys.ArrowRight.pressed &&
    player.position.x + player.width <= game.canvas.width
  ) {
    player.velocity.x = 5;
  } else if (keys.ArrowLeft.pressed && player.position.x >= 0) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
  }
}

animate();

//KEYDOWN EVENT TO MOVE AND SHOOT

addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "ArrowRight":
      console.log("right");
      keys.ArrowRight.pressed = true;
      break;
    case "ArrowLeft":
      console.log("left");
      keys.ArrowLeft.pressed = true;
      break;
    case " ":
      console.log("space");
      break;
  }
});

addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "ArrowRight":
      console.log("right");
      keys.ArrowRight.pressed = false;
      break;
    case "ArrowLeft":
      console.log("left");
      keys.ArrowLeft.pressed = false;
      break;
    case " ":
      console.log("space");
      break;
  }
});
