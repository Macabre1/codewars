String.prototype.toJadenCase = function () {
  var result = this.charAt(0).toUpperCase() + this.slice(1);
  for (var i = 0; i < result.length; i++){
    if (result[i] === " "){
      result = result.substr(0, i) + " " + result[i+1].toUpperCase() + result.substr(i+2);
    }
  }
  return result;
};
