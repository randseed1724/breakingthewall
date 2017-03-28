


    function Layout(){
      console.log("this is layout constructor");
    }


    Layout.prototype.displayLayout = function() {
      $('.main').css({'background-image':'url(img/bc22.png)','background-size':'cover','background-repeat':'no-repeat','background-position': 'bottom'} );

      $('.column *').each(function(i) {
          $(this).attr('id', 'grid' + i);
      });
  };

  Layout.prototype.displayStart = function() {
    $(".main").hide();
    $("#m-wins").hide();
    $("#t-wins").hide();


    $("#play").click(function () {
        $("#gameStart").hide();
        $(".main").show();
    });
  };

  Layout.prototype.mexicanWin = function() {

    $(document).on("keydown", function(e) {
    if($('.column').children('.block:visible').length === 0) {

      $("#m-wins").show();
    }
  });
  };

  Layout.prototype.trumpWin = function() {
    $(".main").hide();

    $("#play").click(function () {
        $("#gameStart").hide();
        $(".main").show();
    });
  };
