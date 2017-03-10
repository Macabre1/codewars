// note this solution uses ES6

String.prototype.toJadenCase = function () {
  var result = Object.values(this).join("");
  for (var i = 0; i < result.length; i++){
    if (result[i] === " "){
      result = result.substr(0, i) + " " + result[i+1].toUpperCase() + result.substr(i+2);
    }
  }
  return result;
};
