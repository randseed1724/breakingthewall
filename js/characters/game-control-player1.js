

    function GameKeyPlayer1(){
    }



  GameKeyPlayer1.prototype.controlPlayer1 = function() {

// movement
    var direction = 1 ;

    var start = $("#grid"+ direction);
    var before = start;
    start.addClass( "trump" );  //Inicial Position
    var move = $("#grid"+ direction);

    var keyPressed = false;

    var lastEvent;



        $(document).on("keydown", function(event) {
//HERE LAST EVENT
          if (lastEvent && lastEvent.keyCode == event.keyCode) {
                 return;
             }
             lastEvent = event;



        var x = event.keyCode;
        if (x == 65 || x == 68 || x == 83 || x == 87) {
          before.removeClass('trump');
        }

//obstacle 1 girl

        if (move.hasClass("inLove") === true) {
          return;
        }


//right key

        if (event.keyCode == 68 && ! keyPressed) {
          if (direction >= 65) {
            move.addClass("trump");
            return;
          }

            if (direction < 65) {

            keyPressed = true;
            direction += 9;
            move = $("#grid"+ direction);
            move.addClass("trump-right");
            }

            setTimeout(function() {
            move.addClass("trump");
            move.removeClass("trump-right");


            before = move;
            keyPressed = false;
          }, 500);
          }

//left key

        if (event.keyCode == 65 && ! keyPressed) {
          if (direction < 2 ) {
            move.addClass("trump");
            return;
          }
            if (direction > 2) {
            direction -= 9;
            move = $("#grid"+ direction);
            move.addClass("trump-left");
            }

            keyPressed = true;

            setTimeout(function() {
            move.addClass("trump");
            move.removeClass("trump-left");


            before = move;
            keyPressed = false;
          }, 500);
}

//key 87 jump

        if (event.keyCode == 87 && !keyPressed) {

            keyPressed = true;

            move.removeClass("trump");

            direction -= 1;
            move = $("#grid"+ direction);
            move.addClass("trump-jump");
            // }


            setTimeout(function() {
            move.removeClass("trump-jump");
            move.removeClass("trump");

            // move.removeClass("trump-right");
            direction += 1;
            move = $("#grid"+ direction);
            move.addClass("trump");

            before = move;
            keyPressed = false;
          }, 800);
}

//Dropping Bricks
// key down


      if (event.keyCode == 83 && ! keyPressed) {
        keyPressed = true;
        move.removeClass("trump");
        move.addClass("trump-brick");

        setTimeout(function() { move.removeClass("trump-brick");
        move.addClass( "trump-brick-2" );
      }, 100);

        setTimeout(function() { move.removeClass("trump-brick-2");
        move.addClass( "trump-brick-3" );
      }, 200);

        setTimeout(function() { move.removeClass("trump-brick-3");
       move.addClass( "trump" );
       move.nextAll(':hidden:first').show();
       move.prev().prev().detach();
       keyPressed = false;
     }, 300);
      }
    });


//KEY UP


    $(document).on("keyup", function(event) {
      lastEvent = null;


             if (event.keyCode == 68 ) {
                 move.addClass("trump");

                 if (event.keyCode == 65 ) {
               move.addClass("trump");
         }
       }
  });
};

// DONT DELATE THIS EVER  element.parentNode.children would be all siblings.
// DONT DELATE THIS EVER  nextElementSibling and previousElementSibling will get you the next/prev siblings
