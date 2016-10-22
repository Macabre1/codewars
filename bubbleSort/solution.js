var bubbleSort = function(input) {
  var swap = true;
  var sorted = 0;
  while(swap) {
    swap = false;
    for (var i = 0; i < input.length - 1 - sorted; i++){
      if (input[i] > input[i+1]) {
        var temp = input[i];
        input[i] = input[i+1];
        input[i+1] = temp;
        swap = true;
      }
    }
    sorted++;
  }
  return input;
};
