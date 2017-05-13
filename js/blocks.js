
    function Block(index, column){
      this.index = index;
      this.column = column;
    }

        Block.prototype.createBlock = function() {
        var block = "<div class='block' id='block_" +this.index+"' >";
        this.column.append(block);
        };


      
