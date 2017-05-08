

    function GameKeyPlayer1(){
    }

  GameKeyPlayer1.prototype.controlPlayer1 = function() {


    var keyPressed = false;
    var lastEvent;

    var speedCounter = 1;


    var direction = 1 ;
    var start = $("#grid"+ direction);
    var before = start;
    start.addClass( "trump" );  //Inicial Position
    movePlayer1 = $("#grid"+ direction);




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

        if (movePlayer1.hasClass("inLove") === true) {
          return;
        }


//right key

        if (event.keyCode == 68 && ! keyPressed) {
          if (direction >= 65) {
            movePlayer1.addClass("trump");
            return;
          }

            if (direction < 65) {

            keyPressed = true;
            direction += 9;
            movePlayer1 = $("#grid"+ direction);
            movePlayer1.addClass("trump-right");
            }

            setTimeout(function() {
            movePlayer1.addClass("trump");
            movePlayer1.removeClass("trump-right");


            before = movePlayer1;
            keyPressed = false;
          }, 500);
          }

//left key

        if (event.keyCode == 65 && ! keyPressed) {
          if (direction < 2 ) {
            movePlayer1.addClass("trump");
            return;
          }
            if (direction > 2) {
            direction -= 9;
            movePlayer1 = $("#grid"+ direction);
            movePlayer1.addClass("trump-left");
            }

            keyPressed = true;

            setTimeout(function() {
            movePlayer1.addClass("trump");
            movePlayer1.removeClass("trump-left");


            before = movePlayer1;
            keyPressed = false;
          }, 500);
}

//key 87 jump

        if (event.keyCode == 87 && !keyPressed) {

            keyPressed = true;

            movePlayer1.removeClass("trump");

            direction -= 1;
            movePlayer1 = $("#grid"+ direction);
            movePlayer1.addClass("trump-jump");
            // }


            setTimeout(function() {
            movePlayer1.removeClass("trump-jump");
            movePlayer1.removeClass("trump");

            // movePlayer1.removeClass("trump-right");
            direction += 1;
            movePlayer1 = $("#grid"+ direction);
            movePlayer1.addClass("trump");

            before = movePlayer1;
            keyPressed = false;
          }, 800);
}

//Dropping Bricks
// key down


      if (event.keyCode == 83 && ! keyPressed) {
        keyPressed = true;
        movePlayer1.removeClass("trump");
        movePlayer1.addClass("trump-brick");

        setTimeout(function() { movePlayer1.removeClass("trump-brick");
        movePlayer1.addClass( "trump-brick-2" );
      }, speed1);

        setTimeout(function() { movePlayer1.removeClass("trump-brick-2");
        movePlayer1.addClass( "trump-brick-3" );
      }, speed2);

        setTimeout(function() { movePlayer1.removeClass("trump-brick-3");
       movePlayer1.addClass( "trump" );
       movePlayer1.nextAll(':hidden:first').show();
       movePlayer1.prev().prev().detach();
       keyPressed = false;
     }, speed3);
      }
    });


//KEY UP


    $(document).on("keyup", function(event) {
      lastEvent = null;


             if (event.keyCode == 68 ) {
                 movePlayer1.addClass("trump");

                 if (event.keyCode == 65 ) {
               movePlayer1.addClass("trump");
         }
       }
  });
};

// DONT DELATE THIS EVER  element.parentNode.children would be all siblings.
// DONT DELATE THIS EVER  nextElementSibling and previousElementSibling will get you the next/prev siblings
