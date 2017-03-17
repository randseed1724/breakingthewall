
    function Sky(index, column){
      this.index = index;
      this.column = column;
      console.log("this is sky constructor", this.index);
    }

        Sky.prototype.createSky = function() {
        var sky = "<div class='sky' id='sky_" +this.index+"' >";
        this.column.append(sky);

        };
