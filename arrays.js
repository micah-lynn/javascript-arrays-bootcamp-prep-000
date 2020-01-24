var chocolateBars = [
  "snickers",
  "hundred grand",
  "kit kat",
  "skittles"
  ];
  
function addElementToBeginningOfArray (chocolateBars, candyString) {
  return [candyString, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray (chocolateBars, candyString) {
  chocolateBars.unshift(candyString);
  return chocolateBars
}