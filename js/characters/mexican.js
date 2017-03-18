
var skySpace;
var totalSky;

Column.prototype.handleClick = function(event) {
  var target = $(event.target);
  var blockReplace =  $(event.target).parent() ;

  console.log(blockReplace);

  var sky = "<div class='sky' id='sky_' >";

   skySpace =  target.parent();
   totalSky =  skySpace.find(".sky").length;

   console.log(totalSky);


  //  target.addClass('sky');
  //  target.toggle();

  //  target.detach();
  blockReplace.prepend(sky);

  target.hide();
  // target.addClass('sky');

};

//
