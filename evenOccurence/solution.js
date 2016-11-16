function evenOccurrence (arr) {
  for (var i=0; i < arr.length; i++) {
    var repeated = funnyContains(arr, arr[i]);
    if (repeated % 2 === 0) {
        return arr[i];
    }
  }
  return null;

  function funnyContains (arr, element) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
          counter++;
      }
    }
    return counter;
  };
}
