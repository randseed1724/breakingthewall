


      function Girl(){
      }


        Girl.prototype.girlRun = function() {

        $('#btt').on("click", function(e) {


          $(document).on("keydown", function(e) {

            var keyPressed = false;

            if (e.keyCode == 83 && ! keyPressed) {

            keyPressed = true;


            var runFromRight = 73 ;


            rN = Math.floor(Math.random() * 100);
            console.log(rN);

            var or = Math.ceil(Math.random() * 2) - 1;
            console.log('or: ',or);


//APPEAR FROM RIGHT
// if (rN >= 4800 && or === 1 && !keyPressed) {

            if (rN >= 95 && or === 0 ) {

            randomTime = Math.ceil(Math.random() * 1000) + 2000;


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

                              clearInterval(myInterval);



                              move.addClass('inLove');
                              move.removeClass('girlFromRight');

                              setTimeout(function() {
                              move.removeClass('inLove');
                              move.addClass('trump');

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

      if (rN >= 95 && or === 1) {



      randomTime = Math.ceil(Math.random() * 1000) + 2000;


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


                        clearInterval(myInterval);


                        move.addClass('inLove');
                        move.removeClass('girlFromLeft');

                        setTimeout(function() {
                        move.removeClass('inLove');
                        move.addClass('trump');

                        }, 3000);


                  }


                  c++;
                  if (c == 9){
                    clearInterval(myInterval);
                  }
                  }, 300);


      keyPressed = false;
      }, randomTime);
      }
      }
});
});
};
