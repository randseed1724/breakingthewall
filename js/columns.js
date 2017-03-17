
function Column(index){
  this.index = index;
  console.log("this is the Column contruction function", this.index);
}

  Column.prototype.createColumn = function() {
    var main = $(".main");
    var column = "<div class='column' id='column_" +this.index+"' >";
    main.append(column);
    this.createSkys();
    this.createBlocks();
    this.createFloors();
    this.attachListener();
    //HERE goes attach listener
  };

  Column.prototype.createSkys = function() {
    for (var i = 0; i < 2; i++) {
    var column = $("#column_"+this.index);
    this.column = column;
    var sky = new Sky (i, column);
    sky.createSky();
  }
  };

  Column.prototype.createBlocks = function() {
    for (var i = 0; i <= 4; i++) {
    var column = $("#column_"+this.index);
    this.column = column;
    var block = new Block (i, column);
    block.createBlock();
  }
  };

  Column.prototype.createFloors = function() {
    for (var i = 0; i <= 1; i++) {
    var column = $("#column_"+this.index);
    this.column = column;
    var floor = new Floor (i, column);
    floor.createFloor();
  }
  };

  Column.prototype.attachListener = function() {
    var that = this;
    $(this.column).on("click", that.handleClick);
  };
