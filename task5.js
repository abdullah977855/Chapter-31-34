let date = new Date();
let exactDate = date.getDate();
console.log(exactDate);
if(exactDate < 16){
    alert("First Fifteen days of the month")
}else if(exactDate >= 16){
    alert("Last Fifteen Days of the month")
}