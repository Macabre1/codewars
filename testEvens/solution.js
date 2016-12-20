function keep(array, condition) {
  var newArray = [];
  for (var i = 0; i < array.length; i++){
    if(condition(array[i]))
      newArray.push(array[i]);
  }
  return newArray;
}

function evens(num) {
  if (typeof num === 'string'){
    num = num.length
  }
  if (num % 2 === 0){
  	return true;
  } else {
    return false;
  }
}

keep([1,'hello',2,3,4,5,'greeting',6], evens);
