



    function gameOver(){
    }


    gameOver.prototype.over = function() {

  console.log($('.column').children('.block:visible').length);
    if($('.column').children('.block:visible').length === 0) {

console.log('whatWaht');
    alert("The Mexican WIN!");
    }

  };
