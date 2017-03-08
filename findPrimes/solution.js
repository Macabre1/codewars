function isPrime(num) {
  var toStr = num.toString();
  var last = toStr.charAt(toStr.length-1);
  if (num === 2 || num === 3){
    return true;
  }
  if(num % 2 === 0 || num % 3 === 0 || last === 5 && num > 5 || num === 1 || num < 0){
    return false;
  }
  return true;
}
