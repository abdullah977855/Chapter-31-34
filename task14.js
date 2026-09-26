let customerName = "Rehan";
let month = "February";
let numberOfUnit = 410;
let chargesPerUnit = 16;
let netAmount = numberOfUnit * chargesPerUnit;
let lateCharges = 350;
let grossAmount = netAmount + lateCharges;

document.write("<h1>K-Eletric Bill</h1>" + "<br>")
document.write("<br>")
document.write("Customer Name: " + customerName + "<br>")
document.write("Month: " + month + "<br>")
document.write("Number of Unit: " + numberOfUnit + "<br>")
document.write("Charges per unit: " + chargesPerUnit + "<br>")
document.write("<br>")
document.write("Net Amount Payable (within due date): " + netAmount + "<br>")
document.write("Late Payment Surcharge: " + lateCharges + "<br>")
document.write("Gross Amount Payable (after due date): " + grossAmount + "<br>")