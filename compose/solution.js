var compose = function() {
  var bunchaFuncts = arguments;
  return function() {
    var args = arguments;
    var length = bunchaFuncts.length;
    while (length--) {
      args = [bunchaFuncts[length].apply(this, args)];
    }
    return args[0];
  };
};
