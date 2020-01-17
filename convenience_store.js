function Payment([quarter, dime, nickel, penny], payment) {
  this.change = [quarter, dime, nickel, penny];
  this.payment = payment;
  this.changeEnough = function () {
    q = quarter*0.25;
    d = dime*0.1;
    n = nickel*0.05;
    p = penny*0.01;
    total = q + d + n + p;
    if (total > payment){
      console.log("You will receive $" + difference(total, payment) + " cents in change from the cashier.");
    }
    else if (total === payment) {
      console.log("You have exactly enough!");
    }

    else {
      console.log("You need $" + difference(total, payment) + " cents to complete this payment.");
    }
  }
}

function difference(t, p) {
  var diff = Math.abs(t - p).toFixed(2);
  return diff;
}
