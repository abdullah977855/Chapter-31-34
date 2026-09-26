var currentDate = new Date();

alert(
  "Current date: " + currentDate +
  "\n100 years back, it was " +
  new Date(currentDate.setFullYear(currentDate.getFullYear() - 100))
);