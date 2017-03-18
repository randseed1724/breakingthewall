

    function Trump(index, column, direction){
      this.index = index;
      this.column = column;
      this.direction = direction;
      console.log("this is Trump's constructor", this.index);
    }


        Trump.prototype.createTrump = function() {
          var trumpImg = "<img href='img/characters/t-front.png' id='position_" +this.index+"' >";
          main.append(trumpImg);
          alert("Trumpy");
        };
