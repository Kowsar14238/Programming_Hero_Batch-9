
let myString = "JavaScript is an awesome language! Aardvarks are amazing!";
let count = 0;

for(let i = 0; i < myString.length; i++){

    if(myString[i] === 'a' || myString[i] === 'A'){
        count++;
    }
}
console.log(count);