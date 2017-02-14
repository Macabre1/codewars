// words within words

function nestedWordCount (wordList) {
  var biggest = [-1, ''];
  wordList.forEach(function(word) {
    var count = 0;
    wordList.forEach(function(word2) {
      if(word.indexOf(word2) > -1) {
        count++;
      }
    });
    if(count > biggest[0]) {
      biggest = [count, word];
    }
  });
  return biggest[1];
};
