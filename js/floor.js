
    function Floor(index, column){
      this.index = index;
      this.column = column;
      console.log("this is floor constructor", this.index);
    }

        Floor.prototype.createFloor = function() {
        var floor = "<div class='floor' id='floor_" +this.index+"' >";
        this.column.append(floor);
        };
