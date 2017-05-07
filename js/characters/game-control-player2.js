//Exporting variables to global

function GameKeyPlayer2(){}

  GameKeyPlayer2.prototype.controlPlayer2 = function() {
// controlers
    var lastEvent;
    var lock = 0;

// start player

    // var play2Direction = 79 ;
    // var before = start;
    var start = $("#grid79");
    start.addClass( "mexican" );  //Inicial Position
    before = start;
    moveMexican = $("#grid"+ play2Direction);




        $(document).on("keydown", function(event) {
          if (lastEvent && lastEvent.keyCode == event.keyCode) {
                 return;
             }
             lastEvent = event;

        var x = event.keyCode;
        if (x == 37 || x == 38 || x == 39 || x == 40) {
          before.removeClass('mexican'); //removes last position
          before.removeClass('mexican-hot');
        }

//obstacle 2 POLICE

        if (moveMexican.hasClass("mexInjured") === true) {
          return;
        }

//right key

        if (event.keyCode == 39 && ! keyPressed) {

          if (play2Direction >= 79) {
            moveMexican.addClass("mexican");
            return;
          }

            if (play2Direction < 79) {
            play2Direction += 9;
            moveMexican = $("#grid"+ play2Direction);
            moveMexican.addClass("m-right");
            }
            console.log("ACTIVATING MOVING RIGHT");
            keyPressed = true;

            setTimeout(lookFrontMexican,500);

            play2Power();


            // if (moveMexican.hasClass("power") === true &&
            //     mexPowActive === false) {
            //  moveMexican.removeClass("power");
            //  moveMexican.addClass("mexican-hot");
            //  speed1 = speed1Fast;
            //  speed2 = speed2Fast;
            //  speed3 = speed3Fast;
            //  mexPowActive = true;
            //  setTimeout(speedSlow,5000);
            // }
            }

//left key
        if (event.keyCode == 37 && ! keyPressed) {

            if (play2Direction < 8 ) {
              moveMexican.addClass("mexican");
              return;
            }

            if ( play2Direction < 8 ) {
            moveMexican.removeClass("mexican");
            moveMexican.addClass("mexican-hot");
            return;
            }


            if (play2Direction > 7) {
            play2Direction -= 9;
            moveMexican = $("#grid"+ play2Direction);
            moveMexican.addClass("m-left");
            }



            keyPressed = true;

            setTimeout(function() {
            moveMexican.removeClass("m-left");
            moveMexican.addClass("mexican");


            before = moveMexican;
            keyPressed = false;
            }, 500);

            play2Power();


            }

//key 40 hide

        if (event.keyCode == 40 && ! keyPressed) {

          keyPressed = true;

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

          before = moveMexican;
          keyPressed = false;
        }, 1000);
      }

//Breaking Bricks
// key up
    if (event.keyCode == 38 && !keyPressed) {

        keyPressed = true;
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

       keyPressed = false;
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
