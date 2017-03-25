
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
    //HERE goes attachers listener
    this.attachListener();
    this.attachSky();
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

  // attachers

  Column.prototype.attachListener = function() {
    var that = this;
    $(this.column).find(".block").on("click", that.handleClick);
  };


  Column.prototype.attachSky = function() {
    var that = this;
    $(this.column).find(".block").on("click", that.addSky);
  };

  Column.prototype.attachTrump = function() {
    var that = this;
    $(this.column).find("#sky_1").one("click", that.displayTrump);
  };

  // Column.prototype.attachTrump = function() {
  //   var that = this;
  //   $(this.column).find("#sky_1").one("click", that.displayTrump);
  // };
