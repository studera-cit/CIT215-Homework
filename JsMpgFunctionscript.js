var milPerYr = Number(prompt("Number of Miles per year: "));
var costGal = Number(prompt("Cost of gallon of gas in your area: "));

mpgCalc(milPerYr, costGal, 12, ".car1")

mpgCalc(milPerYr, costGal, 17, ".car2")

mpgCalc(milPerYr, costGal, 26, ".car3")

mpgCalc(milPerYr, costGal, 29, ".car4")


function mpgCalc(numOfMil, costGas, mpgRating, ele){
 var answer = (costGas * numOfMil ) / mpgRating;
  
  document.querySelector(ele).innerHTML = "To drive a car with an MPG rating of "  + mpgRating + " for " + numOfMil + " miles at $" + costGas + " per gallon would cost $" + answer; 
}