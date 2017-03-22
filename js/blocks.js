
    function Block(index, column){
      this.index = index;
      this.column = column;
      console.log("this is Block constructor", this.index);
    }

        Block.prototype.createBlock = function() {
        var block = "<div class='block' id='block_" +this.index+"' >";
        this.column.append(block);

        };

        handleClick = function handlingThatClick() {
          var currentTarget = $(this) ;

        };

// Hides a target block
        Column.prototype.handleClick = function(event) {
          var target = $(event.target);

          target.hide();
        };
