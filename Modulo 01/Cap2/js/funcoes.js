function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));

function compereNumbers(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}

console.log(compereNumbers(1, 1));
console.log(compereNumbers(1, 2));
console.log(compereNumbers(2, 1));

function somatorio(from, upTo) {
  var sun = 0;

  for (var i = from; i <= upTo; i++) {
    sum += i;
  }
  return sum;
}
