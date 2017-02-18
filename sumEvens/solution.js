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
