function Chile(){
}

Chile.prototype.hot = function() {
// POWER 1

  $('.button12').on("click", function(event) {

  var stopEvent = false;
  var stop = false;
  var chilesCount = 0;

  $(document).on("keydown", function(event) {
    if (!stopEvent && event.keyCode != 38) {
           return;
       }
       console.log('Chile Present Inside');

  ra = Math.floor(Math.random() * 100);

  var grids = [$("#grid7"),
   $("#grid16"), $("#grid25"),
   $("#grid34"), $("#grid43"),
   $("#grid52"), $("#grid61"),
   $("#grid70"), $("#grid79")];

   var randomPlace = Math.floor(Math.random() * 9);
   console.log("randomPlace",randomPlace);


  if (chilesCount <= 2 && !stop && ra >= 95) {
  stop = true;
  chilesCount ++;
  console.log("chilesCount",chilesCount);
  }
console.log('is this?',grids[randomPlace].hasClass("mexican"));

randomPlace = 8;
//    if (grids[randomPlace].attr('id') == move.attr('id')) {

   if (grids[randomPlace].attr('id') === moveMexican.attr('id') ) {
     console.log('RETURNED');
     return;
   } else {
    grids[randomPlace].addClass("spicy");
    stop = false;
    stopEvent = false;
}
  });
  });

};
