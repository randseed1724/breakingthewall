function Chile(){
}

Chile.prototype.hot = function() {
// POWER 1

  $('.button12').on("click", (event) => {

  var stop = true;
  var chilesCount = 0;
  var lastEvent;


  $(document).on("keydown", (event) => {
    if (lastEvent && lastEvent.keyCode == event.keyCode) {
           return;
       }
       lastEvent = event;

    if (!stop && event.keyCode != 38) {
           return;
  }

  var grids =   [$("#grid7"),
   $("#grid16"), $("#grid25"),
   $("#grid34"), $("#grid43"),
   $("#grid52"), $("#grid61"),
   $("#grid70"), $("#grid79")];

   var randomPlace = Math.floor(Math.random() * 9);
   console.log("randomPlace",randomPlace);
   ra = Math.floor(Math.random() * 100);
console.log("stop status: ",stop);
console.log("chilesCount status: ",chilesCount);
console.log("ra status: ",ra);



   if (grids[randomPlace].attr('id') === moveMexican.attr('id')) {
     return;
   } else if (stop && chilesCount <= 2 && ra >= 10) {
     console.log('RETURNEDRETURNEDRETURNEDRETURNED');
       stop = false;
       chilesCount ++;
       grids[randomPlace].addClass("spicy");
  } else {
    stop = true;
    return;
  }

  $(document).on("keyup", function(event) {
    lastEvent = null;

});
});
});

};
