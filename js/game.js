


var game = {
  init: function () {
    console.log("Hi");
    this.renderRows();
  },
  renderRows: function() {
  for (var i = 0; i <= 8; i++) {
    var column = new Column(i);
    column.createColumn();
  }
  }




};
