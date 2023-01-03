const sumAll = function(num1,num2) {
    let finalValue = 0;
let error = 'ERROR';
let biggerValue = Math.max(num1,num2);
let smallerValue = Math.min(num1,num2);

if ((typeof num1 == 'string') || (typeof num2 == 'string')) {
    return error;
} else if ((typeof num1 == 'object') || (typeof num2 == 'object')) {
    return error;
} else if ((biggerValue >= 0) && (smallerValue >= 0)) {
    for (let i = smallerValue; i <= biggerValue; i++ ) {
        finalValue += i;
    }
} else return error;
return finalValue;
}
   

// Do not edit below this line
module.exports = sumAll;
