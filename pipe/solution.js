var pipe = function() {
  var bunchaFuncts = arguments;
  return function() {
    var args = arguments;
    for(var i=0; i < bunchaFuncts.length; i++) {
     args = [bunchaFuncts[i].apply(null, args)];
   }
   return args[0];
 }
};
