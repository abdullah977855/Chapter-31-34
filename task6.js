var currentDate = new Date();

var elapsedMilliseconds = currentDate.getTime();

var elapsedMinutes = elapsedMilliseconds / (1000 * 60);

document.write("Current Date: " + currentDate + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + elapsedMilliseconds + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + elapsedMinutes);