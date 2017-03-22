
    function Sky(index, column){
      this.index = index;
      this.column = column;
      console.log("this is sky constructor", this.index);
    }

        Sky.prototype.createSky = function() {
        var sky = "<div class='sky' id='sky_" +this.index+"' >";
        this.column.append(sky);

        };


        //adds sky blocks

      var skySpace, totalSky;
      var newSky = 'newSky';
      var sky = "<div class='sky' id='sky_"+ newSky +"' >";


        Column.prototype.addSky = function(event) {
          var target = $(event.target);

          var blockReplace =  $(event.target).parent() ;

           skySpace =  target.parent();

          blockReplace.prepend(sky);
        };
