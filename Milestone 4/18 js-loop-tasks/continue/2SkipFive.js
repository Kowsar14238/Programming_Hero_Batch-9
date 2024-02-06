/*
Display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

let i = 55;

//For Loop
for(i; i <= 85; i++){

    if(i % 2 !== 0 && i % 5 !== 0){
        console.log(i);
    }
    else{
        continue;

    }
}


//While Loop
// while(i <= 85){

//     if(i % 2 !== 0 && i % 5 !== 0){
//         console.log(i);
//         i++;
//     }
//     else{
//         i++;
//         continue;
//     }
// }
