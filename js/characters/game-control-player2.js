


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
    var lastEvent;
    var speed1 = 100;
    var speed2 = 200;
    var speed3 = 300;
    var bounceBack = 0;
    var speedCounter = 1;

    var lockChile = 0;


        $(document).on("keydown", function(event) {
          if (lastEvent && lastEvent.keyCode == event.keyCode) {
                 return;
             }
             lastEvent = event;

        var x = event.keyCode;
        if (x == 37 || x == 38 || x == 39 || x == 40) {
          before.removeClass('mexican');
          before.removeClass('m-right');
          before.removeClass('m-left');
          before.removeClass('m-left');
          before.removeClass('mm1');
          before.removeClass('mm2');
          before.removeClass('mm3');
          before.removeClass('m-hide');
          before.removeClass("mexican-hot");

        }


//obstacle 2 POLICE

        if (move.hasClass("mexInjured") === true) {
          return;
        }

//right key

        if (event.keyCode == 39 && ! keyPressed) {
          if (direction >= 79) {
            move.addClass("mexican");
            if (speedCounter === 2) {
            move.addClass("mexican-hot");
            }
            return;
          }
            if (direction < 79) {
              move.removeClass("mexican");
              move.removeClass("m-left");
              move.removeClass("m-right");
              move.removeClass("mexican-hot");
              move.removeClass("mm1");
              move.removeClass("mm2");
              move.removeClass("mm3");


            keyPressed = true;
            direction += 9;
            move = $("#grid"+ direction);
            move.addClass("m-right");

            setTimeout(function() {
            move.addClass("mexican");
            if (speedCounter === 2) {
            move.addClass("mexican-hot");
            }

            if (move.hasClass("spicy") === true ) {
              move.addClass("mexican-hot");
              move.removeClass("spicy");
              move.removeClass("m-right");
              move.removeClass("mexican");
              speedCounter = 2;

            if (speedCounter === 2) {
               speed1 = 50;
               speed2 = 100;
               speed3 = 150;

              setTimeout(function() {
                 speed1 = 100;
                 speed2 = 200;
                 speed3 = 300;
                 speedCounter = 1;
                 move.removeClass("mexican-hot");
                 move.addClass("mexican");

              }, 6000);
            }
          }

            before = move;
            keyPressed = false;

          }, 500);
          }
          }

//left key
        if (event.keyCode == 37 && ! keyPressed) {

          if (direction < 8 ) {
            move.addClass("mexican");
            if (speedCounter === 2) {
            move.addClass("mexican-hot");
            }
            return;
          }
            if (direction > 7) {

            move.removeClass('mexican-hot');
            move.removeClass("mexican");
            }
              move.removeClass("m-right");
              move.removeClass("mm1");
              move.removeClass("mm2");
              move.removeClass("mm3");
              move.removeClass('mexican-hot');

            keyPressed = true;
            direction -= 9;
            move = $("#grid"+ direction);
            move.addClass("m-left");


            setTimeout(function() {
            move.addClass("mexican");
            if (speedCounter === 2) {
            move.addClass("mexican-hot");
            }

            if (move.hasClass("spicy") === true ) {
              move.addClass("mexican-hot");
              move.removeClass("spicy");
              move.removeClass("m-left");
              move.removeClass("mexican");
              speedCounter = 2;

            if (speedCounter === 2) {
               speed1 = 50;
               speed2 = 100;
               speed3 = 150;

              setTimeout(function() {
                 speed1 = 100;
                 speed2 = 200;
                 speed3 = 300;
                 speedCounter = 1;
                 move.removeClass("mexican-hot");
                 move.addClass("mexican");

              }, 6000);
            }
          }

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
            move.removeClass("mexican-hot");
            move.removeClass("mexInjured");

            // }


            setTimeout(function() {
            move.removeClass("m-hide");
            // move.removeClass("trump-right");
            direction -= 1;
            move = $("#grid"+ direction);
            move.addClass("mexican");

            if (speedCounter === 2) {
            move.addClass("mexican-hot");
            }

            before = move;
            keyPressed = false;
          }, 800);
}

//Breaking Bricks / KEY UP

    if (event.keyCode == 38 && ! keyPressed) {
        keyPressed = true;
        move.removeClass("mexican");
        if (speedCounter === 2) {
          move.removeClass("mexican-hot");
        }
        move.addClass("mm1");

        setTimeout(function() { move.removeClass("mm1");
        move.addClass( "mm2" );
      }, speed1);

console.log("speed1",speed1);

        setTimeout(function() { move.removeClass("mm2");
        move.addClass( "mm3" );
     }, speed2);
      console.log("speed2",speed2);


      setTimeout(function() {
        move.removeClass("mm3");
        move.addClass( "mexican" );
        if (speedCounter === 2) {
          move.addClass("mexican-hot");
        }
      var newSky = 'newSky';
      var sky = "<div class='sky' id='sky_"+ newSky +"' >";

  if (move.prevAll('.block:visible')) {


       move.prevAll('.block:visible:first').hide();
     }

  if (  move.siblings().length < 13) {
       move.parent().prepend(sky);
     }
     else {
      //  move.addClass( "mexican" );
     }
    //  before = move;
     keyPressed = false;
     }, speed3);

    //  setTimeout(function() {
    //   move.removeClass("mm3");
    //   move.addClass( "mexican" );
    // }, 500);
     console.log("speed3",speed3);
      }
    });

//KEY UNPRESS



//POWER 1

  $('#btt').on("click", function(event) {
    var lastEvent;

  $(document).on("keydown", function(event) {
    if (lastEvent && lastEvent.keyCode == event.keyCode) {
           return;
       }
       lastEvent = event;

  ra = Math.floor(Math.random() * 100);


  var lock = false;

  if (lockChile < 4 && event.keyCode == 38 && !lock && ra >= 95   ) {
  lock = true;
  lockChile ++;
  console.log("Second lockChile",lockChile);

console.log("ra",ra);
  var grids = [$("#grid7"),
   $("#grid16"), $("#grid25"),
   $("#grid34"), $("#grid43"),
   $("#grid52"), $("#grid61"),
   $("#grid70"), $("#grid79")];


   randomPlace = Math.floor(Math.random() * 9);

console.log("randomPlace",randomPlace);

   if (grids[randomPlace].attr('id') == move.attr('id')) {
     return;
   }
    grids[randomPlace].addClass("spicy");
    before = move;
    lock = false;
  }
    lastEvent = null;
  });
  });

  $(document).on("keyup", function(event) {
    lastEvent = null;

           if (event.keyCode == 39 ) {
         move.addClass("mexican");
         if (speedCounter === 2) {
         move.addClass("mexican-hot");
         }

            if (event.keyCode == 37 ) {
          move.addClass("mexican");
          if (speedCounter === 2) {
          move.addClass("mexican-hot");
          }
    }

  }
});


};
