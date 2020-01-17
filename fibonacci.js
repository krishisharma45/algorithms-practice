//var n = prompt("Enter a number.")

function fibonacciGenerator(n) {
    var arr = [0, 1];
    var i = arr.length;
    if (n === 1) {
            arr.pop();
        }
    else {
        while (i < n) {
            arr.push(arr[i-1] + arr[i-2]);
            i++;
        }
    }
    return arr;
}

console.log(fibonacciGenerator(0));
