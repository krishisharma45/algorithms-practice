var num = prompt("Enter a number.");
var answer = 1024;

function solveForExponent(x, n) {
  var power = Math.log(n)/Math.log(x);
  return power;
}

console.log(solveForExponent(num, answer));
