function Chile(){}

Chile.prototype.hot = function() {
// POWER 1

   var lastEvent;
   var grids =  [$("#grid7"),
   $("#grid16"), $("#grid25"),
   $("#grid34"), $("#grid43"),
   $("#grid52"), $("#grid61"),
   $("#grid70"), $("#grid79")];

 $('.button12').on("click", (event) => {

  $(document).on("keydown", (event) => {

    var totalSpicy = $(".main").find(".spicy");
    if (totalSpicy.length >= 3) {
      console.log("%cSpicy is Full!", "color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;");
      return;
    }

    var randomPlace = Math.floor(Math.random() * 9);
    ra = Math.floor(Math.random() * 100);
    console.log("randomPlace",randomPlace);

    if (lastEvent && lastEvent.keyCode == event.keyCode) {
           return;
    }
    lastEvent = event;

    if (event.keyCode != 38) {
      return;
    }
    if (grids[randomPlace].attr('id') === moveMexican.attr('id')) {
      return;
    }

 console.log('findAll all spicy',totalSpicy);



    if (chilesCount <= 2 && ra >= 95) {
       grids[randomPlace].addClass("spicy");
       chilesCount ++;
    }
    if (chilesCount >= 3){
      return;
    }

  setInterval(function () {
    chilesCount = 0;
  }, 10000);
  console.log('RESET',chilesCount);

    $(document).on("keyup", function(event) {
      lastEvent = null;
    });

  });
 });
};
