function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }

  if (year % 100 === 0) {
    return false;
  }

  if (year % 4 === 0) {
    return true;
  }
  return false;
}
console.log(isLeapYear(2040));
console.log(isLeapYear(1800));
console.log(isLeapYear(2000));
console.log(isLeapYear(1999));
