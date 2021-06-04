        var rect2 = { x: 0, y: 0, width: 360, height: 20 };
        var rect1 = { x: 0, y: 160, width: 360, height: 20 };
        var rect3 = { x: 340, y: 0, width: 20, height: 180 };
        var rect4 = { x: 0, y: 0, width: 20, height: 180 };
        var Exit = { x: 100, y: 120, width: 20, height: 20 };
        var Player;
        var ctx;
        var Update;
        var controller;
        var invisableLineRight;
        var invisableLineLeft;
        var invisableLineUp;
        var invisableLineDown;

        ctx = document.querySelector("canvas").getContext("2d");

        ctx.width = 360;
        ctx.height;

        invisableLineRight = {
          width: 4,
          height: 32,
          Collision: 0
        };

        invisableLineLeft = {
          width: 6,
          height: 32,
          Collision: 0
        };

        invisableLineUp = {
          width: 32,
          height: 4,
          Collision: 0
        };

        invisableLineDown = {
          width: 32,
          height: 4,
          Collision: 0
        };

        Player = {
          width: 32,
          height: 32,
          x: 160,
          y: 70,
          PlayerSpeed: 0.6,

          x_velocity: 0,
          y_velocity: 0
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
          ///rightCol///

          if (
            Player.x + 33 < rect2.x + rect2.width &&
            Player.x + 33 + invisableLineRight.width > rect2.x &&
            Player.y < rect2.y + rect2.height &&
            Player.y + invisableLineRight.height > rect2.y
          ) {
            invisableLineRight.Collision = 1;
            Player.x_velocity = 0;
          } else {
            invisableLineRight.Collision = 0;
          }

          //LeftCol///

          if (
            Player.x - 4 < rect2.x + rect2.width &&
            Player.x - 4 + invisableLineLeft.width > rect2.x &&
            Player.y < rect2.y + rect2.height &&
            Player.y + invisableLineLeft.height > rect2.y
          ) {
            invisableLineLeft.Collision = 1;
            Player.x_velocity = 0;
          } else {
            invisableLineLeft.Collision = 0;
          }

          //Up Col//

          if (
            Player.x < rect2.x + rect2.width &&
            Player.x + invisableLineUp.width > rect2.x &&
            Player.y - 3 < rect2.y + rect2.height &&
            Player.y - 3 + invisableLineUp.height > rect2.y
          ) {
            invisableLineUp.Collision = 1;
            Player.y_velocity = 0;
          } else {
            invisableLineUp.Collision = 0;
          }

          //Down
          if (
            Player.x < rect2.x + rect2.width &&
            Player.x + invisableLineDown.width > rect2.x &&
            Player.y + 33 < rect2.y + rect2.height &&
            Player.y + 33 + invisableLineDown.height > rect2.y
          ) {
            invisableLineDown.Collision = 1;
            Player.y_velocity = 0;
          } else {
            invisableLineDown.Collision = 0;
          }

          //right

          if (
            Player.x + 33 < rect1.x + rect1.width &&
            Player.x + 33 + invisableLineRight.width > rect1.x &&
            Player.y < rect1.y + rect1.height &&
            Player.y + invisableLineRight.height > rect1.y
          ) {
            invisableLineRight.Collision = 1;
            Player.x_velocity = 0;
          }

          //LeftCol///

          if (
            Player.x - 4 < rect1.x + rect1.width &&
            Player.x - 4 + invisableLineLeft.width > rect1.x &&
            Player.y < rect1.y + rect1.height &&
            Player.y + invisableLineLeft.height > rect1.y
          ) {
            invisableLineLeft.Collision = 1;
            Player.x_velocity = 0;
          }

          //Up Col//

          if (
            Player.x < rect1.x + rect1.width &&
            Player.x + invisableLineUp.width > rect1.x &&
            Player.y - 3 < rect1.y + rect1.height &&
            Player.y - 3 + invisableLineUp.height > rect1.y
          ) {
            invisableLineUp.Collision = 1;
            Player.y_velocity = 0;
          }

          //Down
          if (
            Player.x < rect1.x + rect1.width &&
            Player.x + invisableLineDown.width > rect1.x &&
            Player.y + 33 < rect1.y + rect1.height &&
            Player.y + 33 + invisableLineDown.height > rect1.y
          ) {
            invisableLineDown.Collision = 1;
            Player.y_velocity = 0;
          }

          //right

          if (
            Player.x + 33 < rect3.x + rect3.width &&
            Player.x + 33 + invisableLineRight.width > rect3.x &&
            Player.y < rect3.y + rect3.height &&
            Player.y + invisableLineRight.height > rect3.y
          ) {
            invisableLineRight.Collision = 1;
            Player.x_velocity = 0;
          }

          //LeftCol///

          if (
            Player.x - 4 < rect3.x + rect3.width &&
            Player.x - 4 + invisableLineLeft.width > rect3.x &&
            Player.y < rect3.y + rect3.height &&
            Player.y + invisableLineLeft.height > rect3.y
          ) {
            invisableLineLeft.Collision = 1;
            Player.x_velocity = 0;
          }

          //Up Col//

          if (
            Player.x < rect3.x + rect3.width &&
            Player.x + invisableLineUp.width > rect3.x &&
            Player.y - 3 < rect3.y + rect3.height &&
            Player.y - 3 + invisableLineUp.height > rect3.y
          ) {
            invisableLineUp.Collision = 1;
            Player.y_velocity = 0;
          }

          //Down
          if (
            Player.x < rect3.x + rect3.width &&
            Player.x + invisableLineDown.width > rect3.x &&
            Player.y + 33 < rect3.y + rect3.height &&
            Player.y + 33 + invisableLineDown.height > rect3.y
          ) {
            invisableLineDown.Collision = 1;
            Player.y_velocity = 0;
          }

          //right

          if (
            Player.x + 33 < rect4.x + rect4.width &&
            Player.x + 33 + invisableLineRight.width > rect4.x &&
            Player.y < rect4.y + rect4.height &&
            Player.y + invisableLineRight.height > rect4.y
          ) {
            invisableLineRight.Collision = 1;
            Player.x_velocity = 0;
          }

          //LeftCol///

          if (
            Player.x - 4 < rect4.x + rect4.width &&
            Player.x - 4 + invisableLineLeft.width > rect4.x &&
            Player.y < rect4.y + rect4.height &&
            Player.y + invisableLineLeft.height > rect4.y
          ) {
            invisableLineLeft.Collision = 1;
            Player.x_velocity = 0;
          }

          //Up Col//

          if (
            Player.x < rect4.x + rect4.width &&
            Player.x + invisableLineUp.width > rect4.x &&
            Player.y - 3 < rect4.y + rect4.height &&
            Player.y - 3 + invisableLineUp.height > rect4.y
          ) {
            invisableLineUp.Collision = 1;
            Player.y_velocity = 0;
          }

          //Down
          if (
            Player.x < rect4.x + rect4.width &&
            Player.x + invisableLineDown.width > rect4.x &&
            Player.y + 33 < rect4.y + rect4.height &&
            Player.y + 33 + invisableLineDown.height > rect4.y
          ) {
            invisableLineDown.Collision = 1;
            Player.y_velocity = 0;
          }

          //Exit

          //right

          if (
            Player.x + 33 < Exit.x + Exit.width &&
            Player.x + 33 + invisableLineRight.width > Exit.x &&
            Player.y < Exit.y + Exit.height &&
            Player.y + invisableLineRight.height > Exit.y
          ) {
            location = "https://www.google.ca/?safe=active&ssui=on";
          }

          //LeftCol///

          if (
            Player.x - 4 < Exit.x + Exit.width &&
            Player.x - 4 + invisableLineLeft.width > Exit.x &&
            Player.y < Exit.y + Exit.height &&
            Player.y + invisableLineLeft.height > Exit.y
          ) {
            location = "https://www.google.ca/?safe=active&ssui=on";
          }

          //Up Col//

          if (
            Player.x < Exit.x + Exit.width &&
            Player.x + invisableLineUp.width > Exit.x &&
            Player.y - 3 < Exit.y + Exit.height &&
            Player.y - 3 + invisableLineUp.height > Exit.y
          ) {
            location = "https://www.google.ca/?safe=active&ssui=on";
          }

          //Down
          if (
            Player.x < Exit.x + Exit.width &&
            Player.x + invisableLineDown.width > Exit.x &&
            Player.y + 33 < Exit.y + Exit.height &&
            Player.y + 33 + invisableLineDown.height > Exit.y
          ) {
            location = "https://www.google.ca/?safe=active&ssui=on";
          }

          //EveryThing Else

          if (controller.down && invisableLineDown.Collision == 0) {
            Player.y_velocity += Player.PlayerSpeed;
          }

          if (controller.up && invisableLineUp.Collision == 0) {
            Player.y_velocity -= Player.PlayerSpeed;
          }

          if (controller.left && invisableLineLeft.Collision == 0) {
            Player.x_velocity -= Player.PlayerSpeed;
          }

          if (controller.right && invisableLineRight.Collision == 0) {
            Player.x_velocity += Player.PlayerSpeed;
          }

          Player.y += Player.y_velocity;
          Player.x += Player.x_velocity;
          Player.x_velocity *= 0.9;
          Player.y_velocity *= 0.9;

          ctx.clearRect(0, 0, 360, 360);

          ctx.fillStyle = "#C0C0C0";
          ctx.fillRect(0, 0, 360, 180);
          //Right Col
         

          ctx.fillRect(rect2.x, rect2.y, rect2.width, rect2.height);
          ctx.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);
          ctx.fillRect(rect3.x, rect3.y, rect3.width, rect3.height);
          ctx.fillRect(rect4.x, rect4.y, rect4.width, rect4.height);
          ctx.fillStyle = "#00FFFF";
          ctx.fillRect(Exit.x, Exit.y, Exit.width, Exit.height);

          ctx.fillStyle = "#ff0000";
          ctx.fillRect(Player.x, Player.y, Player.width, Player.height);

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

          window.requestAnimationFrame(Update);
        };
        Update();

        window.addEventListener("keydown", controller.keyLister);
        window.addEventListener("keyup", controller.keyLister);

        //create boundaries
