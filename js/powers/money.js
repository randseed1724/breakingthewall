function Money(){}

Money.prototype.bullion = function() {
// POWER 1

   var lastEvent;
   var grids =  [
  //  $("#grid1"), //MAKE SURE TO ADD 2 TO RANDOM PLACE MULTIPLICATION
   $("#grid10"), $("#grid19"),
   $("#grid28"), $("#grid37"),
   $("#grid46"), $("#grid55"),
   $("#grid64"),
  //  $("#grid73")
   ];

 $('.button12').on("click", (event) => {

  $(document).on("keydown", (event) => {


    if (event.keyCode != 83) {
      return;
    }

    var totalMoney = $(".main").find(".money");

    if (totalMoney.length >= 3) {
      return;
    }

    var randomPlace = Math.floor(Math.random() * 7);
    var randNum = Math.floor(Math.random() * 100);

    if (lastEvent && lastEvent.keyCode == event.keyCode) {
           return;
    }
    lastEvent = event;



    if (grids[randomPlace].attr('id') === movePlayer1.attr('id')) {
      return;
    }

    if (moneyCount <= 2 && randNum >= 95) {
       grids[randomPlace].addClass("money");
       moneyCount ++;
    }
    if (moneyCount >= 3){
      return;
    }

  setInterval(function () {
    moneyCount = 0;
  }, 10000);

    $(document).on("keyup", function(event) {
      lastEvent = null;
    });
  });
 });
};
