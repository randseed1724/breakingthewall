


    function Trump(direction){
      this.direction = direction;
      console.log("this is Trump's constructor");
    }

    Trump.prototype.displayTrump = function() {

    var myGrid = [];

     $(".column #sky_1").each(function(index) {
      myGrid.push(this);
      $(this).addClass( "trump" );
      console.log('This is it', myGrid);
      // $(this).toggleClass("trump");
      $(myGrid[2]).toggleClass("trump");
      });

      // for (x = 0; x < myGrid.length; x++) {
      // $(myGrid[x]).onclick.toggleClass("trump");
      // }

      // Column.prototype.MovingT = function() {
      //   var that = this;
      //   $(this.column).find(".block").on("click", that.handleClick);
      // };
      //
      // Trump.prototype.moveT = function(event) {
      // var target = $(event.target);
      //
      // target.hide();
      // };

      // Column.prototype.attachListener = function() {
      //   var that = this;
      //   $(this.column).find(".block").on("click", that.handleClick);
      // };
      //
      // Column.prototype.handleClick = function(event) {
      //   var target = $(event.target);
      //
      //   target.hide();
      // };


 // if () {}



    // var position =  startTrump;
    //
    // var startTrump = $("#column_0 #sky_1").append("<div class='trump'></div>");
    //
    // return startTrump;
    // //
    // for (var i = 0; i < myGrid.lenght; i++ ) {
    // var place = $(myGrid[i]).find('#sky_1').prepend("<div id='trump'></div>");
    // return print;
    // }


};








// keyboard - buttons
    document.getElementById("tetris-keyboard-up").onclick = function() { self.up(); this.blur(); };
    document.getElementById("tetris-keyboard-down").onclick = function() { self.down(); this.blur(); };
    document.getElementById("tetris-keyboard-left").onclick = function () { self.left(); this.blur(); };
    document.getElementById("tetris-keyboard-right").onclick = function() { self.right(); this.blur(); };

    // keyboard
    var keyboard = new Keyboard();
    keyboard.set(keyboard.n, this.start);
    keyboard.set(keyboard.r, this.reset);
    keyboard.set(keyboard.up, this.up);
    keyboard.set(keyboard.down, this.down);
    keyboard.set(keyboard.left, this.left);
    keyboard.set(keyboard.right, this.right);
    keyboard.set(keyboard.space, this.space);
    document.onkeydown = keyboard.event;


        function keyDown() {
    var ieKey = event.keyCode;
    if (ieKey == 38) {
    if (blank_pos < 13) {
    count=blank_pos + 4;
    X = fun(count);
    Z = (parseInt(nam[X].top));
    nam[X].top = Z - 52;
    Q = pos[X];
    pos[X] = blank_pos;
    blank_pos = Q;
       }
    }
    else if (ieKey == 40) {
    if (blank_pos > 4) {
    count = blank_pos - 4;
    X = fun(count);
    Z = (parseInt(nam[X].top));
    nam[X].top = Z + 52;
    Q = pos[X];
    pos[X] = blank_pos;
    blank_pos = Q;
       }
    }
    else if (ieKey == 37) {
    r = blank_pos % 4;
    if (r === 0) {
    }
    else {
    count = blank_pos + 1;
    X = fun(count);
    Z = (parseInt(nam[X].left));
    nam[X].left = Z - 52;
    Q = pos[X];
    pos[X] = blank_pos;
    blank_pos = Q;
       }
    }
    else if (ieKey == 39) {
    ch = blank_pos + 3;
    r = ch % 4;
    if (r === 0) {
    }
    else {
    count = blank_pos - 1;
    X = fun(count);
    Z = (parseInt(nam[X].left));
    nam[X].left = Z + 52;
    Q = pos[X];
    pos[X] = blank_pos;
    blank_pos = Q;
       }
    }
    else {
    alert("PLEASE USE PROPER KEYS");
    }
    A = false;
    b = 0;
    for (i = 1; i < 16; i++) {
    b++;
    if (pos[i] == b) {
    A = true;
    }
    else {
    A = false;
    break;
       }
}
}

              //end
