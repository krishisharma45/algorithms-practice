/* Problem: There is an elevator in a building with M floors.
This elevator can take a max of X people at a time or max of
total weight Y. Given that a set of people and their weight
and the floor they need to stop, how many stops has the elevator
taken to serve all the people? Consider the elevator serves in
“first come first serve” basis and the order for the queue can
not be changed.

Example: Let Array A be the weight of each person A = [60, 80, ss40].
Let Array B be the floors where each person needs to be dropped
off B = [2, 3, 5].
ss
The building has 5 floors, maximum of 2 persons are allowed in the
elevator at a time with max weight capacity being 200. For this example,
the elevator would take total of 5 stops in floors: 2, 3, G, 5
and finally G.

Constraints: A persons' weight is over 0 lbs/kgs. */

function calculateStops(maxPeople, maxWeight, weightQueue, floorQueue){
  let weightStack = [];
  let floorSet = new Set();
  let stops = 0;
  while (weightQueue.length){
    totalWeight = weightStack.reduce((a, b) => a + b, 0);
    if ((weightStack.length < maxPeople) && (totalWeight < maxWeight)){
      weightStack.push(weightQueue.shift());
      floorSet.add(floorQueue.shift());
    }
    else{
      stops+=floorSet.length + 1;
      weightStack = [];
      floorSet = floorSet.clear();
    }
  }
  stops+=floorSet.length + 1;
  return stops;
}

var A = [60, 80, 40];
var B = [2, 3, 5];
var maxPeople = 2;
var maxWeight = 200;

stops = calculateStops(maxPeople, maxWeight, A, B);
console.log('Number of Stops: ', stops);
