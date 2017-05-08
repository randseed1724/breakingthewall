function GameKeyPlayer2(){}

  GameKeyPlayer2.prototype.controlPlayer2 = function() {
    var lastEvent;

    var start = $("#grid79");
    start.addClass( "mexican" );  //Inicial Position
    player2Before = start;
    moveMexican = $("#grid"+ play2Direction);


    $(document).on("keydown", function(event) {

        if (lastEvent && lastEvent.keyCode == event.keyCode) {
            return;
        }
        lastEvent = event;

        var x = event.keyCode;
        if (x == 37 || x == 38 || x == 39 || x == 40) {
          player2Before.removeClass('mexican'); //removes last position
          player2Before.removeClass('mexican-hot');
        }

//obstacle 2 POLICE
        if (moveMexican.hasClass("mexInjured") === true) {
          return;
        }

//right key

        if (event.keyCode == 39 && ! player2KeyPressed) {

            if (play2Direction >= 79) {
              moveMexican.addClass("mexican");
              return;
            }

            if (play2Direction < 79) {
            play2Direction += 9;
            moveMexican = $("#grid"+ play2Direction);
            moveMexican.addClass("m-right");
            }
            player2KeyPressed = true;

            setTimeout(play2MoveRight,500);
            play2Power();
        }

//left key
console.log('player2KeyPressed',player2KeyPressed);
        if (event.keyCode == 37 && !player2KeyPressed) {
          console.log("%cWorking!", "color: green; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;");
            if (play2Direction < 8 ) {
              moveMexican.addClass("mexican");
              return;
            }

            if (play2Direction > 7) {
            play2Direction -= 9;
            moveMexican = $("#grid"+ play2Direction);
            moveMexican.addClass("m-left");
            }

            player2KeyPressed = true;
            setTimeout(play2MoveLeft,500);
            play2Power();
            }

//key 40 hide

        if (event.keyCode == 40 && ! player2KeyPressed) {

          player2KeyPressed = true;

          play2Direction += 1;
          moveMexican = $("#grid"+ play2Direction);
          moveMexican.addClass("m-hide");

          setTimeout(function() {
          moveMexican.removeClass("m-hide");
          play2Direction -= 1;
          moveMexican = $("#grid"+ play2Direction);
          moveMexican.addClass("mexican");

          if (mexPowActive === true) {
          moveMexican.addClass("mexican-hot");
          }

          player2Before = moveMexican;
          player2KeyPressed = false;
        }, 1000);
      }

//Breaking Bricks
// key up
    if (event.keyCode == 38 && !player2KeyPressed) {

        player2KeyPressed = true;
        moveMexican.removeClass("mexican mexican-hot");
        moveMexican.addClass("mm1");

        setTimeout(function() {
        moveMexican.removeClass("mm1");
        moveMexican.addClass( "mm2" );
        }, speed1 );

        setTimeout(function() {
        speed1 = 100;
        }, 5000);



        setTimeout(function() {
        moveMexican.removeClass("mm2");
        moveMexican.addClass( "mm3" );
        }, speed2 );

        setTimeout(function() {
        moveMexican.removeClass("mm3");
        var newSky = 'newSky';
        var sky = "<div class='sky' id='sky_"+ newSky +"' >";

        if (moveMexican.prevAll('.block:visible')) {
        moveMexican.addClass( "mexican" );
        moveMexican.prevAll('.block:visible:first').hide();
        }

        if (moveMexican.siblings().length < 13) {
       moveMexican.parent().prepend(sky);
      }
        else {
       moveMexican.addClass( "mexican" );
      }

       player2KeyPressed = false;
     }, speed3 );
     console.log("speed3",speed3);

      }
    });

//KEY UP


    $(document).on("keyup", function(event) {
    lastEvent = null;

       if (event.keyCode == 39 ) {
         moveMexican.addClass("mexican");
       }

       if (event.keyCode == 39 && mexPowActive === true) {
         moveMexican.removeClass("mexican");
         moveMexican.addClass("mexican-hot");
       }

       if (event.keyCode == 37 ) {
       moveMexican.addClass("mexican");
       }

       if (event.keyCode == 37 && mexPowActive === true) {
         moveMexican.removeClass("mexican");
         moveMexican.addClass("mexican-hot");
       }
    });
};
