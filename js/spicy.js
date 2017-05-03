function Chile(){
}

Chile.prototype.hot = function() {

// POWER 1

  $('.button12').on("click", function(event) {

  var stopEvent = false;
  var stop = false;


  $(document).on("keydown", function(event) {
    if (!stopEvent && event.keyCode == 38) {
           return;
       }

  ra = Math.floor(Math.random() * 100);

  var chilesCount = 0;

  if (chilesCount === 4 && event.keyCode == 38 && !stop && ra >= 95   ) {
  stop = true;
  chilesCount ++;
  console.log("Second chilesCount",chilesCount);

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
    stop = false;
  }
    stopEvent = false;
  });
  });

};
