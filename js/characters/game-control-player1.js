


    function GameKeyPlayer1(){
    }



  GameKeyPlayer1.prototype.controlPlayer1 = function() {

// movement
    var previous;
    var direction = 1 ;

    var start = $("#grid"+ direction);
    var before = start;
    start.addClass( "trump" );  //Inicial Position
    var move = $("#grid"+ direction);

    var keyPressed = false;




        $(document).on("keypress", function(e) {
          console.log(e.keypress);


        var x = e.keyCode;
        if (x == 97 || x == 100 || x == 115 || x == 119) {
          before.removeClass('trump');
        }

//obstacle 1 girl

        if (move.hasClass("inLove") === true) {
          return;
        }


//right key

        if (e.keyCode == 100 && ! keyPressed) {
          if (direction >= 97) {
            move.addClass("trump");
            return;
          }

            if (direction < 97) {
            // previous = move;
            // previous.addClass("trump-move-right");

            direction += 9;
            move = $("#grid"+ direction);
            move.addClass("trump-right");
            }

            keyPressed = true;
            // before.removeClass("trump-right");

            setTimeout(function() {
            move.removeClass("trump-right");
            // previous.removeClass("trump-move-right");

            before = move;
            keyPressed = false;
          }, 500);
          }

//left key

        if (e.keyCode == 97 && ! keyPressed) {
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
            move.removeClass("trump-left");
            // move.removeClass("trump-right");


            before = move;
            keyPressed = false;
          }, 500);
}

//key 119 jump

        if (e.keyCode == 119 && !keyPressed) {
          // if (direction < 2 ) {
          //   move.addClass("trump");
          //   return;
          // }
            // if (direction > 2) {
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
      if (e.keyCode == 115 && ! keyPressed) {
        keyPressed = true;
        move.removeClass("trump");
        move.addClass("trump-brick");

        setTimeout(function() { move.removeClass("trump-brick");
        move.addClass( "trump-brick-2" );
      }, 200);

        setTimeout(function() { move.removeClass("trump-brick-2");
        move.addClass( "trump-brick-3" );
      }, 300);

        setTimeout(function() { move.removeClass("trump-brick-3");
       move.addClass( "trump" );
       move.nextAll(':hidden:first').show();
       move.prev().prev().detach();
       keyPressed = false;
     }, 500);
      }
      $(document).off('click', function(e) {return;});


          $(document).on("keyup", function(e) {
                   if (e.keyCode == 68 ) {
                       move.addClass("trump");

           }
           });

           $(document).on("keyup", function(e) {
                    if (e.keyCode == 65 ) {
                  move.addClass("trump");
            }
            });
    });


//KEY UP




  };

// DONT DELATE THIS EVER  element.parentNode.children would be all siblings.
// DONT DELATE THIS EVER  nextElementSibling and previousElementSibling will get you the next/prev siblings
