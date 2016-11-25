function longestImprovement (numbers) {
  var longest = 1,
      current = longest;
  for(var i = 1; i < numbers.length; i++){
    if(numbers[i] > numbers[i - 1]){
      current++;
    } else {
      if(current > longest){
        longest = current;
      }
      current = 1;
    }
  }
  if(current > longest){
    longest = current;
  }
  return longest
}
