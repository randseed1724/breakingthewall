


      function Police(){
        console.log('Police Present');
      }


        Police.prototype.policeRun = function() {

          $('#btt').on("click", function(e) {

            var x = e.keyCode;
            if (x !== 37 || x !== 38 || x !== 39 || x !== 40) {
              return;
            }

          console.log('active');
                    $(document).on("keydown", function(e) {
          console.log('keydown active');

                      var runFromRight = 79 ;

                      keyPressed = true;

                      mr = Math.floor(Math.random() * 5000);
          console.log('mr:',mr);

                      var or = Math.ceil(Math.random() * 2) - 1;
                      console.log('or: ',or);


          //APPEAR FROM RIGHT
                      if (mr >= 4950 && or === 0) {
          console.log('keypress active');

                      randomTime = Math.ceil(Math.random() * 1000) + 2000;
                      console.log(randomTime);


                      setTimeout(function() {

                              var z = 0;
                              z++;
                              console.log('z',z);

                        var c = 0;
                        if (c !==0) {
                          move.removeClass( "policeFromRight" );
                        }

                      var move = $("#grid"+ runFromRight);
                      move.addClass( "policeFromRight" );  //Inicial Position

                                var myInterval =  setInterval(function() {
                                  move.removeClass( "policeFromRight" );

                                  runFromRight -= 9;
                                  move = $("#grid"+ runFromRight);
                                  move.addClass("policeFromRight");
                                  console.log(c);


                                  if (move.hasClass("trump") === true ||
                                      move.hasClass("trump-right") === true ||
                                      move.hasClass("trump-left") === true ||
                                      move.hasClass("trump-brick") === true ||
                                      move.hasClass("trump-brick-2") === true ||
                                      move.hasClass("trump-brick-3") === true )
                                      {


                                        clearInterval(myInterval);


                                        move.addClass('inLove');
                                        move.removeClass('policeFromRight');

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


                      var keyPressed = false;
                      }, randomTime);
          }

          // APPEAR FROM LEFT
                var runFromLeft = 7 ;

                if (mr >= 4950 && or === 1) {
                console.log('keypress active');

                randomTime = Math.ceil(Math.random() * 1000) + 2000;
                console.log(randomTime);


                setTimeout(function() {

                        var z = 0;
                        z++;
                        console.log('z',z);

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


                            if (move.hasClass("trump") === true ||
                                move.hasClass("trump-right") === true ||
                                move.hasClass("trump-left") === true ||
                                move.hasClass("trump-brick") === true ||
                                move.hasClass("trump-brick-2") === true ||
                                move.hasClass("trump-brick-3") === true )
                                {


                                  clearInterval(myInterval);


                                  move.addClass('inLove');
                                  move.removeClass('policeFromRight');

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


                var keyPressed = false;
                }, randomTime);
                }

          });
          });
                };
