// const numbers = [1,2,3,4,5,6,7,8,9]
// var result = numbers.find(function(number) {
//     console.log(number);
// })


const numbers = [1,2,3,4,5,6,7,8,9]
var result = numbers.find(function(number) {
    return number>4;
    // if the condition found a number which is grather then 4
    // it will return only that numbers
    // it will not go for next item 
})
console.log('main array: ',numbers);
console.log('conditionoutput: ',result);

