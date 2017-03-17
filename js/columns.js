
function Column(index){
  this.index = index;
  console.log("this is the Column contruction function", this.index);
}

Column.prototype.createColumn = function() {
  var main = $(".main");
  var column = "<div class='column' id='column_" +this.index+"' >";
  main.append(column);
  this.createBlocks();
  //HERE goes attach listener
};

Column.prototype.createBlocks = function() {
  for (var i = 0; i <= 6; i++) {
  var column = $("#column_"+this.index);
  this.column = column;
  var block = new Block (i, column);
  block.createBlock();
}
};


Column.prototype.attachListener = function() {
  var that = this;
  $(this.column).on("click", that.handleClick);
};
