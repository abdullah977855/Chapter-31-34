var currentDate = new Date();
document.write("Current date: " + currentDate + "<br>");

var hours = currentDate.getHours();
currentDate.setHours(hours - 1);

document.write("1 hour ago, it was " + currentDate);