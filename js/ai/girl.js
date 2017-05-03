      var stop = 0;



      function Girl(){
      }


        Girl.prototype.girlRun = function() {

        $('.button12').on("click", function(e) {

        var keyPressed = false;
        var lastEvent;


          $(document).on("keydown", function(event) {
//HERE LAST EVENT
            if (lastEvent && lastEvent.keyCode == event.keyCode) {
                   return;
               }
               lastEvent = event;


            if (event.keyCode == 83 && ! keyPressed) {


            var runFromRight = 73 ;


            rN = Math.floor(Math.random() * 100);

            var or = Math.ceil(Math.random() * 2) - 1;

console.log("Girl: ",rN);
            console.log("or",or);

//APPEAR FROM RIGHT

            if (rN >= 95 && or === 0 && !$( ".sky" ).hasClass( "girlFromRLeft")) {
              keyPressed = true;

            randomTime = Math.ceil(Math.random() * 1000);


            setTimeout(function() {

              var c = 0;
              if (c !==0) {
                move.removeClass( "girlFromRight" );
              }

            var move = $("#grid"+ runFromRight);
            move.addClass( "girlFromRight" );  //Inicial Position

                      var myInterval =  setInterval(function() {
                        move.removeClass( "girlFromRight" );

                        runFromRight -= 9;
                        move = $("#grid"+ runFromRight);
                        move.addClass("girlFromRight");

                        if (move.hasClass("trump") === true ||
                            move.hasClass("trump-right") === true ||
                            move.hasClass("trump-left") === true ||
                            move.hasClass("trump-brick") === true ||
                            move.hasClass("trump-brick-2") === true ||
                            move.hasClass("trump-brick-3") === true )
                            {
                              stop = 1;
                              clearInterval(myInterval);

                              move.addClass('inLove');
                              move.removeClass('girlFromRight');

                              setTimeout(function() {
                              move.removeClass('inLove');
                              move.addClass('trump');
                              stop = 0;
                              }, 3000);

                        }

                        c++;
                        if (c == 9){
                          clearInterval(myInterval);
                        }
                      }, 400);


                      keyPressed = false;

            }, randomTime);
}

// APPEAR FROM LEFT
      var runFromLeft = 1 ;
      // if (rN >= 4800 && or === 1 && !keyPressed) {
// console.log(!$( ".sky" ).hasClass( "girlFromRight"));

      if (rN >= 95 && or === 1 && !$( ".sky" ).hasClass( "girlFromRight")) {
        keyPressed = true;



      randomTime = Math.ceil(Math.random() * 1000);


      setTimeout(function() {


        var c = 0;
        if (c !==0) {
          move.removeClass( "girlFromLeft" );
        }

      var move = $("#grid"+ runFromLeft);
      move.addClass( "girlFromLeft" );  //Inicial Position

                var myInterval =  setInterval(function() {
                  move.removeClass( "girlFromLeft" );

                  runFromLeft += 9;
                  move = $("#grid"+ runFromLeft);
                  move.addClass("girlFromLeft");


                  if (move.hasClass("trump") === true ||
                      move.hasClass("trump-right") === true ||
                      move.hasClass("trump-left") === true ||
                      move.hasClass("trump-brick") === true ||
                      move.hasClass("trump-brick-2") === true ||
                      move.hasClass("trump-brick-3") === true )
                      {
                        stop = 1;


                        clearInterval(myInterval);


                        move.addClass('inLove');
                        move.removeClass('girlFromLeft');

                        setTimeout(function() {
                        move.removeClass('inLove');
                        move.addClass('trump');
                        stop = 0;

                        }, 3000);


                  }


                  c++;
                  if (c == 9){
                    clearInterval(myInterval);
                  }
                }, 400);


      keyPressed = false;
      }, randomTime);
      }
      }


                      $(document).on("keyup", function(event) {
                        lastEvent = null;

        });
});
});
};
