function sqInRect(lng, wdth){
  if(lng === wdth){
    return null;
  }
  var squares = [];

  while(lng !== wdth){
    if (lng > wdth) {
      squares.push(wdth);
      lng = lng - wdth;
    } else {
      squares.push(lng);
      wdth = wdth - lng;
    }
  }
  squares[squares.length] = squares[squares.length -1];

  return squares;
}
