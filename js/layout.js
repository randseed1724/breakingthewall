


    function Layout(){
      console.log("this is layout constructor");
    }


    Layout.prototype.displayLayout = function() {
      $('.main').css({'background-image':'url(img/bc22.png)','background-size':'cover','background-repeat':'no-repeat','background-position': 'bottom'} );

      $('.column *').each(function(i) {
          $(this).attr('id', 'grid' + i);


          // You can also add more code here if you wish to manipulate each IMG element further
      });
  };
