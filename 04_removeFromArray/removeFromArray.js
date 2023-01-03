const removeFromArray = function(array,...args) {
let newArray = [...array];
return newArray.filter(element => !args.includes(element));
}
// Do not edit below this line
module.exports = removeFromArray;
