/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// let ownMarks = 90;

// let friendMarks = 85;
// let friendMarks = 78;
// let friendMarks = 58;
// let friendMarks = 38;
// let friendMarks = -7;

// let ownMarks = 70;
// let friendMarks = 88;

let ownMarks = -7;
let friendMarks = 88;


if(ownMarks >= 80){
    
    if(friendMarks >= 80){
        console.log("Go for a lunch with your friend.");
    }
    else if(friendMarks < 80 && friendMarks >= 60){
        console.log(" Wish good luck next time to your friend.");
    }
    else if(friendMarks < 60 && friendMarks >= 40){
        console.log("Message unseen of your friend.");
    }
    else if(friendMarks < 40 && friendMarks >= 0){
        console.log("Block your friend.");
    }
    else{
        console.log("Enter your friend marks between 0 to 100.");
    }
}
else if(ownMarks < 80 && ownMarks >= 0){
    console.log("Go to home and sleep and act sad.");
}
else{
    console.log("Enter your marks between 0 to 100.");
}
