function binarySearch(array,target) {
  var min = 0;
  var max = array.length - 1;
  var currIndex;
  var currElement;

  while (min <= max) {
    currIndex = (min + max) / 2 | 0;
    currElement = array[currIndex];

    if (currElement < target) {
      min = currIndex + 1;
    }
    else if (currElement > target) {
      max = currIndex - 1;
    }
    else {
      return currIndex;
    }
  }
  return -1;
};
