function validParentheses(parens){
  var countOpen = 0;
  var countClose = 0;
  for(var i=0; i<parens.length;i++){
    if(parens[0] !== "(" || parens[parens.length-1] !== ")" || parens.length % 2 !== 0){
      return false;
    }
    if(parens[i] === "("){
      countOpen += 1;
    }
    if(parens[i] === ")"){
      countClose += 1;
    }
  }
  return true && countOpen === countClose;
}
