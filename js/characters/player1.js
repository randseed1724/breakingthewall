function GameKeyPlayer1(){}

  GameKeyPlayer1.prototype.controlPlayer1 = function() {
    var lastEvent;

    var start = $("#grid1");
    start.addClass( "trump" );  //Inicial Position
    player1Before = start;
    movePlayer1 = $("#grid"+ play1Direction);


    $(document).on("keydown", function(event) {

        if (lastEvent && lastEvent.keyCode == event.keyCode) {
              return;
        }
        lastEvent = event;

        var x = event.keyCode;
        if (x == 65 || x == 68 || x == 83 || x == 87) {
          player1Before.removeClass('trump');
          player1Before.removeClass('t-money');
        }

//obstacle 1 girl
        if (movePlayer1.hasClass("inLove") === true) {
          return;
        }

//right key

        if (event.keyCode == 68 && !player1KeyPressed) {

          if (play1Direction >= 65) {
            movePlayer1.addClass("trump");
            return;
          }

          if (play1Direction < 65) {
          play1Direction += 9;
          movePlayer1 = $("#grid"+ play1Direction);
          movePlayer1.addClass("trump-right");
          }
          player1KeyPressed = true;
          setTimeout(player1MoveRight,500);
          play1Power();
        }

//left key

        if (event.keyCode == 65 && !player1KeyPressed) {

          if (play1Direction < 2 ) {
            movePlayer1.addClass("trump");
            return;
          }
          if (play1Direction > 2) {
          play1Direction -= 9;
          movePlayer1 = $("#grid"+ play1Direction);
          movePlayer1.addClass("trump-left");
          }

          player1KeyPressed = true;
          setTimeout(player1MoveLeft,500);
          play1Power();
        }

//key 87 jump

        if (event.keyCode == 87 && !player1KeyPressed) {

            player1KeyPressed = true;

            movePlayer1.removeClass("trump");

            play1Direction -= 1;
            movePlayer1 = $("#grid"+ play1Direction);
            movePlayer1.addClass("trump-jump");
            // }


            setTimeout(function() {
            movePlayer1.removeClass("trump-jump");
            movePlayer1.removeClass("trump");

            // movePlayer1.removeClass("trump-right");
            play1Direction += 1;
            movePlayer1 = $("#grid"+ play1Direction);
            movePlayer1.addClass("trump");

            player1Before = movePlayer1;
            player1KeyPressed = false;
          }, 800);
          play1Power();
}

//Dropping Bricks
// key down


      if (event.keyCode == 83 && ! player1KeyPressed) {
        player1KeyPressed = true;
        movePlayer1.removeClass("trump");
        movePlayer1.addClass("trump-brick");

        setTimeout(function() { movePlayer1.removeClass("trump-brick");
        movePlayer1.addClass( "trump-brick-2" );
      }, player1Speed1);

        setTimeout(function() { movePlayer1.removeClass("trump-brick-2");
        movePlayer1.addClass( "trump-brick-3" );
      }, player1Speed2);

        setTimeout(function() { movePlayer1.removeClass("trump-brick-3");
       if (player1PowerActive) {
         movePlayer1.addClass("t-money");
       } else {
         movePlayer1.addClass( "trump" );
       }
       movePlayer1.nextAll(':hidden:first').show();
       movePlayer1.prev().prev().detach();
       player1KeyPressed = false;

     }, player1Speed3);

     play1Power();

      }
    });


//KEY UP
    $(document).on("keyup", function(event) {
      lastEvent = null;

      if (event.keyCode == 68 ) {
          movePlayer1.addClass("trump");
      }
      if (event.keyCode == 65 ) {
          movePlayer1.addClass("trump");
      }
  });
};

// DONT DELATE THIS EVER  element.parentNode.children would be all siblings.
// DONT DELATE THIS EVER  nextElementSibling and previousElementSibling will get you the next/prev siblings
