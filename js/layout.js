


    function Layout(){
    }


    Layout.prototype.displayLayout = function() {
      $('.main').css({'background-image':'url(img/bc21.png)','background-size':'cover','background-repeat':'no-repeat','background-position': 'bottom'} );

      $('.column *').each(function(i) {
          $(this).attr('id', 'grid' + i);
      });
  };

  Layout.prototype.displayStart = function() {
    $(".main").hide();
    $("#win").hide();


    $("#play").click(function () {
        $("#gameStart").hide();
        $(".main").show();

 $("#grid8,#grid17, #grid26, #grid35, #grid44, #grid53, #grid62, #grid71, #grid80").addClass("cactus-hide");
    });
  };
//   Layout.prototype.chiles = function() {
//
//   var spicy = [
//     $("#grid7"), $("#grid16"), $("#grid25"), $("#grid34"), $("#grid43"), $("#grid52"), $("#grid61"), $("#grid70"), $("#grid79")];
//
//     spicy[7].addClass("spicy");
//
//     for (var s = 0 ; s < 10; s++);
//
// };

  Layout.prototype.Win = function() {
    var lastEvent;
    var count = 0;

    $(document).on("keydown", function(e) {

    if($('.column').children('.block:visible').length === 0 && $('#grid80:visible').length === 1 && e.keyCode == 38 && count === 0) {
//HERE LAST EVENT
            if (lastEvent && lastEvent.keyCode == event.keyCode) {
                   return;
               }
               lastEvent = event;
     count++;
      $("#win").show();
      $("#tittle-2").text("Congratulations mexican you win!");

// Music if mexican wins
                            var mWins = document.createElement('audio');
                            mWins.setAttribute('src', '/home/alejandro/Desktop/Breaking the wall/sounds/mariachi.mp3');
                            mWins.volume = (30 / 100);

                                   mWins.play();

    }


    if($('.column').children('.block:visible').length === 45 && e.keyCode == 83 && count === 0) {
      //HERE LAST EVENT
                  if (lastEvent && lastEvent.keyCode == event.keyCode) {
                         return;
                     }
                     lastEvent = event;
                     count++;

      $("#win").show();
      $("#tittle-2").text("Congratulations Trump you win!");

  // Music if t wins
                                  var tWins = document.createElement('audio');
                                  tWins.setAttribute('src', '/home/alejandro/Desktop/Breaking the wall/sounds/again.mp3');

                                         tWins.play();
    }
    $(document).on("keyup", function(event) {
      lastEvent = null;
   });
  });
  };

  Layout.prototype.playAgain = function() {

    $("#playAgain").click(function () {
     location.reload();
    });
  };

  Layout.prototype.feedback = function() {

    $("#feedback").click(function () {
      $(location).attr('href', 'http://www.ouwebs.com');
    });
  };
