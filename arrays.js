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
  return chocolateBars;
}

function addElementToEndOfArray (chocolateBars, candyString) {
  return [...chocolateBars, candyString]
}

function destructivelyAddElementToEndOfArray (chocolateBars, candyString) {
  chocolateBars.push(candyString);
  return chocolateBars;
}

function accessElementInArray (chocolateBars, )