

    function Trump(direction){
      this.direction = direction;
      console.log("this is Trump's constructor");
    }


    Trump.prototype.displayTrump = function() {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 890;
    canvas.height = 580;
    canvas.setAttribute("id", "place1");
    canvas.css({'src':'url(img/characters/t-front.png'} );
    $('#sky_0').append(canvas);

    make_base();

    function make_base()
    {
      trumpCanvas.id = 'trumpCanvas-front';
      trumpCanvas.src = 'img/characters/t-front-98.png';
      trumpCanvas.onload = function(){
      var x = 0;
      var y = 85;


      ctx.drawImage(trumpCanvas, x, y);

       window.addEventListener('keydown', moveobj, true);
        function moveobj(evt) {
            switch (evt.keyCode) {
                case 39:
                    ctx.drawImage(trumpCanvas, x + 100, y);
                    counter++;
                    break;
                case 37:
                    ctx.drawImage(trumpCanvas, x - 50, y);
                    break;
            }

          }
      };
    }
    };
    // window.addEventListener('keydown', moveobj, true);
    //
    // var right = 35;
    // function moveobj(evt) {
    //     switch (evt.keyCode) {
    //         case 37:
    //             if (next < 20) {
    //                 return;
    //             }
    //             next = next - 5;
    //             break;
    //         case 39:
    //             if (next > 650) {
    //                 return;
    //             }
    //             next = next + 5;
    //             break;
    //     }
    //     ctx.fillStyle = "#ffffff";
    //     ctx.rect(0, 5, 650, 300);
    //     ctx.fill();
    //     ctx.putImageData(back, next, 50);
  // }








        // Trump.prototype.createTrump = function() {
        //   $("#sky_1").append('<img id="trump" src="img/characters/t-front.png" />');
        // };


// adds Trump to the game



        // Column.prototype.displayTrump = function(event) {
        //   var target = $(event.target);
        //   var trump = '<img id="trump" src="img/characters/t-front.png" />';
        //
        //
        //    trumPlace =  $(event.target);
        //    lastPlace =  trumPlace.find("#sky_1");
        //
        //    console.log(lastPlace);
        //    console.log(trumPlace);
        //
        //    trumPlace.append(trump);
        // };

        // Trump inside


        // Game objects
      //   var hero = {
      //   	speed: 256, // movement in pixels per second
      //   	x: 0,
      //   	y: 0
      //   };
      //   var monster = {
      //   	x: 0,
      //   	y: 0
      //   };
      //   var monstersCaught = 0;
      //
      //   // Handle keyboard controls
      // var keysDown = {};
      //
      // addEventListener("keydown", function (e) {
      // 	keysDown[e.keyCode] = true;
      // }, false);
      //
      // addEventListener("keyup", function (e) {
      // 	delete keysDown[e.keyCode];
      // }, false);
      //
      //
      // // Update game objects
      // var update = function (modifier) {
      // 	if (38 in keysDown) { // Player holding up
      // 		hero.y -= hero.speed * modifier;
      // 	}
      // 	if (40 in keysDown) { // Player holding down
      // 		hero.y += hero.speed * modifier;
      // 	}
      // 	if (37 in keysDown) { // Player holding left
      // 		hero.x -= hero.speed * modifier;
      // 	}
      // 	if (39 in keysDown) { // Player holding right
      // 		hero.x += hero.speed * modifier;
      // 	}
      //
      // 	// Are they touching?
      // 	if (
      // 		hero.x <= (monster.x + 32)
      // 		&& monster.x <= (hero.x + 32)
      // 		&& hero.y <= (monster.y + 32)
      // 		&& monster.y <= (hero.y + 32)
      // 	) {
      // 		++monstersCaught;
      // 		reset();
      // 	}
      // };









              //end
