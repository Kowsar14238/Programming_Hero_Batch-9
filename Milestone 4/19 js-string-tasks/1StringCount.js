// Count how many times a string has the letter `a`

let myString = "JavaScript is an awesome language!";
let count = 0;

for(let i = 0; i < myString.length; i++){

    if(myString[i] === 'a'){
        count++;
    }
}
console.log(count);
