
var moveTrump;

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
    moveTrump = $("#grid"+ direction);




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

        if (moveTrump.hasClass("inLove") === true) {
          return;
        }


//right key

        if (event.keyCode == 68 && ! keyPressed) {
          if (direction >= 65) {
            moveTrump.addClass("trump");
            return;
          }

            if (direction < 65) {

            keyPressed = true;
            direction += 9;
            moveTrump = $("#grid"+ direction);
            moveTrump.addClass("trump-right");
            }

            setTimeout(function() {
            moveTrump.addClass("trump");
            moveTrump.removeClass("trump-right");


            before = moveTrump;
            keyPressed = false;
          }, 500);
          }

//left key

        if (event.keyCode == 65 && ! keyPressed) {
          if (direction < 2 ) {
            moveTrump.addClass("trump");
            return;
          }
            if (direction > 2) {
            direction -= 9;
            moveTrump = $("#grid"+ direction);
            moveTrump.addClass("trump-left");
            }

            keyPressed = true;

            setTimeout(function() {
            moveTrump.addClass("trump");
            moveTrump.removeClass("trump-left");


            before = moveTrump;
            keyPressed = false;
          }, 500);
}

//key 87 jump

        if (event.keyCode == 87 && !keyPressed) {

            keyPressed = true;

            moveTrump.removeClass("trump");

            direction -= 1;
            moveTrump = $("#grid"+ direction);
            moveTrump.addClass("trump-jump");
            // }


            setTimeout(function() {
            moveTrump.removeClass("trump-jump");
            moveTrump.removeClass("trump");

            // moveTrump.removeClass("trump-right");
            direction += 1;
            moveTrump = $("#grid"+ direction);
            moveTrump.addClass("trump");

            before = moveTrump;
            keyPressed = false;
          }, 800);
}

//Dropping Bricks
// key down


      if (event.keyCode == 83 && ! keyPressed) {
        keyPressed = true;
        moveTrump.removeClass("trump");
        moveTrump.addClass("trump-brick");

        setTimeout(function() { moveTrump.removeClass("trump-brick");
        moveTrump.addClass( "trump-brick-2" );
      }, speed1);

        setTimeout(function() { moveTrump.removeClass("trump-brick-2");
        moveTrump.addClass( "trump-brick-3" );
      }, speed2);

        setTimeout(function() { moveTrump.removeClass("trump-brick-3");
       moveTrump.addClass( "trump" );
       moveTrump.nextAll(':hidden:first').show();
       moveTrump.prev().prev().detach();
       keyPressed = false;
     }, speed3);
      }
    });


//KEY UP


    $(document).on("keyup", function(event) {
      lastEvent = null;


             if (event.keyCode == 68 ) {
                 moveTrump.addClass("trump");

                 if (event.keyCode == 65 ) {
               moveTrump.addClass("trump");
         }
       }
  });
};

// DONT DELATE THIS EVER  element.parentNode.children would be all siblings.
// DONT DELATE THIS EVER  nextElementSibling and previousElementSibling will get you the next/prev siblings
