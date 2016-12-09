nthFibonacci = function(n) {
  var iguanapocalypse = 0;
  if (n >= 1) {
    var a = 0, b = 1, c = 1;
    for (var i = 2; i <= n; i++) {
      c = a + b;
        a = b;
        b = c;
    }
    return c;
  } else {
    return iguanapocalypse;
  }
};
