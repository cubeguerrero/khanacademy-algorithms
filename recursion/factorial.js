function factorialIterative(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}

function factorialRecursive(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorialRecursive(n - 1);
}

console.log(factorialIterative(5)); // 120
console.log(factorialRecursive(5)); // 120