


var game = {
  init: function () {
    console.log("Hi");
    this.renderRows();
    $("#sky_1").append('<img id="trump" src="img/characters/t-front.png" />');

  },
  renderRows: function() {
  for (var i = 0; i <= 8; i++) {
    var column = new Column(i);
    column.createColumn();
  }
  }




};
