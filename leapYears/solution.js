function leapYears(n) {
  var leapers = [];
  var currentYear = new Date().getFullYear();
  for (var year = currentYear; year <= currentYear+n; year++) {
    if(!(year % 400)) {
      leapers.push(year);
    } else if(!(year % 4) && year%100 !== 0) {
      leapers.push(year);
    }
  }
  return leapers;
}

assert(JSON.stringify(leapYears(10)) === JSON.stringify([2020, 2024]), 'should correctly return all leap years within the next 5 years');

assert(areArraysEqual(leapYears(50), [2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064], 'should correctly return all leap years within the next 50 years'));

assert(leapYears(500).indexOf(2300) === -1, 'should return an array of years taht does not contain 2300');
