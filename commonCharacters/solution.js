commonCharacters = function(string1, string2) {
  var arr1 = string1.split('');
  var arr2 = string2.split('');
  var obj = {};
  var result = '';

  for (var i=0; i < arr1.length; i++) {
    var first = arr1[i];
    for (var j=0; j < arr2.length; j++) {
      var second = arr2[j];
      if (second === first) {
        obj[first] = 1;
      }
    }
  }

  for (var key in obj) {
    if (key !== ' ') {
      result += key;
    }
  }
  return result;
};
