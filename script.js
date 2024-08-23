//Sum two digits
function sumTwoDigits(numberOne , numberTwo) {
    return numberOne + numberTwo;
}
//Sum digits in array
function sumArray(array) {
    let value = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === 'number') {
        value += array[i];
        }
        else {
            return 'noSum';
        }
    }
    return value;
}
//Find min, max in array
function findMinMaxArray(array) {
    let min = array[0];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === 'number') {
            if (array[i] < min) {
                min = array[i];
            }
            else if (array[i] > max) {
                max = array[i];
            }
        else {
            return 'notFind';
        }
        }
    }
    return [min, max];
}
//Count string in array
function countStringArray(string) {
    return string.length;
}
