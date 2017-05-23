function fizzBuzz (value) {
  if (value % 5 === 0 && value % 3 === 0) {
    return("FizzBuzz");
  } else if (value % 5 === 0) {
    return("Buzz");
  } else if (value % 3 === 0) {
    return("Fizz");
  } else {
   return(value);
  }
}
