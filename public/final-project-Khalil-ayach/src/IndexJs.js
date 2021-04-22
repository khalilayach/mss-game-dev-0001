var Player;
var ctx;
var Update;
var controller;
var Object1;

ctx = document.querySelector("canvas").getContext("2d");

ctx.width = 360;
ctx.height;

Player = {
  width: 32,
  height: 32,
  x: 160,
  y: 70,
  PlayerSpeed: 0.6,

  x_velocity: 0,
  y_velocity: 0
};

Object1 = {
  width: 32,
  height: 32,
  x: 140,
  y: 0,
  ObjectSpeed: -0.12,

  x_velocity: 0
};

controller = {
  left: false,
  right: false,
  up: false,
  down: false,

  keyLister: function (event) {
    var key_state = event.type == "keydown" ? true : false;

    switch (event.keyCode) {
      case 37:
        controller.left = key_state;
        break;
      case 39:
        controller.right = key_state;
        break;
      case 38:
        controller.up = key_state;
        break;

      case 40:
        controller.down = key_state;
        break;
    }
  }
};

Update = function () {
  if (controller.down) {
    Player.y_velocity += Player.PlayerSpeed;
  }

  if (controller.up) {
    Player.y_velocity -= Player.PlayerSpeed;
  }

  if (controller.left) {
    Player.x_velocity -= Player.PlayerSpeed;
  }

  if (controller.right) {
    Player.x_velocity += Player.PlayerSpeed;
  }

  Object1.x_velocity += Object1.ObjectSpeed;

  Player.y += Player.y_velocity;
  Player.x += Player.x_velocity;
  Player.x_velocity *= 0.9;
  Player.y_velocity *= 0.9;
  Object1.x += Object1.x_velocity;
  Object1.x_velocity *= 0.9;

  ctx.clearRect(0, 0, 360, 360);

  ctx.fillStyle = "#C0C0C0";
  ctx.fillRect(0, 0, 360, 180);

  ctx.fillStyle = "#ff0000";
  ctx.fillRect(Player.x, Player.y, Player.width, Player.height);

  ctx.fillStyle = "#000000";
  ctx.fillRect(Object1.x, Object1.y, Object1.width, Object1.height);

  if (Player.x < 0) {
    Player.x = Player.x_velocity;
  }

  if (Player.y < 0) {
    Player.y = Player.y_velocity;
  }

  if (Player.y > 160) {
    Player.y -= Player.y_velocity * 1.114;
  }

  if (Player.x > 340) {
    Player.x -= Player.x_velocity * 1.114;
  }

  //Object collistion

  if (Object1.x < 0) {
    Object1.ObjectSpeed = 0.12;
  }

  if(Object1.x > 340){

    Object1.ObjectSpeed = -0.12;

  }
  
  window.requestAnimationFrame(Update)
  
};
Update();


window.addEventListener("keydown", controller.keyLister);
window.addEventListener("keyup", controller.keyLister);

//create boundaries
