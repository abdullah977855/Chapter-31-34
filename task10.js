var today = new Date();
var beginning = new Date("January 1, 2015");

var diff = today.getTime() - beginning.getTime();
var seconds = Math.floor(diff / 1000);

document.write(
  "On reference date " + today +
  ", " + seconds + " seconds had passed since beginning of 2015"
);