
var skySpace;
var totalSky;

Column.prototype.handleClick = function(event) {
  var target = $(event.target);

   skySpace =  target.parent();
   totalSky =  skySpace.find(".sky").length;

   console.log(totalSky);

   target.removeClass('block');
   target.addClass('sky');
};
