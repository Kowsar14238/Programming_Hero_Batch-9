/***
Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */

//For Loop
var sum = 0;

for(let i = 91; i <= 129; i++){

    if(i % 2 !== 0){
        sum += i;
        // console.log(i);
    }
    else{
        continue;
    }
}
console.log(sum);


/***
Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

//For Loop
var sum = 0;

for(let i = 51; i <= 85; i++){

    if(i % 2 == 0){
        sum += i;
        // console.log(i);
    }
    else{
        continue;
    }
}
console.log(sum);

/*programming hero*/