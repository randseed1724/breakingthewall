


      function Spicy(){}

        Spicy.prototype.hot = function() {
        var keyPressed = false;
        var lastEvent;

        $('#btt').on("click", function(e) {

        $(document).on("keydown", function(event) {

        ra = Math.floor(Math.random() * 100);

        if (event.keyCode == 38 && !keyPressed && ra >= 90) {

        keyPressed = true;

        var grids = [$("#grid7"),
         $("#grid16"), $("#grid25"),
         $("#grid34"), $("#grid43"),
         $("#grid52"), $("#grid61"),
         $("#grid70"), $("#grid79")];

         randomPlace = Math.floor(Math.random() * 9);

          grids[randomPlace].addClass("spicy");
          keyPressed = false;
        }
        });
        });
        };
