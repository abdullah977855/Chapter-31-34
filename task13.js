var age = prompt("Enter your age:");

var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + birthYear);