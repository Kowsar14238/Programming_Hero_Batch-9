/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let i = 1;
let sum = 0;

//While Loop
while(i < 100){

    sum += i;

    if( sum >= 100){
        break;
    }
    else{
        console.log(i, ' => ', sum);
        i++;
    }
}

// for(i; i < 100; i++){
    
//     sum += i;

//     if(sum >= 100){
//         break;
//     }
//     else{
//         console.log(i, ' => ', sum);
//     }
// }


