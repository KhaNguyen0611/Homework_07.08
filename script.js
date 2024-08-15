//Tong 2 so
function sum(numberOne , numberTwo) {
    var result = numberOne + numberTwo;
    return result;
}
//Tong mang
function sumArray(array) {
    var value = 0;
    for (let i = 0; i < array.length; i++) {
        value = value + array[i];
    }
    return value;
}
//Tim min, max array
function findMinMax(array) {
    let min = array[0];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i] < min) {
            min = array[i];
        }
    }
    for (let i = 0; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i];
        }
    }
    return {min, max};
}
//Dem so ky tu trong chuoi
const text = "Hello1"
function countString(string) {
   const result = string.length;
   return result;
}
