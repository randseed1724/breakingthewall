


    function GameKeyPlayer2(){
    }



  GameKeyPlayer2.prototype.controlPlayer2 = function() {

// movement

    var direction = 79 ;

    var start = $("#grid"+ direction);
    var before = start;
    start.addClass( "mexican" );  //Inicial Position
    var move = $("#grid"+ direction);

    var keyPressed = false;


        $(document).on("keydown", function(e) {



        var x = e.keyCode;
        if (x == 37 || x == 38 || x == 39 || x == 40) {
          before.removeClass('mexican');
}


//obstacle 1 girl

        if (move.hasClass("inLove") === true) {
          return;
        }

//right key

        if (e.keyCode == 39 && ! keyPressed) {
          if (direction >= 79) {
            move.addClass("mexican");
            return;
          }
            if (direction < 79) {
            direction += 9;
            move = $("#grid"+ direction);
            move.addClass("m-right");
            }

            keyPressed = true;

            setTimeout(function() {
            move.removeClass("m-right");

            before = move;
            keyPressed = false;
          }, 500);
          }

//left key

        if (e.keyCode == 37 && ! keyPressed) {
          if (direction < 8 ) {
            move.addClass("mexican");
            return;
          }
            if (direction > 7) {
            direction -= 9;
            move = $("#grid"+ direction);
            move.addClass("m-left");
            }

            keyPressed = true;

            setTimeout(function() {
            move.removeClass("m-left");
            // move.removeClass("mexican-right");


            before = move;
            keyPressed = false;
          }, 500);
}

//key 40 hide

        if (e.keyCode == 40 && ! keyPressed) {
          // if (direction < 2 ) {
          //   move.addClass("trump");
          //   return;
          // }
            // if (direction > 2) {
            direction += 1;
            move = $("#grid"+ direction);
            move.addClass("m-hide");
            // }

            keyPressed = true;

            setTimeout(function() {
            move.removeClass("m-hide");
            // move.removeClass("trump-right");
            direction -= 1;
            move = $("#grid"+ direction);
            move.addClass("mexican");

            before = move;
            keyPressed = false;
          }, 800);
}

//Breaking Bricks
// key up
      if (e.keyCode == 38 && ! keyPressed) {
        keyPressed = true;
        move.removeClass("mexican");
        move.addClass("mm1");

        setTimeout(function() { move.removeClass("mm1");
        move.addClass( "mm2" );
      }, 200);

        setTimeout(function() { move.removeClass("mm2");
        move.addClass( "mm3" );
      }, 300);

      setTimeout(function() { move.removeClass("mm3");
      var newSky = 'newSky';
      var sky = "<div class='sky' id='sky_"+ newSky +"' >";

  if (move.prevAll('.block:visible')) {
       move.addClass( "mexican" );
       move.prevAll('.block:visible:first').hide();
     }

  if (  move.siblings().length < 13) {
       move.parent().prepend(sky);
     }
     else {
       move.addClass( "mexican" );
     }

       keyPressed = false;
     }, 500);
      }
    });





//KEY UP


    $(document).on("keyup", function(e) {
             if (e.keyCode == 39 ) {
           move.addClass("mexican");
           console.log('KEY UP:',move);
     }
     });

     $(document).on("keyup", function(e) {
              if (e.keyCode == 37 ) {
            move.addClass("mexican");
            console.log('KEY UP:',move);
      }
      });


  };

// DONT DELATE THIS EVER  element.parentNode.children would be all siblings.
// DONT DELATE THIS EVER  nextElementSibling and previousElementSibling will get you the next/prev siblings
