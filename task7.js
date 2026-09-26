let date = new Date();
let hours = date.getHours();
let amOrPm;
if (hours >= 12) {
    amOrPm= "PM";
    alert("It's " + amOrPm)
} else {
    amOrPm = "AM";
    alert("It's " + amOrPm)
}