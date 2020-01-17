var input = prompt("Enter a value.");
var length = 5;


function multiples(x, n) { 
  var arr = [];
  for (var i = 1; i < n+1; i++) {
    arr.push(x*i);
  }
  return arr;
}

console.log(multiples(input, length));


//edabit.com/challenges/javascript
//medium challenges
