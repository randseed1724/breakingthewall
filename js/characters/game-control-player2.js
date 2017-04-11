
    function GameKeyPlayer2(){
    }

  GameKeyPlayer2.prototype.controlPlayer2 = function() {

// controlers
    var keyPressed = false;
    var lastEvent;
    var speedCounter = 0;
    var lock = 0;


//speed
    var speed1 = 100;
    var speed2 = 200;
    var speed3 = 300;

//shotcuts

   //this did not work, ask for help to do this
  //  var mexHot =  move.addClass("mexican-hot");
  //  var mexCool = move.removeClass("mexican-hot");

// start player

    var direction = 79 ;
    var start = $("#grid"+ direction);
    var before = start;
    start.addClass( "mexican" );  //Inicial Position
    var move = $("#grid"+ direction);




        $(document).on("keydown", function(event) {
          if (lastEvent && lastEvent.keyCode == event.keyCode) {
                 return;
             }
             lastEvent = event;

        var x = event.keyCode;
        if (x == 37 || x == 38 || x == 39 || x == 40) {
          before.removeClass('mexican');
        }


//obstacle 2 POLICE

        if (move.hasClass("mexInjured") === true) {
          return;
        }

//right key

        if (event.keyCode == 39 && ! keyPressed) {
          if (direction >= 79) {
            move.addClass("mexican");
            return;
          }

            if (direction < 79) {
            keyPressed = true;
            direction += 9;
            move = $("#grid"+ direction);
            move.addClass("m-right");
            }

            if (move.hasClass("spicy") === true ) {

                if (speedCounter === 1 ) {
                  move.removeClass("spicy");
                  return;
                }

             move.removeClass("spicy");
             speedCounter = 1;
             speed1 = 50;
             speed2 = 100;
             speed3 = 150;

             setTimeout(function() {
             move.removeClass("mexican-hot");
             speedCounter = 0;
             speed1 = 100;
             speed2 = 200;
             speed3 = 300;
             }, 5000);
            }

            setTimeout(function() {
            move.addClass("mexican");

            if ( speedCounter === 1) {
              move.addClass("mexican-hot");
            }
            move.removeClass("m-right");

            before = move;
            keyPressed = false;
          }, 500);
          }

//left key
        if (event.keyCode == 37 && ! keyPressed) {

              if (direction < 8 ) {
            move.addClass("mexican");
            return;
            }

            if ( direction < 8 && speedCounter === 2) {
            move.removeClass("mexican");
            move.addClass("mexican-hot");
            return;
            }


            if (direction > 7) {
            direction -= 9;
            move = $("#grid"+ direction);
            move.addClass("m-left");
            }

            if (move.hasClass("spicy") === true ) {

              if (speedCounter === 3 ){
                return;
              }
              speedCounter++;
              console.log(speedCounter);
              move.removeClass("spicy");
              extraSpeed = 10;

              setTimeout(function() {
              extraSpeed = 0;

              }, 5000);
            }

            keyPressed = true;

            setTimeout(function() {
            move.removeClass("m-left");
            move.addClass("mexican");


            before = move;
            keyPressed = false;
            }, 500);
            }

//key 40 hide

        if (event.keyCode == 40 && ! keyPressed) {

          keyPressed = true;

          direction += 1;
          move = $("#grid"+ direction);
          move.addClass("m-hide");

          setTimeout(function() {
          move.removeClass("m-hide");
          direction -= 1;
          move = $("#grid"+ direction);
          move.addClass("mexican");

          if (speedCounter === 2) {
          move.addClass("mexican-hot");
          }

          before = move;
          keyPressed = false;
        }, 1000);
      }

//Breaking Bricks
// key up
    if (event.keyCode == 38 && ! keyPressed) {

        keyPressed = true;
        move.removeClass("mexican mexican-hot");


        move.addClass("mm1");

        setTimeout(function() {
        move.removeClass("mm1");
        move.addClass( "mm2" );
        }, speed1 -= extraSpeed );

        setTimeout(function() {
        move.removeClass("mm2");
        move.addClass( "mm3" );
        }, speed2 -= extraSpeed );

        setTimeout(function() {
        move.removeClass("mm3");
        var newSky = 'newSky';
        var sky = "<div class='sky' id='sky_"+ newSky +"' >";

        if (move.prevAll('.block:visible')) {
        move.addClass( "mexican" );
        move.prevAll('.block:visible:first').hide();
        }

        if (move.siblings().length < 13) {
       move.parent().prepend(sky);
      }
        else {
       move.addClass( "mexican" );
      }

       keyPressed = false;
     }, speed3 -= extraSpeed );
     console.log("speed3",speed3);

      }
    });

//KEY UP


    $(document).on("keyup", function(event) {
    lastEvent = null;

       if (event.keyCode == 39 ) {
       move.addClass("mexican");
       }

       if (event.keyCode == 39 && speedCounter === 2) {
       move.removeClass("mexican");
       move.addClass("mexican-hot");
       }

       if (event.keyCode == 37 ) {
       move.addClass("mexican");
       }

       if (event.keyCode == 37 && speedCounter === 2) {
       move.removeClass("mexican");
       move.addClass("mexican-hot");
       }

    });
};
