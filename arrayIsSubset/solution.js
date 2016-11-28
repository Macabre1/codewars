function isSubset (array, sub) {
  var result = true;
  for (var i; i < sub.length; i++) {
    for (var j; j < array.length; j++) {
      if (sub[i] === array[j]) {
        console.log(sub[i], array[j])
        result = true;
      } else {
        console.log(sub[i], array[j])
        return false;
      }
    }
  }
  return result;
}
