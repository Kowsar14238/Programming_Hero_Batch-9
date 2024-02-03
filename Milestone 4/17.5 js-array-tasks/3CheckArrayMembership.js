
// 1. Create an array of books containing different book.
var booksArray = ["The Hobbit","Harry Potter","Pride and Prejudice","1984","The Catcher","The Hobbit","JavaScript ES6"];
// console.log(booksArray);

// 2. Use the includes method to check if the array contains a javascript book.
// console.log(booksArray.includes('JavaScript'));
console.log(booksArray.includes('JavaScript ES6'));

// 3. Print a message to the console indicating whether the element is present in the array or not.
// console.log(Array.isArray(booksArray));

arrayCheck = Array.isArray(booksArray);

if(arrayCheck === true){
    console.log("Array");
}
else{
    console.log("Not array");
}