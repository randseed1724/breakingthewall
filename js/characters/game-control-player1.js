


    function GameKeyPlayer1(){
      console.log('Game Control Present');
    }



  GameKeyPlayer1.prototype.controlPlayer1 = function() {

// movement

    var direction = 1 ;

    var start = $("#grid"+ direction);
    var before = start;
    start.addClass( "trump" );  //Inicial Position
    var move = $("#grid"+ direction);

    var keyPressed = false;


        $(document).on("keydown", function(e) {

          if($('.column').children('.block:visible').length === 45) {

          alert("Trump WIN!");
          }

        var x = e.keyCode;
        if (x == 65 || x == 68 || x == 83 ) {
          before.removeClass('trump');
}


//right key

        if (e.keyCode == 68 && ! keyPressed) {
          if (direction >= 65) {
            move.addClass("trump");
            return;
          }
            if (direction < 65) {
            direction += 9;
            move = $("#grid"+ direction);
            move.addClass("trump-right");
            }

            keyPressed = true;

            setTimeout(function() {
            move.removeClass("trump-right");

            before = move;
            keyPressed = false;
            }, 600);
          }

//left key

        if (e.keyCode == 65 && ! keyPressed) {
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
            }, 600);
}

//Dropping Bricks
// key down
      if (e.keyCode == 83 && ! keyPressed) {
        keyPressed = true;
        move.removeClass("trump");
        move.addClass("trump-brick");

        setTimeout(function() { move.removeClass("trump-brick");
        move.addClass( "trump-brick-2" );
      }, 300);

        setTimeout(function() { move.removeClass("trump-brick-2");
        move.addClass( "trump-brick-3" );
      }, 600);

        setTimeout(function() { move.removeClass("trump-brick-3");
       move.addClass( "trump" );
       move.nextAll(':hidden:first').show();
       move.prev().prev().detach();
console.log(   'This is going on',    move.prev());
       keyPressed = false;
      }, 1000);
      }
    });


//KEY UP


    $(document).on("keyup", function(e) {
             if (e.keyCode == 68 ) {
           move.addClass("trump");
           console.log('KEY UP:',move);
     }
     });

     $(document).on("keyup", function(e) {
              if (e.keyCode == 65 ) {
            move.addClass("trump");
            console.log('KEY UP:',move);
      }
      });


  };

// DONT DELATE THIS EVER  element.parentNode.children would be all siblings.
// DONT DELATE THIS EVER  nextElementSibling and previousElementSibling will get you the next/prev siblings