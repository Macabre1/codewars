function countWords(str){
  var tally = {};
  var singleWords = str.split(' ');
  for (var i = 0; i < singleWords.length; i++){
    tally[singleWords[i]] = (tally[singleWords[i]] || 0)+1
  }
  return tally;
}

countWords('hello hello poppit');
