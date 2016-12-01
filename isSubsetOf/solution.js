Array.prototype.isSubsetOf = function(array) {
  return this.reduce(function (acc, val) {
    if (acc) {
      return array.includes(val);
    }
    return false;
  }, true)
};
