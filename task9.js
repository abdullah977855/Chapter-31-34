var ramadan = new Date("June 18, 2015");
var today = new Date();

var diff = today.getTime() - ramadan.getTime();
var days = Math.floor(diff / (1000 * 60 * 60 * 24));

alert(days + " days have passed since 1st Ramadan, 2015");