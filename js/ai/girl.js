


      function Girl(){
        console.log('Game Control Present');
      }


      Girl.prototype.girlRun = function() {

$('#btt').on("click", function(e) {

console.log('active');
          $(document).on("keydown", function(e) {
console.log('keydown active');

            var runFromRight = 73 ;

            keyPressed = true;

            rN = Math.floor(Math.random() * 500);
console.log(rN);

            if (rN >= 480) {
console.log('keypress active');

            randomTime = Math.ceil(Math.random() * 10000) + 5000;
            console.log(randomTime);


            setTimeout(function() {

                    var z = 0;
                    z++;
                    console.log('z',z);

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
                        }, 300);


            var keyPressed = false;
            }, randomTime);
}

});
});
      };
