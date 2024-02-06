/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let i = 1;
let squareValue;

//For Loop
// for(i; i <= 100; i++){

//     squareValue = i*i;
    
//     if( i == 1){
//         // console.log(i);
//         continue;
//     }
//     if(i == squareValue){
//         break;
//     }
//     else{
//         // console.log(i);
//     }
// }

// console.log("The first square number encountered within 1 to 100 is:", i);

//While Loop
while(i <= 100){
    squareValue = i*i;
    
    if( i == 1){
        // console.log(i);
        i++;
        continue;
    }
    if(i == squareValue){
        break;
    }
    else{
        // console.log(i);
        i++;
    }
}

console.log("The first square number encountered within 1 to 100 is:", i);