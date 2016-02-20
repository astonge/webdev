function print_objs(objs) {
  console.log(JSON.stringify(objs));
}

function makeid() {
  var text = "";
  	var possible = "0123456789";
  	for( var i=0; i < 9; i++ )
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

// Prepend zeros to the digits in stopwatch
function prependZero(time, length) {
  time = new String(time);    // stringify time
  return new Array(Math.max(length - time.length + 1, 0)).join("0") + time;
}