function firstNonRepeatedCharacter (string) {
  for (var i=0; i<string.length; i++) {
    var current = string[i];
    if (string.indexOf(current) === string.lastIndexOf(current)) {
      return current;
    }
  }
  return 'sorry';
}
