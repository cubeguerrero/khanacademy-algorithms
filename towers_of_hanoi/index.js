
var sparePeg = "C";
var fromPeg = "A";
var toPeg = "B";
var totalMoves = 0;

function solveHanoi(numDisks) {
  _solveHanoi(numDisks, fromPeg, toPeg);
}

function _solveHanoi(numDisks, fromPeg, toPeg) {
  if (numDisks === 0) {
    return;
  }

  _solveHanoi(numDisks - 1, fromPeg, sparePeg);
  console.log(`Moving from ${fromPeg} to ${toPeg}`);
  totalMoves += 1;
  _solveHanoi(numDisks - 1, sparePeg, toPeg);
}

solveHanoi(3);
console.log(totalMoves);