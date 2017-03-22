function deleteNth(arr,x){
  var result = [];
  arr.forEach(function(n) {
    if (!result.includes(n) || x !== countInArray(result, n)){
      result.push(n);
    }
  });
  return result;
}

function countInArray(array, value) {
  return array.reduce((n, x) => n + (x === value), 0);
}
