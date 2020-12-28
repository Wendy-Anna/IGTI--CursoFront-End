var a = 5,
  b = 6;
if (a > b) {
  console.log(a + ' é maior que ' + b);
} else {
  if (a < b) {
    console.log(a + ' é menor que ' + b);
  } else {
    console.log(a + ' é igual a ' + b);
  }
}

//Somatório com while

var numAtual = 1;
var somatorio = 0;

while (numAtual <= 10) {
  somatorio += numAtual;
  console.log(somatorio);
  numAtual++;
}
console.log('A soma é ' + somatorio);
//Somatório com DoWhile
do {
  somatorio += numAtual;
  console.log(somatorio);
  numAtual++;
} while (numAtual <= 10);
console.log('A soma é ' + somatorio);

//Somatório com for
somatorio = 7;
for (numAtual = 1; numAtual <= 10; numAtual++) {
  somatorio += numAtual;
}
console.log('A soma é total ' + somatorio);
