


      function Police(){
        console.log('Police Present');
      }


        Police.prototype.policeRun = function() {

          $('#btt').on("click", function(e) {



            $(document).on("keydown", function(e) {

              var keyPressed = false;


              if (e.keyCode == 38 && ! keyPressed) {

              keyPressed = true;

              var runFromRight = 79 ;


               mr = Math.floor(Math.random() * 100);

              var or = Math.ceil(Math.random() * 2) - 1;


  //APPEAR FROM RIGHT

              if (mr >= 95 && or === 0) {


              randomTime = Math.ceil(Math.random() * 1000) + 2000;


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
                console.log(c);


                  if (position.hasClass("mexican") === true ||
                      position.hasClass("m-right") === true ||
                      position.hasClass("m-left") === true ||
                      position.hasClass("mm1") === true ||
                      position.hasClass("mm2") === true ||
                      position.hasClass("mm3") === true )
                                      {


                                        clearInterval(myInterval);

                                        position.removeClass('mexican');

                                        position.addClass('inLove');
                                        position.removeClass('policeFromRight');

                                        setTimeout(function() {
                                        position.removeClass('inLove');
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

                if (mr >= 95 && or === 1) {

                randomTime = Math.ceil(Math.random() * 1000) + 2000;
                console.log(randomTime);


                setTimeout(function() {


                  var c = 0;
                  if (c !==0) {
                    move.removeClass( "policeFromLeft" );
                  }

                var move = $("#grid"+ runFromLeft);
                move.addClass( "policeFromLeft" );  //Inicial Position

                           var myInterval =  setInterval(function() {
                            move.removeClass( "policeFromLeft" );

                            runFromLeft += 9;
                            move = $("#grid"+ runFromLeft);
                            move.addClass("policeFromLeft");
                            console.log(c);


                            if (position.hasClass("mexican") === true ||
                            position.hasClass("m-right") === true ||
                            position.hasClass("m-left") === true ||
                            position.hasClass("mm1") === true ||
                            position.hasClass("mm2") === true ||
                            position.hasClass("mm3") === true )
                                {

                                  clearInterval(myInterval);

                                  position.removeClass('mexican');

                                  position.addClass('inLove');
                                  position.removeClass('policeFromRight');

                                  setTimeout(function() {
                                  position.removeClass('inLove');
                                  position.addClass('mexican');
                                  }, 3000);

                            }


                            c++;
                            if (c == 9){
                              clearInterval(myInterval);
                            }
                          }, 500);


                var keyPressed = false;
                }, randomTime);
                }
}
          });
          });
                };
