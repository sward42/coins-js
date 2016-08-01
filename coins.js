/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

// Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  var inputAmt ="";

function coinCounter (inputAmt) {

//var q  = inputAmt/.25; 
var numQuarters = parseInt(inputAmt/.25); 

inputAmt = inputAmt - (numQuarters * .25);

//var d = inputAmt/ .10;
var numDimes = parseInt(inputAmt/.10);

inputAmt = inputAmt - (numDimes * .10);

//var n = inputAmt/ .05;
var numNickels = parseInt(inputAmt/.05);

inputAmt = inputAmt - (numNickels * .05);

//var p = inputAmt/ .01;
var numPennies = parseInt(inputAmt/.01);
  

  coinPurse.quarters = numQuarters;
  coinPurse.dimes = numDimes;
  coinPurse.nickels = numNickels;
  coinPurse.pennies = numPennies;

  return coinPurse;
}

var coins = coinCounter()
console.log(coinPurse);




