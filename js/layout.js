


    function Layout(){
    }


    Layout.prototype.displayLayout = function() {
      $('.main').css({'background-image':'url(img/bc22.png)','background-size':'cover','background-repeat':'no-repeat','background-position': 'bottom'} );

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

 $("#grid8,#grid17, #grid26, #grid35, #grid44, #grid53, #grid62, #grid71, #grid80").addClass("m-hide");
    });
  };

  Layout.prototype.Win = function() {

    $(document).on("keydown", function(e) {

    if($('.column').children('.block:visible').length === 0 && $('#grid80:visible').length === 1) {
      $("#win").show();
      $("#tittle-2").text("Congratulations mexican you win!");
    }

    if($('.column').children('.block:visible').length === 45) {
      $("#win").show();
      $("#tittle-2").text("Congratulations Trump you win!");
    }
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
