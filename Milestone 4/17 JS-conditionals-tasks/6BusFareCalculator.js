/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


let ticketFare = 800;
let newTicketFare;

// let category = 'Children';
// let age = 5;

// let category = 'Student';
// let age = 25;

// let category = 'Senior citizen';
// let age = 50;

// let category = 'Senior citizen';
// let age = 65;

let category = 'Children';
let age = 11;


if(category == 'Children' && age < 10){
    newTicketFare = ticketFare - ticketFare;
    console.log(newTicketFare);
}
else if(category == 'Student'){
    newTicketFare = ticketFare * 0.5; //50% = (50/100) = 0.5
    console.log(newTicketFare);
}
else if(category == 'Senior citizen' && age >= 60){
    newTicketFare = ticketFare - (ticketFare * 0.15); //15% = (15/100) = 0.15
    console.log(newTicketFare);
}
else{
    console.log("Regular ticket Fair: "+ ticketFare);
}


