/***
Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

//While Loop
var sum = 0;
var i = 81;

while(i <= 131){

    if(i % 2 !== 0){
        // console.log(i);
        sum += i;
        i++;
    }
    else{
        i++;
        continue;
    }
}
console.log(sum);

/***
Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

//While Loop
var sum = 0;
var i = 206;

while(i <= 311){

    if(i % 2 == 0){
        // console.log(i);
        sum += i;
        i++;
    }
    else{
        i++;
        continue;
    }
}
console.log(sum);

/*programming hero*/