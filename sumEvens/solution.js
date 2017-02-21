// recursive solution for sumEvens

function sumEvens(n){
  if (n === 0) {
    return 0;
  } else if (n%2 === 0) {
    return (n) + sumEvens(n-2);
  } else {
    return sumEvens(n-1);
  }
}


// iterative solution for sumEvens

function sumEvenss(n){
  var count = 0;
  if (n%2 !== 0){
    n-=1;
  }
  while(n > 0){
    count+=n;
    n-=2;
  }
  return count;
}
