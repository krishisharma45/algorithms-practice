var n = [-3,0,8,-6];

function indexMultiplier(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + (arr[i] * i);
  }
  return sum;
}

console.log(indexMultiplier(n));
