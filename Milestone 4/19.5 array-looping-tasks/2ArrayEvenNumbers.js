
const numbers = [12, 98, 5, 41, 23, 78, 46];
const numbersNewArray = [];
for(let i = 0; i < numbers.length; i++){

    if(numbers[i] % 2 == 0){
        numbersNewArray.push(numbers[i]);
    }
}

console.log(numbersNewArray);