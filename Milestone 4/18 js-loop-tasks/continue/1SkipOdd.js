/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

let i = 1;


//For Loop
// for(i; i <= 40; i++){
    
    
//     if( i % 2 == 0 ){
//         console.log(i);
//     }
//     else{
//         continue;
//     }
// }


//While Loop
while( i <= 40){

    if(i % 2 == 0){
        console.log(i);
        i++;
    }
    else{
        i++;
        continue;
    }
}