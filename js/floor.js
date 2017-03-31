
    function Floor(index, column){
      this.index = index;
      this.column = column;
    }

        Floor.prototype.createFloor = function() {
        var floor = "<div class='floor' id='floor_" +this.index+"' >";
        this.column.append(floor);
        };
