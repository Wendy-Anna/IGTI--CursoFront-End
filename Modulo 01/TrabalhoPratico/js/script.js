function soma(a, b) {
  return a + b;
}
console.log(soma(3, 5));

function subtracao1(a, b) {
  return a - b;
}
console.log(subtracao1(3, 5));

function subtracao2(a, b) {
  return b - a;
}
console.log(subtracao2(3, 5));

function multiplicacao(a, b) {
  return a * b;
}
console.log(multiplicacao(3, 5));

function divisaoAB(a, b) {
  var valor = this.divisaoPorZeroB(b);

  if (!valor) {
    return a / b;
  }

  return valor;
}
console.log(divisaoAB(3, 5));

function divisaoPorZeroB(b) {
  if (b === 0) {
    return 'Não pode se dividir 0';
  }
  return '';
}

function divisaoBA(a, b) {
  var valor = this.divisaoPorZeroA(a);

  if (!valor) {
    return b / a;
  }

  return valor;
}
console.log(divisaoBA(3, 5));

function divisaoPorZeroA(a) {
  if (a === 0) {
    return 'Não pode se dividir 0';
  }
  return '';
}

function quadradoA(a) {
  return a ** 2;
}
console.log(quadradoA(3));

function quadradoB(b) {
  return b ** 2;
}
console.log(quadradoB(5));

function inteirosA(a) {}

/*

Os divisores inteiros de A em forma de lista, separada por vírgulas e indicação
da quantidade total entre parênteses.
j.
Os divisores inteiros de B em forma de lista, separada por vírgulas e indicação
da quantidade total entre parênteses.

*/

function fatorialA(a) {
  if (a <= 21) {
    if (a == 0) {
      return 1;
    } else {
      return a * fatorialA(a - 1);
    }
  } else {
    return 'Número muito grande';
  }
}
console.log(fatorialA(3));

function fatorialB(b) {
  if (b <= 21) {
    if (b == 0) {
      return 1;
    } else {
      return b * fatorialA(b - 1);
    }
  } else {
    return 'Número muito grande';
  }
}
console.log(fatorialB(5));

function fatorialSimples(n) {
  var r = 1;
  console.log('R do inicio' + r);
  for (var i = n; i > 1; i--) {
    r *= i;
    console.log('R do for' + r);
  }
  return r;
  console.log('R do return' + r);
}

function divisoresNumero(n) {
  var r = [];
  console.log('R do inicio= ' + r);
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      r.push(i);
      console.log('R do i= ' + r);
    }
  }
  return r;
}
