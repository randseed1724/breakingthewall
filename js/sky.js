

function sky(index, column){
  this.index = index;
  this.column = column;
  console.log("this is Block constructor", this.index);
}

Block.prototype.createBlock = function() {
var block = "<div class='block' id='block_" +this.index+"' >";
this.column.append(block);

};
