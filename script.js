//Sum two digits
function sumTwoDigits(numberOne, numberTwo) {
  if (typeof numberOne !== "number" || typeof numberTwo !== "number") {
    return 0;
  }
  return numberOne + numberTwo;
}
//Sum digits in array
function sumDigitsInArray(array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number" || !Array.isArray(array)) {
      return 0;
    } else {
      total += array[i];
    }
  }
  return total;
}
//Find min, max in array
function findMinMaxInArray(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      if (array[i] < min) {
        min = array[i];
      } else if (array[i] > max) {
        max = array[i];
      }
    } else {
      return [];
    }
  }
  return [min, max];
}
//Count string in array
function countNumberCharacterInString(string) {
  if (typeof string !== "string") {
    return 0;
  }
  return string.length;
}
