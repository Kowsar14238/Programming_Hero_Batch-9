
// 1. Create different variables, each containing either an array or a non-array value.
let array = [15, 72, 23, 45, 60];
let nonArray = '91, 62, 34, 42';

// 2. Now use isArray to check if each variable is an array.
let arrayCheck = Array.isArray(array);
console.log(arrayCheck);

let arrayCheck2 = Array.isArray(nonArray);
console.log(arrayCheck2);

// 3. Print a message to the console indicating whether each variable is an array or not.

if(arrayCheck === true){
    console.log('Array');
}
if(arrayCheck2 === false){
    console.log('Non Array');
}