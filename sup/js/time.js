function updateClock () {
 	  var currentTime = new Date ( );
  	var currentHours = currentTime.getHours ( );
  	var currentMinutes = currentTime.getMinutes ( );
  	var currentSeconds = currentTime.getSeconds ( );
  	// Pad the minutes and seconds with leading zeros, if required
  	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
  	// Choose either "AM" or "PM" as appropriate
  	var timeOfDay = ( currentHours < 12 ) ? "a" : "p";
  	// Convert the hours component to 12-hour format if needed
  	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
  	// Convert an hours component of "0" to "12"
  	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
  	// Compose the string for display
  	var currentTimeString = currentHours + ":" + currentMinutes + "." + currentSeconds + "<small>" + timeOfDay + "</small>";
   	$("#time").html(currentTimeString);
 }

/*
	Adrian St. Onge
*/

function randimg() {
  var images = [
    'anim1.gif',
    'bg1.gif'
  ];
  // console.log(images.length);
  var num = Math.floor(Math.random() * images.length-1);
  // console.log(images[num]);
  $("#bgimg").attr('src',images[num]);
}
$(document).ready(function() {
  randimg();
  updateClock();
  setInterval('updateClock()', 1000);
});
