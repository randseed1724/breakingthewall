


      function Police(){
      }


        Police.prototype.policeRun = function() {

          $('#btt').on("click", function(e) {

          var keyPressed = false;
          var lastEvent;


           $(document).on("keydown", function(event) {
//HERE LAST EVENT
            if (lastEvent && lastEvent.keyCode == event.keyCode) {
                   return;
               }
               lastEvent = event;

              if (event.keyCode == 38 && ! keyPressed) {
                console.log('look');


              var runFromRight = 79 ;


               mr = Math.floor(Math.random() * 100);

              var or = Math.ceil(Math.random() * 2) - 1;


  //APPEAR FROM RIGHT

              if (mr >= 90 && or === 0) {
              keyPressed = true;


              randomTime = Math.ceil(Math.random() * 1000);


              setTimeout(function() {

                var c = 0;
                if (c !==0) {
                  move.removeClass( "girlFromRight" );
                }

              var position = $("#grid"+ runFromRight);
               position.addClass( "policeFromRight" );  //Inicial Position

              var myInterval =  setInterval(function() {
               position.removeClass( "policeFromRight" );

                runFromRight -= 9;
                position = $("#grid"+ runFromRight);
                position.addClass("policeFromRight");


                  if (position.hasClass("mexican") === true ||
                      position.hasClass("m-right") === true ||
                      position.hasClass("m-left") === true ||
                      position.hasClass("mm1") === true ||
                      position.hasClass("mm2") === true ||
                      position.hasClass("mm3") === true )
                                      {


                                        clearInterval(myInterval);

                                        position.removeClass('mexican');

                                        position.addClass('mexInjured');
                                        position.removeClass('policeFromRight');

                                        setTimeout(function() {
                                        position.removeClass('mexInjured');
                                        position.addClass('mexican');
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
                var runFromLeft = 7 ;

                if (mr >= 90 && or === 1) {

                randomTime = Math.ceil(Math.random() * 1000) + 2000;


                setTimeout(function() {
                  var c = 0;
                  if (c !==0) {
                    position.removeClass( "policeFromLeft" );
                  }

                var position = $("#grid"+ runFromLeft);
                position.addClass( "policeFromLeft" );  //Inicial Position

                           var myInterval =  setInterval(function() {
                            position.removeClass( "policeFromLeft" );

                            runFromLeft += 9;
                            position = $("#grid"+ runFromLeft);
                            position.addClass("policeFromLeft");


                            if (position.hasClass("mexican") === true ||
                            position.hasClass("m-right") === true ||
                            position.hasClass("m-left") === true ||
                            position.hasClass("mm1") === true ||
                            position.hasClass("mm2") === true ||
                            position.hasClass("mm3") === true )
                                {

                                  clearInterval(myInterval);

                                  position.removeClass('mexican');


                                  position.addClass('mexInjured');
                                  position.removeClass('policeFromLeft');

                                  setTimeout(function() {
                                  position.removeClass('mexInjured');
                                  position.addClass('mexican');
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
