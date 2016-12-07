function firstNonRepeatedCharacter (string) {
  for (var i=0; i < string.length; i++) {
    var counter = 0;
    for (var j=0; j < string.length; j++) {
      if (string.charAt(i) === string.charAt(j)) {
        counter++;
      }
    }
    if (counter === 1) {
      return string.charAt(i);
    }
  }
  return 'sorry';
};
