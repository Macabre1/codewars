function sumTwoSmallestNumbers(numbers) {
  var sortNums = numbers.sort(function(a, b){return a-b});
  return sortNums[0] + sortNums[1];
}
