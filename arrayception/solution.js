function arrayception (array) {
  var count = 0;

  var goDeep = function(array, depth) {
    for (var i=0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        goDeep(array[i], depth + 1)
      } else {
        count = Math.max(depth, count);
      }
    }
  }
  goDeep(array, 1);
  return count;
}
