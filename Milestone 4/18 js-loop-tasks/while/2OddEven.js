/***
Subtask-1:

Find all the odd numbers from 61 to 100.

 */

console.log("== Odd numbers from 61 to 100 ==");
//While Loop
var i = 61;
while(i <= 100){

    if(i % 2 !== 0){
        console.log(i);
        i++;
    }
    else{
        i++;
        continue;
    }
}

/***
Subtask-2:

Find all the even numbers from 78 to 98.

 */

console.log("== Even numbers from 78 to 98 ==");
//While Loop
var i = 78;

while(i <= 98){

    if(i % 2 == 0){
        console.log(i);
        i++;
    }
    else{
        i++;
        continue;
    }
}

/*programming hero*/